var express = require('express');
var router = express.Router();
var usersControllers= require ('../controllers/usersControllers');
var {check, validationResult, body} = require('express-validator');
const db = require('../database/models');

/* GET register */
router.get('/register', usersControllers.index)

/* POST register */
router.post('/register',[
    check('name').isLength({min:1, max:30})
    .withMessage('Ingrese su nombre'),

    check('email').isEmail()
    .withMessage('El campo debe ser un email valido'),
    
    check('password').isLength({min:6, max:12})
    .withMessage('El password debe tener entre 6 y 12 caracteres'),
], usersControllers.crear)

/* GET login. */
router.get('/login', usersControllers.login)

/* POST login*/
router.post('/login',[
    check('email').isEmail()
    .withMessage('El campo debe ser un email valido'),
    
    check('password').isLength({min:6, max:12})
    .withMessage('El password debe tener entre 6 y 12 caracteres'),

], usersControllers.ingresar) 

router.get('/logout', usersControllers.logout)



module.exports = router;