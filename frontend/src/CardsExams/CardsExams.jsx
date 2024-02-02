import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap';
import ExamsFotos from './ExamsFotos.jsx'
import ExamsLevels from "./ExamsLevels.jsx";

const CardsExams = () => {
    const [expanded0, setExpanded0] = useState(false);
    const handleExpand0 = () => {
        setExpanded0(!expanded0);
    };
    const [expanded1, setExpanded1] = useState(false);
    const handleExpand1 = () => {
        setExpanded1(!expanded1);
    };
    const [expanded2, setExpanded2] = useState(false);
    const handleExpand2 = () => {
        setExpanded2(!expanded2);
    };
    return (
        <div className='cardsExams container-fluid'>
            {/* CARD 0 */}
            <Card className= {expanded0 ? 'expanded-card cardExams m-4' : 'collapsed-card cardExams m-4'}>
                <Card.Body>
                    <Card.Title><h3>Anglia Exams</h3></Card.Title>
                    <h5>Exámenes Internacionales</h5>
                </Card.Body>
                <a href="https://www.anglia.org/">
                    <div className='div-img-anglia-exams'>
                        <img className='w-50' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1679514874/ici/Anglia_Logo_2015_No_background_1_2_tlnnnf.png" alt="" />
                    </div>
                </a>
            </Card>

            {/* CARD 1 */}
            <Card className= {expanded1 ? 'expanded-card cardExams m-4' : 'collapsed-card cardExams m-4'}>
                <Card.Body>
                    <Card.Title><h3>Niveles</h3></Card.Title>
                </Card.Body>
                {expanded1 && (
                    <Card.Footer className="cardFooterLvls">
                        <ExamsLevels/>
                    </Card.Footer>
                )}
                <Button className="btn2" variant="primary" onClick={handleExpand1}>
                    {expanded1 ? 'Leer menos' : 'Leer mas...'}
                </Button>
            </Card>

            {/* CARD 1 */}
            <Card className= {expanded2 ? 'expanded-card cardExams m-4' : 'collapsed-card cardExams m-4'}>
                <Card.Body>
                    <Card.Title><h3>FOTOS</h3></Card.Title>
                </Card.Body>
                {expanded2 && (
                    <Card.Footer className="cardFooterLvls">
                        <ExamsFotos/>
                    </Card.Footer>
                )}
                <Button className="btn2" variant="primary" onClick={handleExpand2}>
                    {expanded2 ? 'Ocultar Imágenes' : 'Ver Imágenes...'}
                </Button>
            </Card>
        </div>
    )
}

export default CardsExams 
