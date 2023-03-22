import React from 'react'
import { useGlobalContext } from '../context/Context';
import "bootstrap/dist/css/bootstrap.min.css";

const HistorialReciente = ()=> {
    const { transactionHistory } = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <div className='container'>
            <h2 style={{ color:'green', width: '260px' }}>Historial reciente</h2>
            {history.map((item) => {
                const { _id, title, amount, type, description } = item
                return (

                    <table key={_id} className='table table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Monto</th>
                                <th>Descripcion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className='m-2' style={{ color: type === 'expense' ? 'red' : 'green' }}>{title}</td>
                                <td className='m-2' style={{ color: type === 'expense' ? 'red' : 'green' }}>
                                    {
                                        type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`
                                    }
                                </td>
                                <td style={{ color: type === 'expense' ? 'red' : 'green' }}>{description}</td>
                            </tr>
                        </tbody>
                    </table>

                )
            })}
        </div>
    )
}



export default HistorialReciente