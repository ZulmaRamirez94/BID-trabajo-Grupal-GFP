import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { useGlobalContext } from '../../context/Context'
import { dateFormat } from '../../utils/dateFormat'
import { Colors } from 'chart.js';



ChartJS.register(ArcElement, Tooltip, Legend, Colors);
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Colors,
  );
  
  
function Chart() {
    const {incomes, expenses} = useGlobalContext()

    /*const data = {
        labels: incomes.map((inc) =>{
            const {date} = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }*/
      const data = {
        labels: incomes.map((inc) =>{
            const {date} = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
             Colors,
                hoverOffset: 4
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
               Colors,
                hoverOffset: 4
            }
        ]
    }
    return (
        <div style={{width: "700px", height: "400px"}} >
            <Doughnut data={data} />
        </div>
    )
}

export default Chart