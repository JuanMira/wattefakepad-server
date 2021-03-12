const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    description: {
        type: String
    },
    idUsuario: {
        type: String,
        required: true
    }
})

module.exports = userSchema;