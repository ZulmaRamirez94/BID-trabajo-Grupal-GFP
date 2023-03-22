import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/Context';
import Historial from '../../historial/HistorialReciente';
import Chart from '../Chart/Chart';
import { useNavigate } from 'react-router-dom';

const Transacciones =()=> {
    const { totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()
    const navigate = useNavigate();

    useEffect(() => {
        //para prroteger la ruta
        if (!(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))) {
            navigate("/login");
        }
        getIncomes()
        getExpenses()
    }, [getIncomes, getExpenses])

    return (
        <div className='containerformulario'>
            <div>
                <h1 style={{marginLeft:'100px', fontFamily:'cursive' }}>Transacciones</h1>
                <div className="stats-con d-flex justify-content-around">
                    <div className="chart-con">
                        <Chart />
                            <div className="amount-con d-flex ">
                            <div className="income m-3 ">
                                <h2 style={{ fontFamily:'cursive' }}>Total Ingreso : <hr/> <sapn style={{ fontSize:'35px', color:'green'}}>Gs. {totalIncome()}</sapn> </h2>
                            </div>
                            <div className="expense m-3">
                                <h2 style={{ fontFamily:'cursive' }}>Total Gasto: <hr/> <sapn style={{ fontSize:'35px', color:'red'}}>Gs. {totalExpenses()}</sapn> </h2>
                            </div>
                            <div className="balance m-3">
                                <h2 style={{fontFamily:'cursive' }}>Total Balance: <hr/> <sapn style={{ fontSize:'35px', color:'blue'}}>Gs. {totalBalance()}</sapn> </h2>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <Historial />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Transacciones