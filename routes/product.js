import express from "express";


const route = express.Router();

import productControllers from "../controlers/product.js"



route.get('/', productControllers.getAllProducts);
route.get('/static', productControllers.getAllStaticProduct);


export default route;