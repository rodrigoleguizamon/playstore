let db = require("../database/models");

const indexControllers = {
    listar: function(req,res){
        db.Application.findAll({
            include: [{association:"categories"}]
        })
            .then(function(data){
                return res.render('index', {applications:data})
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })
            
    },
    listarPelis: function(req,res){
        db.Application.findAll({
            include: [{association:"categories"}]
        })
            .then(function(data){
                return res.render('apps/peliculas', {applications:data})
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })
            
    },
    listarLibros: function(req,res){
        db.Application.findAll({
            include: [{association:"categories"}]
        })
            .then(function(data){
                return res.render('apps/libros', {applications:data})
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })
            
    },
    listarMusica: function(req,res){
        db.Application.findAll({
            include: [{association:"categories"}]
        })
            .then(function(data){
                return res.render('apps/musica', {applications:data})
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })
            
    },
  
}

module.exports = indexControllers;