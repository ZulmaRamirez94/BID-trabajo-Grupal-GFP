import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/Context';
import IngresoItem from '../ingreso/IngresoItem';
import GastoForm from '../gasto/GastoForm';
import '../../Assets/css/style.css';
import { useNavigate } from 'react-router-dom';

const Gasto = ()=> {
    const {expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext()
    const navigate = useNavigate();

    useEffect(() => {
        //para prroteger la ruta
        if (!(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))) {
            navigate("/login");
        }
        getExpenses()
    }, [getExpenses])
    return (
        <div className='containerformulario m-2'>
            <h1 style={{marginLeft:'130px', marginBottom:'10px', fontFamily:'cursive' }}>Gastos</h1>
            <div className="d-flex justify-content-around">
                <div>
                    <GastoForm />
                    <h2 className="mt-4 position-relative ">Total Gasto:
                    <sapn style={{ fontSize:'35px', color:'red'}}>  Gs. {totalExpenses()}</sapn>
                    </h2>
                </div>
                <div>
                    <h1 style={{ fontFamily:'cursive' }}>Historial</h1>
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