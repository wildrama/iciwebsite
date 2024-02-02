import React, { useContext, useEffect, useState } from 'react';
import {Context} from "../Context/Context";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faChildren, faUsers, faGears, faComments} from '@fortawesome/free-solid-svg-icons'

const HeaderUser = () => {
    let {sideBarOpen} = useContext(Context)
    return (
        <>
        <div id='header'>
                <header className="d-flex p-4 justify-content-around py-2 py-sm-1">
                    <div className="header-img-div">
                        <div className="d-inline-flex link-body-emphasis text-decoration-none">
                            <div className='imgdiv' role="img">
                                <img className='rounded' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1697556868/ici/logo_ICI_2322_sfamnp.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <ul id='buttonsHeader' className="nav d-none d-lg-flex col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <div className='d-flex align-items-center'>
                            <li className='div-nav-link  d-md-block d-none m-1'><Link to={'/usuario/inscriptos'} className="nav-link px-1 py-3 d-flex">INSCRIPTOS<FontAwesomeIcon icon={faChildren} className='ms-1' /></Link></li>
                            <li className='div-nav-link d-md-block d-none m-1'><Link to={'/usuario/usuarios'} className="nav-link d-flex px-1 py-3">USUARIOS<FontAwesomeIcon icon={faUsers} className='ms-1'/></Link></li>
                            <li className='div-nav-link d-md-block d-none m-1'><Link to={'/usuario/configuracion'} className="nav-link d-flex px-1 py-3">CONFIGURACION<FontAwesomeIcon icon={faGears} className='ms-1'/></Link></li>
                            <li className='div-nav-link d-md-block d-none m-1'><a className="nav-link d-flex px-1 py-3">SOPORTE<FontAwesomeIcon icon={faComments} className='ms-1'/></a></li>
                        </div>
                    </ul>
                </header>
            <div className='borderHeader border-header-user'>
                <div className='div-nav-link d-flex d-lg-none menuMovileDiv'>
                    <button onClick={() => sideBarOpen() } type='button' className='nav-link d-flex flex-row menuMovile p-4' >MENU
                    <FontAwesomeIcon icon={faBars} className='ms-2' />
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeaderUser