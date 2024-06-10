import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 6000;

const app = express();

app.use(express.json()); //for parsing application/json
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});