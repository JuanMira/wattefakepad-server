const { Schema, model } = require('mongoose');
const bookSchema = new Schema({
    _id: {
        type: String, required: true
    },
    title: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    history: {
        type: String,
        required: true
    },
    author: {
        type: String, required: true
    },
    idAuthor: {
        type: String, required: true
    },
    anon: {
        type: Boolean
    },
    able: {
        type: Boolean
    }
})

module.exports = model('Book', bookSchema);