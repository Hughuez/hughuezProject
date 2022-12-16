const mongoose = require("mongoose");

const productosSchema = mongoose.Schema({
    brand: {
        type: String,
        equire: [true, "Registre la marca de la unidad."],
        trim: true, // elimina caracteres blancos
        maxLength: [120, "El nombre de la unidad excede los 120 caracteres."]
    },
    model: {
        type: String,
        require: [true, "Registre el modelo de la unidad"],
        trim: true,
    },
    year: {
        type: Number,
        require: [true, "Registre el año de la unidad"],
        trim: true,
        maxLength: [4]
    },
    price: {
        type: Number,
        require: [true, "Registre el precio de la unidad."],
        maxLength: [10, "El precio de la unidad no puede estar por encima de los 999999999"],
        default: 0.0
    },
    description: [
        {
            note: {
                type: String,
                require: [true, "Fovor ingrese nota descriptiva de la unidad."]
            },
            Condition:{
                type: String,
                require: [true, "elija la condicion de la unidad (Nuevo o Usado)."],
                enum: {
                    values: [
                        "Nuevo",
                        "Usado",
                    ]
                }
            },
            bodyType: {
                type: String
            },
            color: {
                type: String,
                require: true
            },
            engine: {
                type: Number
            },
            Transmission: {
                type: String,
                require: true
            },
            Mileage:{
                type: String
            },
            fuelType: {
                type: String,
                require
            }
        }
    ],
    rating: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                require: true
            },
            url: {
                type: String,
                require: true
            }
        }
    ],
    category: {
        type: String,
        require: [true, "Por favor seleccione la categoria del producto."],
        enum: {
            values: [
                "Automóvil",
                "Camioneta",
                "Cuatrimoto",
                "Buggy",
                "Moto",
                "Accesorios",
            ]
        }
    },
    seller: {
        type: String,
        require: [true, "Registre el nombre del vendedor"]
    },
    inventory: {
        type: Number,
        require: [true, "Registre el Stock deisponible"],
        maxLength: [5, "5 es cantidad maxíma de unidades"],
        default: 0
    },
    numRating: {
        type: Number,
        default: 0     
    },
    reviews: [
        {
            buyer:{
                type: String,
                require: true
            },
            stars: {
                type: Number,
                require: true
            },
            review: {
                type: String,
                require: true,
                dateReview: Date.now
            }

        }
    ],
    createDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("productos", productosSchema);