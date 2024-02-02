import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import {Context} from "../Context/Context";
import {faBars} from '@fortawesome/free-solid-svg-icons'

const FooterLog = () => {
    const upMenu = () =>{
        window.scrollTo(0, 0);
    }
    const upMap = () =>{
        window.scrollTo(0, 500);
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

export default FooterLog