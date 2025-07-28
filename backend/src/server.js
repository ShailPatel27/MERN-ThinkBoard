// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

// console.log(process.env.MONGO_URI)
// shows MONGO_URI variable value from env

const app = express();
const PORT = process.env.PORT || 5001; //if 1st returns undefined, 5001 will be taken

// Middleware
app.use(
    cors({
        origin: "http://localhost:5173", //frontend port
    })
)
app.use(express.json()); //This middleware will parse JSON bodies: get access to req.body
app.use(rateLimiter)

// our simple custom middleware
app.use((req, res, next) =>{
    console.log(`Request method is: ${req.method}\nRequest URL is: ${req.url}`);
    next();
});

app.use("/api/notes", notesRoutes);

connectDB().then(() => {    // First connect MongoDB and then start server
    app.listen(PORT, ()=>{
        console.log("Server started on port:", PORT);
    });
});