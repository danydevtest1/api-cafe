const express= require("express");
const cors = require("cors");

//Importar rutas
const productosRoute=require("./routes/Producto.routes");

//Config express
const app=express();


//Configuracion de cors
app.use(cors());
//uso de las rutas
app.use('/api', productosRoute);

//exportar express
module.exports=app;