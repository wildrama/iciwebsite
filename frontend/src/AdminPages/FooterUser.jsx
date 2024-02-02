import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import {Context} from "../Context/Context";
import {faBars} from '@fortawesome/free-solid-svg-icons'

const FooterUser = () => {
    const upMenu = () =>{
        window.scrollTo(0, 0);
    }
    let {sideBarOpen} = useContext(Context)
    const currentYear = new Date().getFullYear();
    return (
        <>
        <div className='d-flex flex-column align-items-center footer'>
            <div className='img-footer-div'>
                <img src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1679510940/ici/logoicipng_zbsdom.png" className='img-fluid img-footer-1' alt="" />
            </div>
            <div className="footer-info d-flex flex-column text-center align-items-center">
                <div className='img-footer-2'>
                    <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1680612964/ici/insti_v0n4zi.png" alt="" />
                </div>
            </div>
            <div className="container-fluid d-none flex-column d-md-flex pb-2">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item fw-bold" onClick={upMenu}><Link to={'/usuario/inscriptos'} className="nav-link px-1 py-3 d-flex inicio">INSCRIPTOS</Link></li>
                    <li className="nav-item fw-bold" onClick={upMenu}><Link to={'/usuario/usuarios'} className="nav-link d-flex px-1 py-3 inscripcion">USUARIOS</Link></li>
                    <li className="nav-item fw-bold" onClick={upMenu}><Link to={'/usuario/configuracion'} className="nav-link d-flex px-1 py-3 inscripcion">CONFIGURACION</Link></li>
                    <li className="nav-item fw-bold" onClick={upMenu}><a className="nav-link d-flex px-1 py-3 contacto">SOPORTE</a></li>
                </ul>
                <p className="text-center text-body-secondary fw-bold">© {currentYear} Todos los derechos reservados</p>
            </div>
            <div onClick={() => sideBarOpen() } >
                <div className='div-nav-link my-4 d-flex d-md-none menuMovileDiv'>
                    <button className='nav-link d-flex flex-row menuMovile p-4' >
                    <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default FooterUser