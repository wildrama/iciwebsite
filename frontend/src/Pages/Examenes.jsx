import React from 'react'
import CardsExams from '../CardsExams/CardsExams.jsx'

const Examenes = () => {
    return (
        <div className='exams padding-foot'>
            <div className='headExams d-flex justify-content-center align-items-center'>
                <h1 className='text-white text-center'>EXÁMENES</h1>
                <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688576609/ici/headerExams_cru47l.jpg" alt="" />
            </div>
            <CardsExams/>
        </div>
    )
}

export default Examenes
