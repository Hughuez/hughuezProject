const express = require ("express");
const router = express.Router(); //enrutador

// constante para la lista de productos -> crea el servicio
const {getProducts, newProduct} = require("../controller/productsController"); //traer la respuesta json desde el controladolador

router.route('/productos').get(getProducts) //establecemos desde que ruta queremos ver getProducts
router.route('/producto/nuevo').post(newProduct) //establecemos la ruta de creacion nuevo producto 

module.exports = router;


