import React from 'react'
import CardsViajes from '../CardsViajes/CardsViajes.jsx'

const Viajes = () => {
    return (
        <div className='exams padding-foot'>
            <div className='headExams d-flex justify-content-center align-items-center'>
                <h1 className='text-white text-center'>VIAJES<br />INTERNACIONALES</h1>
                <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688995983/ici/headerTravels_szknho.png" alt="" />
            </div>
            <CardsViajes/>
        </div>
    )
}

export default Viajes
