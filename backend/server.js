const app = require("./app");

// SETEAMOS O CONFIGURAMOS EL ARCHIVO DE CONFIGURACION
const dotenv = require("dotenv");
dotenv.config({path:'backend/config/config.env'}); // environment, el archivo de configuracion general

// creamos el servidor y que hace
const server = app.listen(process.env.PORT, () => {
    console.log(`server on port: ${process.env.PORT} \nmode: ${process.env.NODE_ENV}`)
});