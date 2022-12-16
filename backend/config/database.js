const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const connectDataBase = () => {
    mongoose.set('strictQuery', false); //quita la advertencia del cambio de estado de strictquery
    moongose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then( con => {
        console.log(`> Data Base MongoDB on server: ${con.connection.host}`)
    }).catch(con => {
        console.log("No se logro conexión con base de datos")
    })
}

/*la anterior funcion es una promesa.
en este caso, la promesa sería una conexion a una base de datos, mediante el enlace 'DB_LOCAL_URI'
es una acción que no sabemos como va a terminar, o que sucedera, por eso, tenemos dos posibilidades:
.then -> en el caso que se pueda hacer la conexion de manera exitosa, y luego mediante mensaje de consola nos avise que se pudo hacer la conexion
.catch -> en el caso que fallle la conexión a la base de datos, nos informe que no fue posible conectarnos

hasta aquí no sabemos que de las dos cosas va a suceder, entonces estamos a la expectativa
solo hasta que se ejecute la función sabremos que pasará y que resultado tendremos, será una promesa y dependiendo del 
resultado de la promesa, habrá una ejecucíon posterior

hay promesas que pueden esperar (asincronica) y otras que se ejecutan en el momento (sincronica)*/   

module.exports = connectDataBase;