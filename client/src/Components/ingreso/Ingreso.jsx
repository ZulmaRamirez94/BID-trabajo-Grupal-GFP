import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/Context';
import IngresoForm from './IngresoForm';
import IngresoItem from './IngresoItem';
import '../../Assets/css/style.css';
import { useNavigate } from 'react-router-dom';

const Ingreso = ()=> {
    const {incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()
    const navigate = useNavigate();

    useEffect(() =>{
        //para prroteger la ruta
        if (!(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))) {
            navigate("/login");
        }
        getIncomes()
    }, [getIncomes])
    
    return (
        <div  className='containerformulario'>
            <h1 style={{marginLeft:'130px', marginBottom:'10px', fontFamily:'cursive' }}>Ingresos</h1>
            <div>
                <div className="d-flex justify-content-around">
                    <div className="form-container">
                        <IngresoForm />
                        <h2 className="total-income m-2">Total Ingreso:
                            <sapn style={{ fontSize:'35px', color:'green'}}> Gs. {totalIncome()}</sapn>
                        </h2>
                    </div>
                    <div className="incomes">
                        <h1 style={{ fontFamily:'cursive' }}>Historial</h1>
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