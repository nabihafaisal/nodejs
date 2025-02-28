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

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }
    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const addExpense = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}add-expense`, income);
            // handle response if necessary
            getExpense();
        } catch (err) {
            setError(err.response ? err.response.data.message : 'An unexpected error occurred');
        }
    }

    const getExpense = useCallback(async () => {
        try {
            // eslint-disable-next-line
            const response = await axios.get(`${BASE_URL}get-expense`);
            setExpenses(response.data);
            console.log(response.data);
        } catch (err) {
            setError(err.response ? err.response.data.message : err.message);
        }
    }, []); 

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpense()
    }
    const totalExpense = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    const totalBalance = ()=>{
        return totalIncome()-totalExpense()
    }

    const Transactionhistory=()=>{
        const history=[...incomes,...expenses]
        history.sort((a,b)=>{
            return new Date(b.createdAt)-new Date(a.createdAt )
        })
        return history
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            error,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpense,
            totalBalance,
            Transactionhistory      
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
