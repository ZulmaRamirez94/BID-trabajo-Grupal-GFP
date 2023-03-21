import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/Context';
import IngresoItem from '../ingreso/IngresoItem';
import GastoForm from '../gasto/GastoForm';
import '../../Assets/css/style.css';

const Gasto = ()=> {
    const {expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext()

    useEffect(() => {
        getExpenses()
    }, [getExpenses])
    return (
        <div className='containerformulario m-2'>
            <h1 className='ml-10 bg-light w-25 rounded-3 position-center'>Gastos</h1>
            <div className="d-flex justify-content-around">
                <div>
                    <GastoForm />
                    <h2 className="m-2 position-relative ">Total Gasto: <span>Gs. {totalExpenses()}</span></h2>
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