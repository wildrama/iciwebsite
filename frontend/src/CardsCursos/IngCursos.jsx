import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function IngCursos() {
    return (
        <div className='carousel-cursos'>
            <Carousel>
                <Carousel.Item interval={3000000} className='rounded'>
                    <img
                    className="d-block w-100 rounded"
                    src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688653794/ici/fristStep_ruhvrq.png"
                    alt="First slide"
                    />
                    <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                    <h3>Inicial</h3>
                    <Link></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000} className='rounded'>
                    <img
                    className="d-block w-100 rounded"
                    src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688653795/ici/junior_fajdgq.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                    <h3>Regulares</h3>
                    <Link></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='rounded'>
                    <img
                    className="d-block w-100 rounded"
                    src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688653794/ici/preLiminary_f0bxzc.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                    <h3>Intensivos</h3>
                    <Link></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='rounded'>
                    <img
                    className="d-block w-100 rounded"
                    src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1706632704/ici/avanzados_vrysgp.png"
                    alt="Fourth slide"
                    />
                    <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                    <h3>Avanzados</h3>
                    <Link></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='rounded'>
                    <img
                    className="d-block w-100 rounded"
                    src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1706632704/ici/adultos_escteb.png"
                    alt="Fifth slide"
                    />
                    <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                    <h3>Adultos</h3>
                    <Link></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='rounded'>
                    <img
                    className="d-block w-100 rounded"
                    src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1706632705/ici/conversacion_rhress.png"
                    alt="Fifth slide"
                    />
                    <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                    <h3>Conversación</h3>
                    <Link></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='rounded'>
                    <img
                    className="d-block w-100 rounded"
                    src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1706632705/ici/fines-especificos_qpe6vr.png"
                    alt="Fifth slide"
                    />
                    <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                    <h3>Fines Específicos</h3>
                    <Link></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default IngCursos
