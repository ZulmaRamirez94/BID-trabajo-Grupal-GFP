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
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(127, 255, 0)',
                    'rgb(255, 205, 86)',
                    'rgb(205, 92, 205)'
                    
                  ],
                hoverOffset: 4,
                borderRadius : 10,
                spacing: 10
                   
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(205, 92, 205)'
                    
                  ],
                hoverOffset: 4,
                borderRadius : 10,
                spacing: 10,
                options : {
                cutout: 115
                }
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