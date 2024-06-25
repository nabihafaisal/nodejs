
const express = require('express')
const cors = require('cors')
const { db } = require('./DB/db')
const { readdirSync } = require('fs');
// const { router } = require('./ROUTES/transaction');


const app = express();

//if there is error on this line try this npm install --save dotenv-extended 
require('dotenv').config()
const PORT = process.env.PORT

//middlewares
app.use(cors())
app.use(express.json())

//routes

readdirSync('./ROUTES').map((file) => {
    const route = require('./ROUTES/' + file);
    app.use('/api/v1', route);
});

const server = () => {

    db()
    app.listen(PORT, () => {
        console.log('LISTENING AT PORT :', PORT)
    })



}
server()