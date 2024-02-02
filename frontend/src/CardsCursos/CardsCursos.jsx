import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import IngCursos from './IngCursos';

const CardsCursos = () => {
    const [expanded0, setExpanded0] = useState(false);
    const handleExpand0 = () => {
        setExpanded0(!expanded0);
    }; 
    const [expanded1, setExpanded1] = useState(false);
    const handleExpand1 = () => {
        setExpanded1(!expanded1);
    };
    return (
        <div className='cardsExams container-fluid'>
            {/* CARD 0 */}
            <Card className= {expanded0 ? 'expanded-card cardExams m-4' : 'collapsed-card cardExams m-4'}>
                <Card.Body>
                    <Card.Title><h3>Tipos de Cursos</h3></Card.Title>
                </Card.Body>
                <Card.Footer className="cardFooterLvls cursos">
                    <IngCursos/>
                </Card.Footer>
            </Card>

            {/* CARD 1 */}
            {/* <Card className= {expanded1 ? 'expanded-card cardExams m-4' : 'collapsed-card cardExams m-4'}>
                <Card.Body>
                    <Card.Title><h3>FOTOS</h3></Card.Title>
                </Card.Body>
                {expanded1 && (
                    <Card.Footer className="cardFooterLvls">
                    </Card.Footer>
                )}
                <Button className="btn2" variant="primary" onClick={handleExpand1}>
                    {expanded1 ? 'Ocultar Fotos' : 'Ver Fotos...'}
                </Button>
            </Card> */}
        </div>
    )
}

export default CardsCursos