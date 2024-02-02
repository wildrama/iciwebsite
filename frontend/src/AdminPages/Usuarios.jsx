import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../Context/AdminContext';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {faPencil, faArrowDown, faArrowUp, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Usuarios = () => {
    const { getUsers, addUser, changeUserRole, deleteUser } = useContext(AdminContext)
    let { page, key, value, sortField, sortOrder } = useParams()
    const [usersData, setUsersData] = useState([]);

    const [selectedUser, setSelectedUser] = useState(null);

    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = (user) => () => {
        setSelectedUser(user)
        setShow(true);
    };

    const [showDelete, setShowDelete] = useState(false);
    const handleShowDeleteUser = () =>{
        setShowDelete(true);
    }
    const handleCloseDelete = () => setShowDelete(false);
    const handleDeleteUser = async () =>{
        const res = await deleteUser(selectedUser._id)
        if(res === 'success') fetchData()
        handleCloseDelete()
        handleClose()
    }

    const fetchData = async () => {
        const res = await getUsers(page, key, value, sortField, sortOrder);
        setUsersData(res.data.results);
        setLoading(false);
    };

    const handleAddUser = async (event) =>{
        event.preventDefault()
        const newUserEmail = {teacherEmail: document.querySelector('#new_user_email').value}
        await addUser(newUserEmail)
    };

    const handleChangeUserRole = async() =>{
        const res = await changeUserRole(selectedUser._id)
        if(res === 'success') fetchData()
        handleClose()
    };

    useEffect(() => {
        fetchData();
    }, [getUsers, page, key, value, sortField, sortOrder]);
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
                <div className="form-group p-2 table-responsive card">
                    <div className="card-header">
                        <div className="text-header unEm">Usuarios</div>
                    </div>
                    <table className="mt-5 mb-5 table">
                        <thead>
                            <tr className='th-header'>
                                <th className='th-nouns d-lg-table-cell d-none' scope="col">Nombre</th>
                                <th className='th-nouns d-lg-table-cell d-none' scope="col">Apellido</th>
                                <th className='th-nouns  d-table-cell d-lg-none' scope="col">Nombre y<br />Apellido</th>
                                <th className='th-nouns' scope="col">DNI</th>
                                <th className='th-nouns' scope="col">Rol</th>
                                <th className='th-nouns' scope="col">Modificar</th>
                            </tr>
                        </thead>
                        {usersData.map(user =>                  
                            <tbody key={user._id}>
                                <tr>
                                    <td className='td-border d-lg-table-cell d-none'>{user.firstName}</td>
                                    <td className='td-border d-lg-table-cell d-none'>{user.lastName}</td>
                                    <td className='td-border d-table-cell d-lg-none'>{user.firstName}<br />{user.lastName}</td>
                                    <td className='td-border'>{user.dni}</td>
                                    <td className='td-border'>{user.role}</td>
                                    <td className='td-border td-edit-user'>
                                        <Button className='button-ficha' onClick={handleShow(user)}>
                                            <FontAwesomeIcon icon={faPencil}/>
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="text-header unYmedioEm">Gestion de Usuarios</div>
                        <p className='text-white unEm'>Unicamente para el usuario con rol Owner</p>
                    </div>
                    <div className='text-center th-header'>
                        <form onSubmit={handleAddUser} className='form-control d-flex flex-column align-items-center th-nouns unEm my-2'>
                            <p className='card-header text-white'>Añadir</p>
                            <div className="form-group div-search">
                                <label htmlFor="new_user_email" className='unEm'>Email del nuevo usuario</label>
                                <input required id='new_user_email' defaultValue='' className="form-control unEm bg-white" type="email"/>
                            </div>
                            <input type='submit' value='Enviar' className='btn3 unYmedioEm'/>
                        </form>
                    </div>
                    {selectedUser && (
                    <>
                        <Modal className='modalLog text-center' show={show} onHide={handleClose}>
                            <Modal.Header className='mod-header' closeButton>
                                <Modal.Title className='bg-white unEm rounded'>Usuario</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='form-group dosEm ficha-completa'>
                                <p>Nombre: {selectedUser.firstName}</p>
                                <p>Apellido: {selectedUser.lastName}</p>
                                <p>DNI: {selectedUser.dni}</p>
                                <p>Email: {selectedUser.email}</p>
                                <div>Rol: {selectedUser.role} 
                                {selectedUser.role === 'owner' ? null : (
                                    <Button onClick={handleChangeUserRole} className='button-edit-ficha m-2'><FontAwesomeIcon icon={
                                        selectedUser.role === 'teacher' ? faArrowUp : faArrowDown
                                    }/></Button>
                                )}
                                </div>
                            </Modal.Body>
                            <Modal.Footer className='mod-footer'>
                                {selectedUser.role === 'owner' ? null : (
                                    <Button onClick={handleShowDeleteUser} className='bg-danger border border-danger m-2 dosEm'><FontAwesomeIcon icon={faTrashCan}/></Button>
                                )}
                                <Button className='btn4 unYmedioEm' onClick={handleClose}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        
                        <Modal className='modalLog text-center' show={showDelete} onHide={handleCloseDelete}>
                            <Modal.Header className='mod-header' closeButton>
                                <Modal.Title className='bg-white unEm rounded'>Eliminar</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='dosEm'>
                                <p className='font-weight-bold'>Estas seguro que quieres eliminar a {selectedUser.firstName} {selectedUser.lastName}?</p>
                            </Modal.Body>
                            <Modal.Footer className='mod-footer'>
                                <Button onClick={handleDeleteUser} className='bg-danger border border-danger m-2 unYmedioEm'>Eliminar</Button>
                                <Button className='btn4 unYmedioEm' onClick={handleCloseDelete}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    )}
                </div>
            </div>
            </>
        )
    }
}

export default Usuarios