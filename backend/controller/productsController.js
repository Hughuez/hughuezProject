const producto = require("../models/productos");

//ver lista de productos 
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "en esta ruta vera todos los productos"
    })
}

//crear nuevo producto '/api/productos
/*realizaremos una promesa que el aplicativo debe esperar su cumplimiento para seguir adelante
con el termino async await le indicamos a la plicacion que debe esperar 
no interesa si la llamada demora 2milisegundos o 30
si la funcion no se ejecuta en el momento deja de ser sincronica y se convierte en asincronica*/
exports.newProduct = async (req, res, next) => {
     const product = await producto.create(req.body);
    //respuesta
     res.status(201).json({
        success:true,
        product
     })
}