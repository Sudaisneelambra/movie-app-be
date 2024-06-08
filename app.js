const express= require('express')
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')

const commonroute = require('./routes/common')
const adminroutes = require('./routes/adminroutes')
const userroutes = require('./routes/userroutes')


const port = process.env.PORT
const DB_URL = process.env.DB_CONNECTION
const app = express()
app.use(express.json())

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


app.use('/',commonroute)
app.use('/admin',adminroutes)
app.use('/user',userroutes)



mongoose.connect(DB_URL,)
.then(()=>{
    console.log('database connected successfully');
    app.listen(port,()=>{
        console.log(`server running on port ${port}`);
    })
})
.catch((err)=>{
    console.log(err);
    console.log('Database connected failed');
})


