import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { AdminContext } from '../Context/AdminContext';
import Spinner from 'react-bootstrap/Spinner';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { fetchUrl } from '../config';
import Dropdown from 'react-bootstrap/Dropdown';
import { faMagnifyingGlass, faPencil, faCheck, faXmark, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Inscriptos = () => {
    const { getStudents } = useContext(UserContext)
    const { editStudent, deleteStudent } = useContext(AdminContext)
    let { page, key, value, sortField, sortOrder } = useParams()
    const [studentsData, setStudentsData] = useState([]);
    const [pagData, setPagData] = useState([]);
    const [searchKey, setSearchKey] = useState('DNI')
    const [searchValue, setSearchValue] = useState(undefined)

    const [selectedStudent, setSelectedStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = (student) => () => {
        setSelectedStudent(student);
        setShow(true);
    };

    const handleSetSearchKey = (key) => () => {
        setSearchValue('');
        setSearchKey(key);
    };

    const handleSetValue = (value) => () =>{
        setSearchValue(value)
    };

    const fetchData = async () => {
        const res = await getStudents(page, key, value, sortField, sortOrder);
        setStudentsData(res.data.results);
        setPagData(res.data.info);
        setLoading(false);
    };

    const [showDelete, setShowDelete] = useState(false);
    const handleShowDeleteStudent = () =>{
        setShowDelete(true);
    }
    const handleCloseDelete = () => setShowDelete(false);
    const handleDeleteStudent = async () =>{
        const res = await deleteStudent(selectedStudent._id)
        if(res === 'success') fetchData()
        handleCloseDelete()
        handleClose()
    }

    useEffect(() => {
        fetchData();
    }, [getStudents, page, key, value, sortField, sortOrder]);

    const handleEditStudent = async (studentId, student, keyToEdit, newValue) =>{
        if (newValue === undefined){
            newValue = document.querySelector('#input_edit_text').value
        }
        const studentUpdated = {
            ...student,
            [keyToEdit]: newValue
        };
        const res = await editStudent(studentId, studentUpdated)
        if(res.status === 200){
            fetchData()
            setSelectedStudent(studentUpdated)
        }
    };

    const handleSearch = () =>{
        if(searchKey === 'METODO DE PAGO') {
            key = 'paymentMethod' 
            value = searchValue
            return fetchData()
        };
        if(searchKey === 'PAGO') {
            key = 'itsPaid'
            value = searchValue 
            return fetchData()
        };
        value = document.querySelector('#input_search_text').value
        if(searchKey === 'NOMBRE') key = 'firstName'
        if(searchKey === 'APELLIDO') key = 'lastName'
        if(searchKey === 'DNI') key = 'dni'
        return fetchData()
    };

    const renderInputSearch = () =>{
        switch(searchKey){
            case 'PAGO' :
            return (
                <div className="wrapper">
                    <input checked={searchValue === 'false'} type="radio" name="select1" id="option-1" value={false} onChange={handleSetValue('false')} />
                    <input checked={searchValue === 'true'} type="radio" name="select1" id="option-2" value={true} onChange={handleSetValue('true')} />
                    <label htmlFor="option-1" className="option option-1">
                        <div className="dot"></div>
                        <span className='m-1'>Pendiente</span>
                        </label>
                    <label htmlFor="option-2" className="option option-2">
                        <div className="dot"></div>
                        <span className='m-1'>Efectuado</span>
                    </label>
                </div>
            )
            case 'METODO DE PAGO': 
            return (
                <div className="wrapper">
                    <input checked={searchValue === 'efectivo'} type="radio" name="select2" id="option-3" value="efectivo" onChange={handleSetValue('efectivo')}/>
                    <input checked={searchValue === 'transferencia'} type="radio" name="select2" id="option-4" value="transferencia" onChange={handleSetValue('transferencia')}/>
                    <label htmlFor="option-3" className="option option-3">
                        <div className="dot"></div>
                        <span className='m-1'>Efectivo</span>
                        </label>
                    <label htmlFor="option-4" className="option option-4">
                        <div className="dot"></div>
                        <span className='m-1'>Transferencia</span>
                    </label>
                </div>
            )
            case 'DNI':
            return (
                <div className="form-group w-100">
                    <input required id='input_search_text' defaultValue='' className="form-control" type="number" onChange={handleSearch}/>
                </div>
            )
            default:
            return (
                <div className="form-group w-100">
                    <input required id='input_search_text' defaultValue='' className="form-control" type="text" onChange={handleSearch}/>
                </div>
            )
        }
    }

    const [showEdit, setShowEdit] = useState(false);
    const [editKeyModal, setEditKeyModal ] = useState({})
    const handleCloseEdit = () => setShowEdit(false);

    const handleShowEdit = (keyToFetch, setEditKey) => () => {
        setEditKeyModal({key: setEditKey, keyToFetch: keyToFetch})
        setShowEdit(true);
    }

    const renderInputEdit = () =>{
        switch(editKeyModal.key){
            case 'DNI':
            return(
                <div className="form-group">
                    <input required id='input_edit_text' defaultValue='' className="form-control unEm" type="number"/>
                </div>
            ) 
            case 'EMAIL': 
            return (
                <div className="form-group">
                    <input required id='input_edit_text' defaultValue='' className="form-control unEm" type="email"/>
                </div>
            )
            case 'NACIMIENTO':
            return (
                <div className="form-group">
                    <input required className="form-control unEm" id='input_edit_text' type="date"/>
                </div>
            ) 
            default:
            return(
                <div className="form-group">
                    <input required id='input_edit_text' defaultValue='' className="form-control unEm" type="text"/>
                </div>
            )
        }
    }

    if (loading === true){
        return (
        <div className='container-fluid' id='spinner'>
            <h1>Cargando...</h1>
        <Spinner className='spinner' animation="border"/>
        </div>
        )
    } else {
        return (
            <>
            <div className='inscriptos padding-foot padding-head'>
                <div className='text-center div-search'>
                    <p className='dosEm textColor'>Buscar por...</p>
                    <Dropdown drop='down-centered' className='d-flex align-items-center'>
                        <Dropdown.Toggle className='div-nav-link w-100 p-0 m-1'>
                            <div className='nav-link d-flex px-1 py-3 justify-content-center w-100'>
                                <h2 className='unEm'>{searchKey}</h2>
                            </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='menuContainer index999'>
                            <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleSetSearchKey('NOMBRE')}>NOMBRE</Dropdown.Item>
                            <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleSetSearchKey('APELLIDO')}>APELLIDO</Dropdown.Item>
                            <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleSetSearchKey('DNI')}>DNI</Dropdown.Item>
                            <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleSetSearchKey('PAGO')}>PAGO</Dropdown.Item>
                            <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleSetSearchKey('METODO DE PAGO')}>METODO DE PAGO</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="d-flex justify-content-center justify-center pt-3 align-items-center">
                        {renderInputSearch()}
                    </div>
                    <button onClick={handleSearch} className="btn2 py-3 mb-5">Buscar<FontAwesomeIcon icon={faMagnifyingGlass} className='ms-1'/></button>
                </div>
                <div className="form-group p-2 table-responsive card">
                    <div className="card-header">
                        <div className="text-header unEm">Inscriptos</div>
                    </div>
                    <table  className="mt-2 mb-5 table">
                        <thead>
                            <tr className='th-header'>
                                <th className='th-nouns d-none d-lg-table-cell' scope="col">Nombre</th>
                                <th className='th-nouns d-none d-lg-table-cell' scope="col">Apellido</th>
                                <th className='th-nouns d-table-cell d-lg-none' scope="col">Nombre y<br />Apellido</th>
                                <th className='th-nouns' scope="col">DNI</th>
                                <th className='th-nouns d-none d-sm-table-cell' scope="col">Pago</th>
                                <th className='th-nouns d-none d-lg-table-cell' scope="col">Nacimiento</th>
                                <th className='th-nouns d-none d-sm-table-cell' scope="col">Inscribió</th>
                                <th className='th-nouns' scope="col">Ficha Completa</th>
                            </tr>
                        </thead>
                        {studentsData.map(student =>                  
                            <tbody key={student._id}>
                                <tr>
                                    <td className='td-border d-none d-lg-table-cell'>{student.firstName}</td>
                                    <td className='td-border d-none d-lg-table-cell'>{student.lastName}</td>
                                    <td className='td-border d-table-cell d-lg-none'>{student.firstName}<br />{student.lastName}</td>
                                    <td className='td-border'>{student.dni}</td>
                                    <td className='td-border d-none d-sm-table-cell'>{student.itsPaid === false ? ('Pendiente') : ('Efectuado') }</td>
                                    <td className='td-border d-none d-lg-table-cell'>{new Date(student.birth).toISOString().slice(0, 10)}</td>
                                    <td className='td-border d-none d-sm-table-cell'>{new Date(student.registrationDate).toISOString().slice(0, 10)}</td>
                                    <td className='td-border'>
                                        <Button className='button-ficha' onClick={handleShow(student)}>
                                            Ver Ficha
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
                {selectedStudent && (
                <>
                    <Modal className='modalLog text-center' show={show} onHide={handleClose}>
                        <Modal.Header className='mod-header' closeButton>
                            <Dropdown drop='down-centered' className='d-flex align-items-center'>
                                <Dropdown.Toggle className='button-edit-ficha mx-1'>
                                    <FontAwesomeIcon icon={faPencil}/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='menuContainer index999'>
                                    <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleShowEdit('firstName', 'NOMBRE')}>NOMBRE</Dropdown.Item>
                                    <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleShowEdit('lastName', 'APELLIDO')}>APELLIDO</Dropdown.Item>
                                    <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleShowEdit('dni', 'DNI')}>DNI</Dropdown.Item>
                                    <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleShowEdit('email', 'EMAIL')}>EMAIL</Dropdown.Item>
                                    <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleShowEdit('birth', 'NACIMIENTO')}>NACIMIENTO</Dropdown.Item>
                                    <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleShowEdit('cellphone', 'CELULAR')}>CELULAR</Dropdown.Item>
                                    <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleShowEdit('houseAddress', 'DIRECCION')}>DIRECCION</Dropdown.Item>
                                    <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleShowEdit('medicalObservations', 'OBSERVACIONES MEDICAS')}>OBSERVACIONES MEDICAS</Dropdown.Item>
                                    <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleShowEdit('preferredTime', 'PREFERENCIA DE CURSADO')}>PREFERENCIA DE CURSADO</Dropdown.Item>
                                    <Dropdown.Item className='dropDownItems p-3 nav-link' onClick={handleShowEdit('previousLevel', 'NIVEL ANTERIOR')}>NIVEL ANTERIOR</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Modal.Title className='bg-white unEm rounded'>Inscripto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='form-group dosEm ficha-completa'>
                            <p>Nombre: {selectedStudent.firstName}</p>
                            <p>Apellido: {selectedStudent.lastName}</p>
                            <p>DNI: {selectedStudent.dni}</p>
                            <p>Email: {selectedStudent.email}</p>
                            <p>Nacimiento: {new Date(selectedStudent.birth).toISOString().slice(0, 10)}</p>
                            <p>Celular: {selectedStudent.cellphone}</p>
                            <p>Direccion: {selectedStudent.houseAddress}</p>
                            <p>Observaciones Medicas: {selectedStudent.medicalObservations}</p>
                            <p>Preferencia de Cursado: {selectedStudent.preferredTime}</p>
                            <p>Nivel Anterior: {selectedStudent.previousLevel}</p>
                            <p>Inscribió: {new Date(selectedStudent.registrationDate).toISOString().slice(0, 10)}</p>
                            <p>Metodo de Pago: {selectedStudent.paymentMethod}</p>
                            <div>{selectedStudent.itsPaid === false ? (
                                <>
                                    <h3>Pago: Pendiente</h3>
                                    <Button onClick={() => handleEditStudent(selectedStudent._id, selectedStudent, 'itsPaid', true)} className='button-edit-ficha'>Validar Pago<FontAwesomeIcon icon={faCheck} className='ms-1'/></Button>
                                </>
                                ) : (
                                <>
                                    <h3>Pago: Efectuado</h3>
                                    <Button onClick={() => handleEditStudent(selectedStudent._id, selectedStudent, 'itsPaid', false)} className='button-edit-ficha'>Invalidar Pago<FontAwesomeIcon icon={faXmark} className='ms-1'/></Button>
                                </>
                                ) }
                            </div>
                            {selectedStudent.paymentReceipt === null ? null : (
                                <>
                                    <div>
                                        <h3>Recibo:</h3>
                                        <img className='img-fluid img-recibo' crossOrigin="anonymous" src={ fetchUrl +'/api/student/payment/' + selectedStudent.paymentReceipt} alt="paymentReceipt" />
                                    </div>
                                </>
                                ) 
                            }
                        </Modal.Body>
                        <Modal.Footer className='mod-footer'>
                        <Button onClick={handleShowDeleteStudent} className='bg-danger border border-danger m-2 dosEm'><FontAwesomeIcon icon={faTrashCan}/></Button>
                            <Button className='btn4 unYmedioEm' onClick={handleClose}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* Modal Edit */}
                    <Modal className='modalLog text-center' show={showEdit} onHide={handleCloseEdit}>
                        <Modal.Header className='mod-header' closeButton>
                            <Modal.Title className='bg-white unEm rounded'>Editar {editKeyModal.key}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='form-group dosEm ficha-completa'>
                            {renderInputEdit()}
                        </Modal.Body>
                        <Modal.Footer className='mod-footer'>
                            <Button className='btn3 unYmedioEm' onClick={() => {
                                handleEditStudent(selectedStudent._id, selectedStudent, editKeyModal.keyToFetch)
                                handleCloseEdit()
                            }}>
                                    Modificar
                            </Button>
                            <Button className='btn3 unYmedioEm' onClick={handleCloseEdit}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* Modal Delete */}
                    <Modal className='modalLog text-center' show={showDelete} onHide={handleCloseDelete}>
                        <Modal.Header className='mod-header' closeButton>
                            <Modal.Title className='bg-white unEm rounded'>Eliminar</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='dosEm'>
                            <p className='font-weight-bold'>Estas seguro que quieres eliminar a {selectedStudent.firstName} {selectedStudent.lastName}?</p>
                        </Modal.Body>
                        <Modal.Footer className='mod-footer'>
                            <Button onClick={handleDeleteStudent} className='bg-danger border border-danger m-2 unYmedioEm'>Eliminar</Button>
                            <Button className='btn4 unYmedioEm' onClick={handleCloseDelete}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                )}
                <div className="d-flex justify-content-center m-5">
                    <nav aria-label="page-navigation">
                        <ul className="pagination">
                            {pagData.hasPrevPage && (
                                <li className="page-item">
                                    <Link rel="noreferrer" className="page-link" to={pagData.prevPageLink}>
                                        Previous
                                    </Link>
                                </li>
                            )}
                            {[...Array(pagData.pages).keys()].map((page) => (
                                <li key={page + 1} className={`page-item ${pagData.actualPage === page + 1 ? 'actual-page' : ''}`}>
                                    <Link rel="noreferrer" className="page-link dosEm" to={`/usuario/inscriptos/page=${page + 1}`}>
                                        {page + 1}
                                    </Link>
                                </li>
                            ))}
                            {pagData.hasNextPage && (
                                <li className="page-item">
                                    <Link rel="noreferrer" className="page-link" to={pagData.nextPageLink}>
                                        Next
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
            </>
        )
    }
}

export default Inscriptos