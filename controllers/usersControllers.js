var bcrypt = require('bcrypt');
var session = require('express-session');
var bcrypt = require('bcrypt');
var {check, validationResult, body} = require('express-validator');
const db = require('../database/models');


const usersControllers= {

   
    index: function(req, res) {
        res.render('users/register')
    },

    crear:function(req, res){
      
        let errors = validationResult(req)

        //consulta base de datos si el usuario ya se encuentra registrado o si hay error al cargar algun dato
        if(errors.isEmpty()){
          db.User.count({ where: { email:req.body.email } }).then(count => {
            
            if (count != 0) {
              return res.render("users/register", {
                errors: [{ msg: "El e-mail ya se encuentra registrado!" }],
                data: req.body
              })
            }//si está todos los datos OK, crear usuario en base de datos. Y enviarlo a página Login
            else{
              db.User.create({
                name:req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                user_type: !req.body.user_type ? "0" : "1"
              });
            return res.render('./users/login')
            }
          })
        }else{
          return res.render('./users/register',{errors: errors.errors})
        }
        
      },
      login: function(req, res) {
        res.render('./users/login')
    },

    ingresar: function(req, res){
      
      let errors = validationResult(req)

      if (errors.isEmpty()) {
        db.User.findOne({ where: { email: req.body.email } })
          .then(user => {
            var result = bcrypt.compareSync(req.body.password, user.password);
            if (result) {
              delete user.password;
              req.session.user = user;
              req.session.user_type = req.session.user.user_type
              res.locals.user = req.session.user;
              res.redirect("/");
            } else {
              res.render("./users/login", {
                errors: [{msg: "Credenciales incorrectas"}]
              });
            }
          })
          .catch(function(error){
            res.render("./users/login", {
              errors: [{msg: "Credenciales incorrectas"}]
            })
          })
      } else {
        res.render("./users/login", { errors: errors.errors, data: req.body });
      }
    },
    logout:function(req,res){
      req.session.destroy()
      res.redirect('/')
    }
}

module.exports = usersControllers;