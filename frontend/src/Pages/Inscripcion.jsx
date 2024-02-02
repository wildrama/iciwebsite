import React, { useContext, useState } from 'react'
import { StudentContext } from '../Context/StudentContext'
import { ConfigsContext } from '../Context/ConfigsContext'
import { generateNotifyError, generateNotifySuccess } from "../Context/Context"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom'

const Inscripcion = () => { 
    const { registerStudent } = useContext(StudentContext)
    const {getConfig} = useContext(ConfigsContext)
    const [transferencia, setTransferencia] = useState(null);
    const [registrationCost, setRegistrationCost] = useState(null);
    const [turno, setTurno] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        window.location.reload()
    };
    const handleShow = () => setShow(true);

    const handleChangeTransferencia = (e) =>{
        if (e.target.value === 'transferencia') {
            const fetchCost = async () => {
                const res = await getConfig('registrationCost');
                setRegistrationCost(res.data.value)
            };
            fetchCost()
            setTransferencia(true);
        } else {
            setTransferencia(false);
        }
    };

    const handleChangeTurno = (e) =>{
        if (e.target.value === 'mañana') {
            setTurno("mañana");
        } else {
            setTurno("tarde");
        }
    };

    const handleSubmitNewStudent = async (event) =>{
        event.preventDefault()
        if(transferencia == null) return generateNotifyError('Completar el metodo de pago!')
        let paymentMethod = undefined
        if(transferencia === true) paymentMethod = "transferencia"
        else paymentMethod = "efectivo"

        const studentData ={
            firstName: document.querySelector('#user_name').value,
            lastName: document.querySelector('#user_surname').value,
            email: document.querySelector('#user_email').value,
            birth: document.querySelector('#user_date').value,
            dni: parseFloat(document.querySelector('#user_dni').value),
            houseAddress: document.querySelector('#user_address').value,
            cellphone: document.querySelector('#user_phone').value,
            previousLevel: document.querySelector('#user_level').value,
            medicalObservations: document.querySelector('#user_medical').value,
            preferredTime: turno,
            paymentMethod: paymentMethod
        }

        if(transferencia == true){
            const formData = new FormData();
            formData.append('studentData', JSON.stringify(studentData))
            const inputImg = document.querySelector('#receipt')
            if(!inputImg.files[0]) return generateNotifyError('Selecciona tu comprobante!')
            else formData.append('file', inputImg.files[0]);
            const res = await registerStudent(formData, 'transfer')
            if(res.data == 'SuccessfullyRegisteredStudent'){
                handleShow()
            };
        } else {
            const jsonStudentData = JSON.stringify(studentData)
            const res = await registerStudent(jsonStudentData, 'cash')
            if(res.data == 'SuccessfullyRegisteredStudent'){
                handleShow()
            };
        }
    }

    return (
        <>
        <div id='inputs' className='padding-foot padding-head'>
            <div className='col-11 col-sm-10 col-md-9 col-lg-8 col-xl-5 card'>
                <div className="card-header">
                    <div className="text-header">Inscripción</div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmitNewStudent}>
                    <div className="form-group">
                        <label htmlFor="user_name">Nombre:</label>
                        <input required className="form-control" name="user_name" id="user_name" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_surname">Apellido:</label>
                        <input required className="form-control" name="user_surname" id="user_surname" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_email">Email:</label>
                        <input required className="form-control" name="user_email" id="user_email" type="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_date">Fecha de Nacimiento:</label>
                        <input required className="form-control" name="user_date" id="user_date" type="date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_dni">DNI:</label>
                        <input required className="form-control" name="user_dni" id="user_dni" type="number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_address">Dirección:</label>
                        <input required className="form-control" name="user_address" id="user_address" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_phone">Teléfono:</label>
                        <input required className="form-control" name="user_phone" id="user_phone" type="tel"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_level">Nivel Anterior(solo si curso antes):</label>
                        <input className="form-control" name="user_level" id="user_level" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_medical">Observaciones Médicas:</label>
                        <input className="form-control" name="user_medical" id="user_medical" type="text"/>
                    </div>
                    <div className="form-group">
                        <label className='my-4' htmlFor="user_time">Preferencia de Cursado:</label>
                        <div className="wrapper">
                            <input type="radio" name="select1" id="option-1" value="mañana" onChange={handleChangeTurno}/>
                            <input type="radio" name="select1" id="option-2" value="tarde" onChange={handleChangeTurno}/>
                            <label htmlFor="option-1" className="option option-1">
                                <div className="dot"></div>
                                <span>Mañana</span>
                                </label>
                            <label htmlFor="option-2" className="option option-2">
                                <div className="dot"></div>
                                <span>Tarde</span>
                            </label>
                        </div>
                        <label className='my-4' htmlFor="user_time">Método de Pago:</label>
                        <div className="wrapper">
                            <input type="radio" name="select2" id="option-3" value="efectivo" onChange={handleChangeTransferencia}/>
                            <input type="radio" name="select2" id="option-4" value="transferencia" onChange={handleChangeTransferencia}/>
                            <label htmlFor="option-3" className="option option-3">
                                <div className="dot"></div>
                                <span>Efectivo</span>
                                </label>
                            <label htmlFor="option-4" className="option option-4">
                                <div className="dot"></div>
                                <span>Transferencia</span>
                            </label>
                        </div>
                        {
                            transferencia && (
                                <div className="transferencia mt-4">
                                    <h1>CBU: 0170078740000071543693</h1>
                                    <h1>Alias: ICI.ALEMIS.SP</h1>
                                    <h3>Sucursal: 078 Nro cta: 715436/9</h3>
                                    <h3>Patricia Alemis Bco Francés</h3>
                                    <h1 className='my-2'>Precio: {registrationCost}$</h1>
                                    <h3 className='my-2'>Adjuntar Comprobante</h3>
                                    <input className="form-control" id='receipt' type="file"/>
                                </div>
                            ) 
                        }
                    </div>
                        <input type="submit" className="btn2" value="Inscribirse"/>
                    </form>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                <Modal.Header className='mod-header' closeButton>
                    <Modal.Title className='bg-white rounded'>
                        Registro existoso!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='dosEm'>Tu inscripción fue enviada una vez validado el pago se te enviará un mail para confirmarla.</p>
                </Modal.Body>
                <Modal.Footer className='mod-footer'>
                    <Button variant="secondary" className='btn4 p-2' onClick={handleClose}>
                    Cerrar
                    </Button>
                    <Link to={'/ici'} className='btn3 p-2 text-decoration-none'>
                    Volver al inicio
                    </Link>
                </Modal.Footer>
            </Modal>            
        </div>
        </>
    )
}

export default Inscripcion
