import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/Context';
import IngresoForm from './IngresoForm';
import IngresoItem from './IngresoItem';
import '../../Assets/css/style.css';

const Ingreso = ()=> {
    const {incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, [getIncomes])
    
    return (
        <div  className='containerformulario'>
            <h1>Ingresos</h1>
            <div>
                <div className="d-flex justify-content-around">
                    <div className="form-container">
                        <IngresoForm />
                        <h2 className="total-income">Total Ingreso: <span>${totalIncome()}</span></h2>
                    </div>
                    <div className="incomes">
                        <h1>Historial</h1>
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IngresoItem key={_id} id={_id}  title={title}  description={description}  amount={amount}  date={date}  type={type} category={category} deleteItem={deleteIncome} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Ingreso