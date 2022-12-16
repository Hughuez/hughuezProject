const producto = require("../models/productos");
const fetch = (url) => import ('node-fetch').then(({default:fetch})=>fetch(url)); // usurpacion del require para usar fetch

//ver lista de productos 
exports.getProducts = async (req, res, next) => {
    const productos = await producto.find();
    res.status(200).json({
        success: true,
        count: productos.length,
        productos
    })
}

//buscar producto por id
exports.getProductById = async (req, res, next) => {
    const product = await producto.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Id de producto no encontrado"
        })
    } res.status(200).json({
        success: true,
        message: "¡Que bien! encontramos lo que buscabas:",
        product
    })
}

//update un producto
exports.updateProduct = async (req, res, next) => {
    let product = await producto.findById(req.params.id);
    if (!product) { // -> verifico que el objeto exista
        return res.status(404).json({
            success: false,
            message: "Id de producto no encontrado"
        })
    //si el objeto existe, entra a actualizar    
    } product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //busca valores nuevos
        runValidators: true //valida valores nuevos
    });
    res.status(200).json({
        success: true,
        message: "Información actualizada correctamente.",
        product
    })
}

//delete
exports.deleteProduct = async (req, res, next) => {
    const product = await producto.findById(req.params.id);
    if (!product) { // -> verifico que el objeto exista
        return res.status(404).json({
            success: false,
            message: "Id de producto no encontrado"
        })
    } 
    await product.remove();
    res.status(200).json({
        success: true,
        message: "Unidad eliminada correctamente"
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
        success: true,
        product
    })
}


/*
*fetch: ayuda a tener acceso a ciertos recursos para poder usarla, no necesita 
usar un metodo ni await, tampoco necesita post, o navegardor, las consultas se pueden 
hacer desde consola o guardarlas en una variable

fetch es un modulo, no viene por defecto, hay que instalarlo, para hacerlo hay 
que usar npm i node-fetch

segun node, todas las librerias o importaciones se deben guardar en un objeto local, 
por lo que es necesario importar el modulo se debe hacer así:

> const fetch = (url) => import ('node-fetch').then(({default:fetch})=>fetch(url));

de esta manera se importaria el modulo de fectch en el controller que estemos usando
 */

// ver todos los productos con fetch
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err))
}
//-> probando el metodo
//verProductos();

//ver por id
function verProductoPorId(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err))
}

//-> probando el metodo
//verProductoPorId("639bb5a66b617a68ed4ece0c");

