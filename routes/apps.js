
var express = require('express');
var router = express.Router();
var appsControllers = require("../controllers/appsControllers")
var multer = require('multer');
var path = require('path');
var loggedMiddleware = require('../middlewares/loggedMiddleware');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })



router.get('/admin', appsControllers.admin);
router.get('/create', appsControllers.create);
router.post('/create',upload.any(), appsControllers.guardar)
router.get('/edit/:id',appsControllers.edit)
router.post('/edit/:id',upload.any(),appsControllers.update)
router.post('/admin/:id',appsControllers.delete)
router.get('/detail/:id',appsControllers.detail)
router.post('/order/:id',appsControllers.order)
router.get('/myApps',loggedMiddleware,appsControllers.appsList)



module.exports = router;

