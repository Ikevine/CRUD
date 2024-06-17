import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import routers from './routes/routes.js'
import dbCon from "./utlis/db.js";
import mongoose from "mongoose";

dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api',routers)

mongoose.connect("mongodb+srv://ikevine:ikevine@cluster0.jjh8bmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('server is running')
    })
    console.log('Mongodb is conntected')
    
})
.catch((err)=>console.log(err))

