import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app=express()
dotenv.config()

const connect=async()=>{
    try{
await mongoose.connect(process.env.DATABASE)
console.log('Connected successfully to MongoDB server');}
catch(error){
    throw new Error(`Unable to connect to database: ${error}`);
}}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")
})

app.listen(8080,()=>{
    connect()
    console.log("connected to backend.")
})

