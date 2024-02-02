import React from 'react'

const Configuracion = () => {
    return (
        <div className='inscriptos padding-foot padding-head'>
            <div className='card'>
                <div className="card-header">
                    <div className="text-header unEm">Configuracion</div>
                </div>
                <div className='text-center th-header flex-column align-items-center d-flex my-4'>
                    <h2 className='dosEm th-nouns'>Inscripciones</h2>
                    <div className="toggle-border mt-4">
                        <input id="one" type="checkbox"/>
                        <label htmlFor="one">
                            <div className="handle"></div>
                        </label>
                    </div>
                    <h4 className='unYmedioEm th-nouns'>Precio $</h4>
                </div>
            </div>
        </div>
    )
}

export default Configuracion