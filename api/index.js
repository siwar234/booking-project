import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authroute from './routes/auth.js'
import hotelsroute from './routes/hotels.js'
import roomsroute from './routes/rooms.js'
import usersroute from './routes/users.js'
import cookieParser from "cookie-parser"

const app=express()
dotenv.config()

// connect  database 

const connect = async () => {
    try {
      await mongoose.connect(process.env.DATABASE);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });
  

//middlewares
app.use(cookieParser())

app.use(express.json())

app.use("/api/auth",authroute);
app.use("/api/hotels",hotelsroute);
app.use("/api/rooms",roomsroute);
app.use("/api/users",usersroute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  
app.listen(8080, () => {
    connect();
    console.log("Connected to backend.");
  });
