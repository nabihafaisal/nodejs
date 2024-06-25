import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalcontext'
import { dateFormat } from '../../utils/dateformat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

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
                backgroundColor: 'green',
                borderColor: 'green',
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
                borderColor: 'red',
                tension: .2
            }
        ]
    }
    const options = {
        scales: {
            x: {
                grid: {
                    color: 'grey'
                },
                ticks: {
                    color: 'white'// Set y-axis labels color to white
                }
            },
            y: {
                grid: {
                    color: 'grey'
                },
                ticks: {
                    color: 'white'// // Set y-axis labels color to white
                }
            }
          
        }
    }

    return (
        <ChartStyled >
            <Line data={data} options={options} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background-color: #111130;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart