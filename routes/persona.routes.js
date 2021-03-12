const { Router } = require('express');
const router = Router();

const { getDescription, createDescription } = require('../controller/persona.controller');

router.route('/')
    .get(getDescription)
    .post(createDescription)

module.exports = router;