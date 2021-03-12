//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const ussuarioController = require('../controller/usuario.controller');
//crea un usuario
//api/usuarios

router.post('/',
    ussuarioController.crearUsuario
)

module.exports = router;