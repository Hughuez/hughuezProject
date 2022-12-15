// creamos objetos de la libreria para poder usarlos
const express = require("express");
const app = express(); // es un objeto igual a express pero se llama app sirve para importar los recursos de express mediante module.exports     

app.use(express.json()); //cuando llegue un formato json lo va a entender y a usar

//importar rutas
const products = require("./routes/products");

app.use('/api',products)

module.exports = app