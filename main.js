import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import asyncError from "express-async-errors";

import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js"

import usersRoute from "./routes/users.js"
import productRoute from "./routes/product.js"

import connectDB from "./db/connect.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT  || 5000;


app.use(bodyParser.json());


// Routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/products', productRoute);


// middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URI)
        app.listen(PORT, ()=>{
            console.log('Server running on port '+ PORT)
        })
    }catch (error){
        console.log(error)
    }
}


start()