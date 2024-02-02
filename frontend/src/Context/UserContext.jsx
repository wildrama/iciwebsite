import React, { createContext } from 'react';
import { fetchUrl, frontUrl } from '../config.js';
import { generateNotifyError, generateNotifySuccess } from './Context.jsx'
import Cookies from 'js-cookie';
export const UserContext = createContext();

const UserProvider = ({children}) =>{
    const loginUser = async (userData) =>{
        try {
            const response = await fetch(`${fetchUrl}/api/user/login`,{
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userData),
            });
            if(response.ok){
                const res = await response.json()
                Cookies.set('userToken', res.data);
                setTimeout( ()=>{window.location.href = `${frontUrl}/usuario`}, 2000)
                return res 
            } else {
                const res = await response.json()
                if(res.errors === 'invalidCredentials') return generateNotifyError('Email o contraseña incorrectos!')
            }
        } catch (error) {
            generateNotifyError('Hubo un error, prueba mas tarde!')
            throw new Error(error);
        };
    };
    const token = Cookies.get('userToken');

    const sendRecoverPassEmail = async (userEmail) =>{
        try {
            const response = await fetch(`${fetchUrl}/api/email/recover`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userEmail),
            });
            if(response.ok){
                const res = await response.json()
                if(res.data === 'sentSuccessfully') generateNotifySuccess('Email enviado correctamente!')
                return res
            } else {
                const res = await response.json()
                if(res.errors === 'theMailIsNotRegistered') return generateNotifyError('Email no registrado!')
            }
        } catch (error) {
            generateNotifyError('Hubo un error, prueba mas tarde!')
            throw new Error(error);
        };
    };

    const changePass = async (changeToken, newPassword) =>{
        try {
            const response = await fetch(`${fetchUrl}/api/user/recover`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': changeToken,
                },
                body: JSON.stringify(newPassword)
            });
            if (response.ok) {
                const res = await response.json();
                setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
                return res
            } else {
                const error = await response.json();
                if(error.errors === 'thePasswordsAreTheSame') return generateNotifyError('Esta es la contraseña actual!')
                if(error.errors === 'expiredToken') return generateNotifyError('Tu token expiro, vuelve a enviar el Email!')
                if(error.errors === 'veryShort') return generateNotifyError('La contraseña debe tener mas de 6 caracteres!')
                generateNotifyError('Hubo un error, prueba mas tarde!')
            }
        } catch (error) {
            generateNotifyError('Hubo un error, prueba mas tarde!')
            setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            throw new Error(error)
        };
    };

    const registerUser = async (registerToken, userData) =>{
        try {
            const response = await fetch(`${fetchUrl}/api/user/register`,{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': registerToken,
                },
                body: JSON.stringify(userData),
            });
            if(response.ok){
                const res = await response.json();
                setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
                return res
            } else {
                const res = await response.json()
                if(res.errors === 'theMailIsNotRegistered') return generateNotifyError('Email no registrado!')
            }
        } catch (error) {
            generateNotifyError('Hubo un error, prueba mas tarde!')
            setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            throw new Error(error)
        };
    };

    const getStudents = async (page, key, value, sortField, sortOrder) =>{
        try {
            const url = `${fetchUrl}/api/student?${page ?? 'page=1'}&limit=20${ value ? '&key='+ key : ''}${value ? '&value='+ value : ''}&${sortField ?? 'sortField=registrationDate'}&${sortOrder ?? 'sortOrder=desc'}`;
            const response = await fetch(url,{
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                },
            })
            if(response.ok){
                const res = await response.json();
                return res
            } else {
                generateNotifyError('Tu token expiro, vuelve a iniciar sesión!')
                setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            }
        } catch (error) {
            generateNotifyError('Hubo un error, prueba mas tarde!');
            setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            throw new Error(error);
        };
    };

    return (
        <UserContext.Provider value={{loginUser, registerUser, sendRecoverPassEmail, changePass, getStudents}}>
        {children}
        </UserContext.Provider>
    )
};

export default UserProvider