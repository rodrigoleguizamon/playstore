
var express = require('express');
var router = express.Router();
var appsControllers = require("../controllers/appsControllers")



router.get('/admin', appsControllers.admin);
router.get('/create', appsControllers.create);
router.post('/create', appsControllers.guardar)
router.get('/edit/:id',appsControllers.edit)
router.post('/edit/:id',appsControllers.update)
router.post('/admin/:id',appsControllers.delete)
router.get('/detail/:id',appsControllers.detail)
router.get('/order/:id',appsControllers.order)
router.get('/myApps',appsControllers.appsList)



module.exports = router;

