const Producto = require("../models/producto.models");
const image=require("../utils/image");

async function createProducto(req, res) {
  const productos = new Producto(req.body);
  //console.log(productos);
   try {
     if(req.files.imagep){
      const imagePath=image.getFilePath(req.files.imagep);
      productos.imagep=imagePath;
     }
 
    const datos = await productos.save();
    res.status(200).send(datos);
  } catch (error) {
    console.log(error);
    
   // res.status(500).send({ msg: "Error al guardar los datos" });
  } 
}

async function getProducto(req, res) {
  try {
    const buscarProductos= await Producto.find();
    res.status(200).send(buscarProductos);
  } catch (error) {
    res.status(500).send({msg:"Error al obtener la información"})
  }


}

async function delProducto(req, res) {
const {id}=req.params;
try {
  await Producto.findByIdAndDelete(id);
  res.status(200).send({msg:"Dato eliminado correctamente"})
} catch (error) {
  res.status(500).send({msg:"No se ha podido eliminar el dato"})
}
}

async function updateProducto(req, res) {
  const {id}=req.params;
  const updateproducto=req.body;

  try {
    await Producto.findByIdAndUpdate({_id:id},updateproducto);
    res.status(200).send({msg:"Datos actualizados correctamente"})
  } catch (error) {
   res.status(400).send({msg:"Error al actualizar"}) 
  }
}
module.exports = {
  createProducto,
  getProducto,
  delProducto,
  updateProducto,
};
