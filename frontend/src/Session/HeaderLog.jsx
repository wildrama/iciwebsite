import React, { useContext, useEffect, useState } from 'react';
import {Context} from "../Context/Context";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faPenToSquare, faHouse, faAddressCard, faPlane, faFileSignature, faGraduationCap, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';

const HeaderLog = () => {
    return (
        <>
            <div id='header'>
                <header className="d-flex p-4 justify-content-around py-2 py-sm-1">
                    <div className="header-img-div">
                        <div className="d-inline-flex link-body-emphasis text-decoration-none">
                            <div className='imgdiv d-flex justify-content-center' role="img">
                                <img className='rounded' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1697556868/ici/logo_ICI_2322_sfamnp.png" alt="" />
                            </div>
                        </div>
                    </div>
                </header>
                <div className='borderHeader m-0'>
                </div>
            </div>
        </>
    )
}

export default HeaderLog