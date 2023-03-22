import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/Context';
import Historial from '../../historial/HistorialReciente';
import Chart from '../Chart/Chart';

const Transacciones =()=> {
    const { totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [getIncomes, getExpenses])

    return (
        <div className='containerformulario'>
            <div>
                <h1>Transacciones</h1>
                <div className="stats-con d-flex justify-content-around">
                    <div className="chart-con ">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Ingreso :  {totalIncome()}</h2>
                            </div>
                            <div className="expense">
                                <h2>Total Gasto:  {totalExpenses()}</h2>
                            </div>
                            <div className="balance">
                                <h2>Total Balance:  {totalBalance()}</h2>
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