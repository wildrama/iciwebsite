import React, { createContext } from 'react';
import { fetchUrl, frontUrl } from '../config.js';
import { generateNotifyError, generateNotifySuccess } from './Context.jsx'
import Cookies from 'js-cookie';
export const AdminContext = createContext();

const AdminProvider = ({children}) =>{

    const token = Cookies.get('userToken');
    const editStudent = async (studentId, studentUpdated) =>{
        try {
            const response = await fetch(`${fetchUrl}/api/student/${studentId}`,{
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(studentUpdated)
            });
            if(response.ok){
                const res = await response.json()
                return res 
            } else {
                const res = await response.json()
                if(res.errors === 'onlyAdminsAreAuthorized') generateNotifyError('No estas autorizado!')
                if(res.errors === 'RepeatedDni') generateNotifyError('Ya existe un estudiante con ese DNI!')
                return res
            }
        } catch (error) {
            generateNotifyError('Hubo un error, prueba mas tarde!');
            setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            throw new Error(error);
        };
    };

    const deleteStudent = async (studentId) =>{
        try {
            const response = await fetch(`${fetchUrl}/api/student/${studentId}`,{
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                }
            })
            if(response.ok){
                await response.json();
                generateNotifySuccess('Estudiante eliminado correctamente!')
                return 'success'
            } else {
                const res = await response.json();
                if(res.errors === 'onlyTheOwnerIsAuthorized') return generateNotifyError('No estas autorizado!')
                generateNotifyError('Tu token expiro, vuelve a iniciar sesión!')
                setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            }
        } catch (error) {
            generateNotifyError('Hubo un error, prueba mas tarde!');
            setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            throw new Error(error);
        };
    }

    const getUsers = async (page, key, value, sortField, sortOrder) =>{
        try {
            const url = `${fetchUrl}/api/user/all?${page ?? 'page=1'}&limit=20${ value ? '&key='+ key : ''}${value ? '&value='+ value : ''}&${sortField ?? 'sortField=dni'}&${sortOrder ?? 'sortOrder=desc'}`;
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
                const res = await response.json();
                if(res.errors === 'onlyAdminsAreAuthorized'){
                    setTimeout( ()=>{window.location.href = `${frontUrl}/usuario/inscriptos`}, 2000)
                    return generateNotifyError('No estas autorizado!')
                }
                generateNotifyError('Tu token expiro, vuelve a iniciar sesión!')
                setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            }
        } catch (error) {
            generateNotifyError('Hubo un error, prueba mas tarde!');
            setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            throw new Error(error);
        };
    }

    const addUser = async (newUserEmail) =>{
        try {
            const response = await fetch(`${fetchUrl}/api/email/teacher/registration`,{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(newUserEmail)
            })
            if(response.ok){
                await response.json();
                generateNotifySuccess('Email enviado, el usuario tiene 2hrs para registrarse!')
                return 'success'
            } else {
                const res = await response.json();
                if(res.errors === 'emailRegistered') return generateNotifyError('Este email ya esta registrado!')
                if(res.errors === 'onlyTheOwnerIsAuthorized') return generateNotifyError('No estas autorizado!')
                generateNotifyError('Tu token expiro, vuelve a iniciar sesión!')
                setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            }
        } catch (error) {
            generateNotifyError('Hubo un error, prueba mas tarde!');
            setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            throw new Error(error);
        };
    };

    const changeUserRole = async (userId) =>{
        try {
            const response = await fetch(`${fetchUrl}/api/user/role/${userId}`,{
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                }
            })
            if(response.ok){
                await response.json();
                generateNotifySuccess('Usuario modificado correctamente!')
                return 'success'
            } else {
                const res = await response.json();
                if(res.errors === 'onlyTheOwnerIsAuthorized') return generateNotifyError('No estas autorizado!')
                generateNotifyError('Tu token expiro, vuelve a iniciar sesión!')
                setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            }
        } catch (error) {
            generateNotifyError('Hubo un error, prueba mas tarde!');
            setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            throw new Error(error);
        };
    }

    const deleteUser = async (userId) =>{
        try {
            const response = await fetch(`${fetchUrl}/api/user/${userId}`,{
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                }
            })
            if(response.ok){
                await response.json();
                generateNotifySuccess('Usuario eliminado correctamente!')
                return 'success'
            } else {
                const res = await response.json();
                if(res.errors === 'onlyTheOwnerIsAuthorized') return generateNotifyError('No estas autorizado!')
                generateNotifyError('Tu token expiro, vuelve a iniciar sesión!')
                setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            }
        } catch (error) {
            generateNotifyError('Hubo un error, prueba mas tarde!');
            setTimeout( ()=>{window.location.href = `${frontUrl}/inicio`}, 2000)
            throw new Error(error);
        };
    }

    return (
        <AdminContext.Provider value={{editStudent, deleteStudent, deleteUser, changeUserRole, getUsers, addUser}}>
        {children}
        </AdminContext.Provider>
    )
};

export default AdminProvider