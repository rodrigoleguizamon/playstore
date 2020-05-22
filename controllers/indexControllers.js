let db = require("../database/models");

const indexControllers = {
    listar: function(req,res){
        db.Application.findAll()
            .then(function(data){
                return res.render('index', {applications:data})
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })
            
    },
    crear: function(req,res){
        db.Category.findAll()
        .then(function(categorias){
            return res.render('create',{categorias:categorias})
        })
    },
}

module.exports = indexControllers;