import express from 'express';

import packageRouter from './routes/package.route.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const app = express();

app.use(express.json());

const PORT = 3000

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connection To Database Successful..")
}).catch(err=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`Server listening on PORT ${PORT}`)
})

app.use('/api/v1/package',packageRouter);

app.get('/',(req,res)=>{
    res.status(200).json({
        status : "success",
        message : "Welcome to Regency Nepal Travels!!"
    })
})

app.use((err,req,res,next)=>{

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        status : "fail",
        message : message
    })
})

