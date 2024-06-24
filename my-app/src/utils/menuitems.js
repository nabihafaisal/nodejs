import { dashboard, expenses, transactions, trend } from "./icons"
export const menuItems=[
    {
        id:1,
        title:'dashboard',
        icon: dashboard,
        link:'/dashboard'
    },
    {
        id:2,
        title:"view transactions",
        icon:transactions,
        link:'/dashboard'
    },
    {
        id:3,
        title:"incomes",
        icon: trend,
        link:'/dashboard'
    },
    {
        id:4,
        title:"Expenses",
        icon: expenses,
        link:'/dashboard'
    },

]