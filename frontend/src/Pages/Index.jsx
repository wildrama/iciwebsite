import React from 'react'
import CarouselIndex from '../Carousel/CarouselIndex'

const Index = () => {
    return (
        <>
        <div id='index' className='padding-foot'>
            <CarouselIndex/>
            <div className='card card-index w-75'>
                <div className='card-body'>
                    <div className='a-anglia' target='_blank'>
                        <div className='fade-header' >
                            <div className="text-end my-4">
                                <div className='div-anglia d-flex flex-row-reverse'>
                                    <div className='div-img-anglia'>
                                        <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1679514874/ici/Anglia_Logo_2015_No_background_1_2_tlnnnf.png" alt="" />
                                    </div>
                                    <div className='card p-1 col-11'>
                                        <h1 className='h1'>
                                        I.C.I. PATRICIA ALEMIS
                                        </h1>
                                        <h2>
                                        Centro Oficial Anglia Exams
                                        </h2>
                                        <h3>
                                        Exámenes Internacionales
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='th-header mt-4'>
                        <div className='th-nouns bg-white'>
                            <h2 className='dosYmedioEm font-weight-bold'>Ofrecemos un programa completo y progresivo para evaluar el idioma inglés</h2>
                            <h3 className='dosEm'>Nuestros cursos van desde lo más básico hasta la capacitación para teachers. Los exámenes Anglia están alineados al Marco Común Europeo de Referencia (MCER), que es un estándar internacional para definir la capacidad lingüística.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Index
