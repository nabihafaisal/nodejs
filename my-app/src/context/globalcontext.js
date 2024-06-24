// import React, { useContext, useState } from "react"
// import axios from 'axios'


// const BASE_URL = "http://localhost:5000/api/v1/";


// const GlobalContext = React.createContext()

// export const GlobalProvider = ({children}) => {

//     const [incomes, setIncomes] = useState([])
//     const [expenses, setExpenses] = useState([])
//     const [error, setError] = useState(null)

//     //calculate incomes
//     const addIncome = async (income) => {
//          // eslint-disable-next-line
//         const response = await axios.post(`${BASE_URL}add-income`, income)
//             .catch((err) =>{
//                 setError(err.response.data.message)
//             })
//         getIncomes()
//     }

//     const getIncomes = async () => {
//          // eslint-disable-next-line
//         const response = await axios.get(`${BASE_URL}get-income`)
//         setIncomes(response.data)
//         console.log(response.data)
//     }

   

//     return (
//         <GlobalContext.Provider value={{
//             addIncome,
//             getIncomes,
//             incomes,
           
//         }}>
//             {children}
//         </GlobalContext.Provider>
//     )
// }

// export const useGlobalContext = () =>{
//     return useContext(GlobalContext)
// }
import React, { useContext, useState, useCallback } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    // Calculate incomes
    const addIncome = async (income) => {
        try {
            // eslint-disable-next-line
            const response = await axios.post(`${BASE_URL}add-income`, income);
            getIncomes(); // Fetch updated list of incomes
        } catch (err) {
            setError(err.response ? err.response.data.message : err.message);
        }
    };

    const getIncomes = useCallback(async () => {
        try {
            // eslint-disable-next-line
            const response = await axios.get(`${BASE_URL}get-income`);
            setIncomes(response.data);
            console.log(response.data);
        } catch (err) {
            setError(err.response ? err.response.data.message : err.message);
        }
    }, []); 
    

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            error,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
