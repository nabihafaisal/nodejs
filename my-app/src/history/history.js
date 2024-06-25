import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalcontext';

function History(){
    const{Transactionhistory}=useGlobalContext


    const[...history]=Transactionhistory
    return(
        <historystyled>
            <h2>Recent History</h2>
            {history.map((item)=>{
                const{_id,title,amount,type}=item 
                return(
                    <div className="history-items">
                        <p style={{
                            color:type==='expense'?'red':'var(--color-green)'
                        }}>
                        {title}  
                        </p>
                        <p style={{
                            color:type==='expense'?'red':'var(--color-green)'
                        }}>
                        {
                        type==='expense' ? `-${amount}`:`+${amount}`
                        }  
                        </p>


                    </div>
                     
                )
            })}
        </historystyled>
    )
}

const historystyled=styled.div`
    display:flex;
    flex-direction:column;
    gap: 1rem;
    .history-item{
        padding: 1rem;
        display: flex;
        gap: 2rem;
        background: #0A0A23; /* Dark background color */
        border:2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        justify-content:space-between;
        align-items:center;
        
    }
`;


export default History