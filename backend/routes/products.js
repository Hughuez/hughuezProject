const express = require ("express");
const router = express.Router(); //enrutador

// constante para la lista de productos -> crea el servicio
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controller/productsController"); //traer la respuesta json desde el controladolador

router.route('/productos').get(getProducts) //establecemos desde que ruta queremos ver getProducts
router.route('/producto/nuevo').post(newProduct) //establecemos la ruta de creacion nuevo producto 
router.route('/producto/:id').get(getProductById) //establecemos la ruta para buscar producto por id
router.route('/producto/:id').put(updateProduct) // ruta update
router.route('/producto/:id').delete(deleteProduct) // ruta eliminar


module.exports = router;


