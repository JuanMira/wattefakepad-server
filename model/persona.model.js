const { Schema, model } = require('mongoose');
const bookSchema = new Schema({
    _id: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    }
})

module.exports = model('Persona', bookSchema);