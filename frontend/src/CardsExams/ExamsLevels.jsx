import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap';

function ExamsLevels() {
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
    const [expanded3, setExpanded3] = useState(false);
    const handleExpand3 = () => {
        setExpanded3(!expanded3);
    };
    const [expanded4, setExpanded4] = useState(false);
    const handleExpand4 = () => {
        setExpanded4(!expanded4);
    };
    const [expanded5, setExpanded5] = useState(false);
    const handleExpand5 = () => {
        setExpanded5(!expanded5);
    };
    return (
        <div className='cardsExamsLevels d-flex align-items-center flex-column'>
            {/* CARD 0 */}
            <Card className="cardExamsLevels">
                <Button className="btnLvls text-white" variant="none" onClick={handleExpand0}>
                    <Card.Body>
                        <Card.Title><h3>Young Stars</h3></Card.Title>
                    </Card.Body>
                </Button>
                {expanded0 && (
                    <Card.Footer className="text-white div-font-weight-bold">
                        <h3>Little Star</h3>
                        <h3>Rising Star</h3>
                        <h3>Shining Star</h3>
                    </Card.Footer>
                )}
            </Card>

            {/* CARD 1 */}
            <Card className="cardExamsLevels">
                <Button className="btnLvls text-white" variant="none" onClick={handleExpand1}>
                    <Card.Body>
                        <Card.Title><h3>Inicial</h3></Card.Title>
                    </Card.Body>
                </Button>
                {expanded1 && (
                    <Card.Footer className="text-white div-font-weight-bold">
                        <h3>Children´s orals 1</h3>
                        <h3>Children´s orals 2</h3>
                        <h3>Children´s orals 3</h3>
                        <h3>First step</h3>
                    </Card.Footer>
                )}
            </Card>

            {/* CARD 2 */}
            <Card className="cardExamsLevels">
                <Button className="btnLvls text-white" variant="none" onClick={handleExpand2}>
                    <Card.Body>
                        <Card.Title><h3>Regular</h3></Card.Title>
                    </Card.Body>
                </Button>
                {expanded2 && (
                    <Card.Footer className="text-white div-font-weight-bold">
                        <h3>Junior</h3>
                        <h3>Primary</h3>
                        <h3>Preliminary A1 CEFR</h3>
                        <h3>Elementary A2 CEFR</h3>
                        <h3>Pre-Intermediate A2+ CEFR</h3>
                        <h3>Intermediate B1 CEFR</h3>
                        <h3>Advanced B2 CEFR</h3>
                        <h3>Proficiency C1 CEFR</h3>
                        <h3>Mastery C2 CEFR</h3>
                    </Card.Footer>
                )}
            </Card>

            {/* CARD 3 */}
            <Card className="cardExamsLevels">
                <Button className="btnLvls text-white" variant="none" onClick={handleExpand3}>
                    <Card.Body>
                        <Card.Title><h3>Business</h3></Card.Title>
                    </Card.Body>
                </Button>
                {expanded3 && (
                    <Card.Footer className="text-white div-font-weight-bold">
                        <h3>Practical Business English A2+</h3>
                        <h3>Intermediate Business English B1</h3>
                        <h3>Advanced Business English B2</h3>
                        <h3>Profiency in Business English C1</h3>
                    </Card.Footer>
                )}
            </Card>

            {/* CARD 4 */}
            <Card className="cardExamsLevels">
                <Button className="btnLvls text-white" variant="none" onClick={handleExpand4}>
                    <Card.Body>
                        <Card.Title><h3>Adult Learner</h3></Card.Title>
                    </Card.Body>
                </Button>
                {expanded4 && (
                    <Card.Footer className="text-white div-font-weight-bold">
                        <h3>Level 1</h3>
                        <h3>Level 2</h3>
                        <h3>Level 3</h3>
                        <h3>Level 4</h3>
                    </Card.Footer>
                )}
            </Card>

            {/* CARD 5 */}
            <Card className="cardExamsLevels">
                <Button className="btnLvls text-white" variant="none" onClick={handleExpand5}>
                    <Card.Body>
                        <Card.Title><h3>Teachers</h3></Card.Title>
                    </Card.Body>
                </Button>
                {expanded5 && (
                    <Card.Footer className="text-white div-font-weight-bold">
                        <h2>Cite: Certificate of Internacional Teacher of English</h2>
                        <h3>Very young learners</h3>
                        <h3>Young learners</h3>
                        <h3>Senior</h3>
                    </Card.Footer>
                )}
            </Card>
        </div>
    )
}

export default ExamsLevels