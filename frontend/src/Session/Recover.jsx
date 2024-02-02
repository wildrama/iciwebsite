import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import { generateNotifyError } from '../Context/Context';
import { useParams } from 'react-router-dom';

const Recover = () => {
    const { changePass } = useContext(UserContext)
    const { recoverToken } = useParams(); 
    const handleSubmitChangePass = async (event) => {
        event.preventDefault();
        const password = document.querySelector('#user_password').value
        const passwordConfirm = document.querySelector('#user_password_confirm').value
        if(password === passwordConfirm) {
            const pass = {password: password}
            const res = await changePass(recoverToken, pass)
        } else generateNotifyError('Las constraseñas deben coincidir!')
    };
    return (
        <div id='inputs' className='login padding-foot padding-head d-flex justify-content-center vh-100 flex-column'>
            <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-5 card">
                <div className="card-header">
                    <div className="text-header dosEm">Reastaurar Contraseña</div>
                </div>
                <div className="card-body">
                    <form id="formLogin" onSubmit={handleSubmitChangePass}>
                        <div className='row'>
                            <div className="form-group my-4">
                                <label htmlFor="password">Nueva contraseña :</label>
                                <input required className="form-control" name="password" id="user_password" type="password"/>
                            </div>
                            <div className="form-group my-4">
                                <label htmlFor="password">Confirmar contraseña :</label>
                                <input required className="form-control" name="password" id="user_password_confirm" type="password"/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center p-4">
                            <input className="btn2 dosEm" type="submit" value="Cambiar Contraseña" />
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    )
}

export default Recover