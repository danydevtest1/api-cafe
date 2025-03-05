async function createProducto(req,res) {
    res.status(200).send({msg:"Crear productos"})
    
}

async function getProducto(req,res){
    res.json("ver productos");
}

async function delProducto(req,res ){
    res.status(200).send({msg:"Eliminar producto"})
}

async function updateProducto(req,res) {
    res.status(200).send({msg:"Actualizar productos"})
}
module.exports={
    createProducto,
    getProducto,
    delProducto,
    updateProducto
}