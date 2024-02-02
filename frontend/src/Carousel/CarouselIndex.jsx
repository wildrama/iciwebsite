import React from "react";

const CarouselIndex = () =>{
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide carousel-index" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-img-div">
                        <img src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1700075327/ici/1_wfcem2.png" className="d-block img-exams" alt="..."/>
                    </div>
                    <div className="carousel-caption-div">
                        <div className="carousel-caption bg-white rounded text-black">
                            <h5>Exámenes Anglia</h5>
                            <p>I.C.I Patricia Alemis es centro oficial Anglia Exams, una entidad examinadora internacional con base en Chichester College ubicado en West Sussex, England.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-img-div">
                        <img src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1700075326/ici/3_fvmnch.png" className="d-block img-travel" alt="..."/>
                    </div>
                    <div className="carousel-caption-div">
                        <div className="carousel-caption bg-white rounded text-black">
                            <h5>Viajes Educativos</h5>
                            <p>Viajes a Inglaterra, donde se conoce el Chichester College una institucion de alta calidad educativa.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-img-div">
                        <img src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1700075327/ici/2_vuqnyy.png" className="d-block img-young-girl" alt="..."/>
                    </div>
                    <div className="carousel-caption-div">
                        <div className="carousel-caption bg-white rounded text-black">
                            <h5>Cursos Personalizados</h5>
                            <p>Inicial, regulares, intensivos, avanzados, adultos, conversación y fines especificos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
};
export default CarouselIndex
