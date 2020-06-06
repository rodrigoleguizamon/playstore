var express = require('express');
var router = express.Router();
var indexControllers = require("../controllers/indexControllers")

/* GET home page. */
router.get('/', indexControllers.listar);
router.post('/search', indexControllers.search);
router.get('/peliculas', indexControllers.listarPelis);
router.get('/libros', indexControllers.listarLibros);
router.get('/musica', indexControllers.listarMusica);


module.exports = router;
