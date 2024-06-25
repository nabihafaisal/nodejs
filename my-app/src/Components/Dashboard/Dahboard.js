import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layoutes';
import Chart from '../Chart/chart';
import { useGlobalContext } from '../../context/globalcontext';
import { dollar } from '../../utils/icons';
function Dashboard() {
   const {incomes,expenses,totalExpense,totalIncome,totalbalance,getIncomes,getExpense}=useGlobalContext()
   useEffect(()=>{
    getIncomes()
    getExpense()

   },[])
 
    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                        <div className="income">
                            <h2>Total Income</h2>
                            <p>
                                {dollar}{totalIncome()}
                            </p>
                        </div>
                        <div className="expense">
                            <h2>Total Expense</h2>
                            <p>
                                {dollar}{totalExpense()}
                            </p>
                        </div>
                        <div className="balance">
                            <h2>Total balance</h2>
                            <p>
                                {dollar}{totalbalance()}
                            </p>    

                        </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <history/>
                        <h2 className="salary-title">Min<span>salary</span>Max</h2>
                        <div className="salary-item-con"></div>
                        <p>
                            {Math.min(...incomes.map(item=>item.amount))}
                        </p>
                        <p>
                            {Math.max(...incomes.map(item=>item.amount))}
                        </p>
                        <h2 className="expense-title">Min<span>expense</span>Max</h2>
                        <div className="salary-item-con"></div>
                        <p>
                            {Math.min(...expenses.map(item=>item.amount))}
                        </p>
                        <p>
                            {Math.max(...expenses.map(item=>item.amount))}
                        </p>    
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
.stats-con{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:2 rem;
    .chart-con{
        grid-column:1/4;
        height:400px;
        .amount-con{
            display:grid;
            grid-template-columns:repeat(4,1fr);
            gap:2rem;
            margin-top:2rem
            .income, .expense{
                grid-column:span 2;
            }
            .income, .expense, .balance{
                padding: 1rem;
                background: #0A0A23; /* Dark background color */
                border:2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                border-radius: 20px;
                p{
                    font-size:3.5 rem;
                    font-weight:700;    
                }
            }   
        }
     
    }      
}
   

       
`;

export default Dashboard