import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js"

import usersRoute from "./routes/users.js"
import connectDB from "./db/connect.js";

const app = express();
const PORT = process.env.PORT  || 5000;

dotenv.config();

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
app.use(bodyParser.json());


// Routes
app.use('/users', usersRoute);



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