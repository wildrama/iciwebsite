import React, { useContext} from 'react'
import {Context} from "../Context/Context"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark, faChildren, faUsers, faGears, faComments} from '@fortawesome/free-solid-svg-icons'
const UserSideBar = () => {
    let {open, sideBarOpen} = useContext(Context)
        return (
            <>
                <div id='sideBar' className='d-flex d-lg-none'>
                {open?
                        <div className="sideBarDiv d-flex flex-column flex-shrink-0 p-3">
                            <div className='sideBar-header d-flex justify-content-between'>
                                <a href="/ici" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                                <span className="menuSpan">Menu</span>
                                </a>
                                <button className='exitButton' onClick={() => sideBarOpen() }><FontAwesomeIcon icon={faRectangleXmark} /></button>
                            </div>
                            <hr/>
                            <ul className="nav nav-pills flex-column ">
                                <li onClick={() => sideBarOpen() } className='div-nav-link mt-5 mb-5 my-2'><Link to={'/usuario/inscriptos'} className="nav-link p-4">INSCRIPTOS<FontAwesomeIcon icon={faChildren} className='mx-2' /></Link></li>
                                <li onClick={() => sideBarOpen() } className='div-nav-link mb-5 my-2'><Link to={'/usuario/usuarios'} className="nav-link p-4">USUARIOS<FontAwesomeIcon icon={faUsers} className='mx-2'/></Link></li>
                                <li onClick={() => sideBarOpen() } className='div-nav-link mb-5 my-2'><Link to={'/usuario/configuracion'} className="nav-link p-4">CONFIGURACION<FontAwesomeIcon icon={faGears} className='mx-2'/></Link></li>
                                <li onClick={() => sideBarOpen() } className='div-nav-link mb-5 my-2'><a className="nav-link p-4">SOPORTE<FontAwesomeIcon icon={faComments} className='mx-2'/></a></li>
                            </ul>
                            <hr/>
                        </div> 
                    : null}
                </div>
            </>
        )
    }

export default UserSideBar