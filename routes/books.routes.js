const { Router } = require('express');
const router = Router();

const { getBooks, createBook, getBook } = require('../controller/books.controller');

router.route('/')
    .post(createBook)
    .get(getBooks)

router.route('/:id')
    .get(getBook)

module.exports = router;