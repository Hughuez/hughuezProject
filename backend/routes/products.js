const express = require ("express");
const router = express.Router(); //enrutador

// constante para la lista de productos -> crea el servicio
const {getProducts} = require("../controller/productsController"); //traer la respuesta json desde el controladolador

router.route('/products').get(getProducts) //establecemos desde que ruta queremos ver getProducts

module.exports = router;


