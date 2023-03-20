import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/Context';
import IngresoItem from '../ingreso/IngresoItem';
import GastoForm from '../gasto/GastoForm';

const Gasto = ()=> {
    const {expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext()

    useEffect(() => {
        getExpenses()
    }, [getExpenses])
    return (
        <div className='container'>
            <h1>Gastos</h1>
            <div className="d-flex justify-content-around">
                <div>
                    <GastoForm />
                    <h2 className="total-income ">Total Gasto: <span>${totalExpenses()}</span></h2>
                </div>
                <div>
                    <h1>Historial</h1>
                    {expenses.map((income) => {
                        const { _id, title, amount, date, category, description, type } = income;
                        return <IngresoItem key={_id} id={_id} title={title} description={description} amount={amount} date={date} type={type} category={category} deleteItem={deleteExpense} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Gasto