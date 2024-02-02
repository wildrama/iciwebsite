import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Login = () => {
    const { loginUser,  sendRecoverPassEmail } = useContext(UserContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmitLogin = async (event) => {
        event.preventDefault();
        const email = document.querySelector('#user_email').value
        const password = document.querySelector('#user_password').value
        const userData = {
            email: email,
            password: password
        }
        await loginUser(userData)
    };
    const handleSubmitRecoverPass = async (event) => {
        event.preventDefault();
        const email = document.querySelector('#recoverEmail').value
        const body = {email: email}
        const res = await sendRecoverPassEmail(body)
        if(res.data == 'sentSuccessfully') handleClose()
    };
    return (
    <>
    <div id='inputs' className='login padding-foot padding-head d-flex justify-content-center  vh-100 flex-column'>
        <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-5 card" >
            <div className="card-header">
                <div className="text-header dosEm">Inicio de sesion</div>
            </div>
            <div className="card-body">
                <form id="formLogin" onSubmit={handleSubmitLogin}>
                    <div className="row">
                        <div className="form-group my-3">
                            <label htmlFor="email">Email :</label>
                            <input required className="form-control" name="email" id="user_email" type="email"/>
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="password">Contraseña :</label>
                            <input required className="form-control" name="password" id="user_password" type="password"/>
                        </div>
                    </div>
                    <input className="btn2" type="submit" value="Login" />
                </form>
                <Button className='btn3 mt-2' variant="primary" onClick={handleShow}>
                    Olvide mi contraseña
                </Button>
                <Modal className='modalLog' show={show} onHide={handleClose}>
                    <Modal.Header className='mod-header' closeButton>
                        <Modal.Title className='bg-white rounded'>Recuperar contraseña</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='form-group logInput'>
                        <label className="form-label" htmlFor="recoverEmail">Email</label>
                        <input required placeholder='Email' type="email" name="recoverEmail" id="recoverEmail" className="form-control form-control-lg" />
                    </Modal.Body>
                    <Modal.Footer className='mod-footer'>
                    <Button className='btn4 unEm' onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button className='btn4 unEm' onClick={handleSubmitRecoverPass}>
                        Enviar mail
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    </div>  
    </>
    )
}

export default Login