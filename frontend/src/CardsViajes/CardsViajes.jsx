import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import ViajesFotos from './ViajesFotos';

const CardsViajes = () => {
    const [expanded0, setExpanded0] = useState(false);
    const handleExpand0 = () => {
        setExpanded0(!expanded0);
    };
    return (
        <div className='cardsExams container-fluid'>
            {/* CARD 0 */}
            <Card className= 'collapsed-card cardExams m-4'>
                <Card.Body>
                    <Card.Title><h3>Viajes Educativos</h3></Card.Title>
                    <h5>Contamos con  viajes educativos y turismo idiomático dirigido tanto a alumnos como profesores con cursada y estadía en Chichester College con salidas grupales en Enero y Julio así como individuales durante todo el año.
Los mismos incluyen conducción y monitoreo permanente a cargo de uno o más líderes de grupo durante todo el viaje.</h5>
                </Card.Body>
            </Card>

            {/* CARD 1 */}
            <Card className= {expanded0 ? 'expanded-card cardExams m-4' : 'collapsed-card cardExams m-4'}>
                <Card.Body>
                    <Card.Title><h3>Fotos</h3></Card.Title>
                </Card.Body>
                {expanded0 && (
                    <Card.Footer className="cardFooterLvls">
                        <ViajesFotos/>
                    </Card.Footer>
                )}
                <Button className="btn2" variant="primary" onClick={handleExpand0}>
                    {expanded0 ? 'Ocultar imágenes' : 'Ver imágenes...'}
                </Button>
            </Card>
        </div>
    )
}

export default CardsViajes
