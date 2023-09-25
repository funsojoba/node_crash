import express from "express";
import bodyParser from 'body-parser';

const route = express.Router();


route.get("/", (req, res)=>{
    console.log("testing")

    res.send({
        "greeting":"hello",
        "message":"who goes you?"
    })
})

route.post("/", (req, res)=>{
    const user = req.body;
    console.log("BODY: ",user);
    // console.log(req)
    res.send(`user with the name has been added`)
})


export default route;