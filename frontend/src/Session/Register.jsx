import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import { generateNotifyError } from '../Context/Context';
import { useParams } from 'react-router-dom';

const Register = () => {
    const { registerToken } = useParams(); 
    const { registerUser } = useContext(UserContext)
    const handleSubmitRegister = (event) => {
        event.preventDefault();
        const password = document.querySelector('#user_password').value
        const passwordConfirm = document.querySelector('#user_password_confirm').value
        if(password === passwordConfirm) {
            const userData = {
                firstName:document.querySelector('#user_firstname').value,
                lastName:document.querySelector('#user_lastname').value,
                email:document.querySelector('#user_email').value,
                password: password,
                dni:document.querySelector('#user_dni').value
            }
            registerUser(registerToken, userData)
        } else generateNotifyError('Las constraseñas deben coincidir!')
    };
    return (
    <>
        <div id='inputs' className='padding-foot padding-head'>
                <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-5 card">
                    <div className="card-header">
                        <div className="text-header">Registro</div>
                    </div>
                <div className="card-body">
                    <form onSubmit={handleSubmitRegister}>
                            <div className="form-group">
                                <label htmlFor="firstname">Nombre :</label>
                                <input required className="form-control" name="firstname" id="user_firstname" type="text"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Apellido :</label>
                                <input required className="form-control" name="lastName" id="user_lastname" type="text"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email :</label>
                                <input required className="form-control" name="email" id="user_email" type="email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña :</label>
                                <input required className="form-control" name="password" id="user_password" type="password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Confirmar contraseña :</label>
                                <input required className="form-control" name="password" id="user_password_confirm" type="password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dni">DNI :</label>
                                <input required className="form-control" name="dni" id="user_dni" type="number"/>
                            </div>
                        <div className="d-flex justify-content-center p-4">
                            <input className="btn2" type="submit" value="Registrarse" />
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    </>
    )
}

export default Register