const { Router } = require('express');
const router = Router();

const { getBook } = require('../controller/bookController')

router.route('/')
    .get(getBook)

module.exports = router;