import React from 'react'
import { dateFormat } from '../../utils/dateFormat';


const IngresoItem =({ id, title, amount, date, description, deleteItem}) => {
    
    return (
        <>
            <h5>{title}</h5>
            <div className='d-flex justify-content-between mb-2'>
                <p className='me-5'> {amount}</p>
                <p className='me-5'> {dateFormat(date)}</p>
                <p>{description} </p>
            </div>

            <button onClick={() => deleteItem(id)}>Eliminar</button>
            <hr />
        </>
    )
}

export default IngresoItem