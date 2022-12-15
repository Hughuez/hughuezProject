const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const connectDataBase = () => {
    mongoose.set('strictQuery', false); //quita la advertencia del cambio de estado de strictquery
    moongose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then( con => {
        console.log(`> Data Base MongoDB on server: ${con.connection.host}`)
    });
    
}

module.exports = connectDataBase;