const express= require("express");
const cors = require("cors");
const bodyParser=require("body-parser");
const path=require("path");

//Importar rutas
const productosRoute=require("./routes/Producto.routes");

//Config express
const app=express();

//Parsear la informacion
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Configurar carpeta de carga de files
//app.use(express.static("uploads"));
 app.use(express.static(path.join(__dirname,'uploads')));

//Configuracion de cors
app.use(cors());
//uso de las rutas
app.use('/api', productosRoute);

//exportar express
module.exports=app;