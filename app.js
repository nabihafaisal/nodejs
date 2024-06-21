
const express = require('express')
const cors = require('cors')
const { db } = require('./DB/db');

const app = express();

//if there is error on this line try this npm install --save dotenv-extended 
require('dotenv').config()
const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

const server = () => {

    db()
    app.listen(PORT, () => {
        console.log('LISTENING AT PORT :', PORT)
    })



}
server()