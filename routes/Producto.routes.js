const express=require("express");

const productosController=require("../controllers/productos.controller");


const api=express.Router();

api.post("/createproduct", productosController.createProducto);
api.get("/getproducto", productosController.getProducto);
api.put("/updateproducto/:id",productosController.updateProducto);
api.delete('/delproducto/:id', productosController.delProducto);

module.exports=api;