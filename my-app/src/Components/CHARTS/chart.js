import React from 'react'
import {Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
}from 'chart.js'
import{line} from 'react-chartjs-2'
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
    ArcElement

)
function chart(){
    const {expensess,expenses} = useGlobalContext()

    const data={
        labels:expensess.map((inc)=>{
            const{date}=  inc
            return dateFormat(date)
        }),
        datasets:[
            {
                label:'expenses',
                data:[  
                    ...expensess.map((expenses)=>{
                        const {amount}=expenses
                        return amount
                    })
                ],
            backgroundColor:'green'     
        },
        {
                label:'Expenses',
                data:[  
                    ...expenses.map((expense)=>{
                        const {amount}=expense
                        return amount
                    })
                ],
            backgroundColor:'red'     
        }
        ]
    }
    
    return(

        
        <ChartStyled><line data={data}/></ChartStyled>
    )
}
const ChartStyled=styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    height:100%;
`;
export default chart