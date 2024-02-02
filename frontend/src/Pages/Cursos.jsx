import React from 'react'
import CardsCursos from '../CardsCursos/CardsCursos.jsx'

const Cursos = () => {
    return (
        <div className='exams padding-foot'>
            <div className='headExams d-flex justify-content-center align-items-center'>
                <h1 className='text-white text-center'>CURSOS</h1>
                <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1706273455/ici/headerCursos_qxnxwe.png" alt="" />
            </div>
            <CardsCursos/>
        </div>
    )
}

export default Cursos