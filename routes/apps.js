
var express = require('express');
var router = express.Router();
var appsControllers = require("../controllers/appsControllers")



router.get('/admin', appsControllers.admin);
router.get('/create', appsControllers.create);
router.post('/create', appsControllers.guardar)
router.get('/editar/:id',appsControllers.edit)
router.post('/editar/:id',appsControllers.update)

module.exports = router;

