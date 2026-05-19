import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRoutes from './src/routes/authRoutes.js'
import userRoutes from './src/routes/userRoutes.js'
import connectDB from "./src/confiq/db.js"


connectDB()

const app=express();
app.use(express.json())

app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes);



app.listen(process.env.PORT,()=>{
    console.log("server is running on port 3000")
});
