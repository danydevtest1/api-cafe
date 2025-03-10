const express=require("express");
const multiparty=require("connect-multiparty");

const productosController=require("../controllers/productos.controller");

const md_mparty=multiparty({uploadDir:"./uploads"});
const api=express.Router();

api.post("/createproduct",[md_mparty], productosController.createProducto);
api.get("/getproducto", productosController.getProducto);
api.patch("/updateproducto/:id",[md_mparty],productosController.updateProducto);
api.delete('/delproducto/:id', productosController.delProducto);

module.exports=api;