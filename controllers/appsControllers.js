let db = require('../database/models');


const appsControllers= {   
        admin: function(req,res){
            db.Application.findAll()
                .then(function(data){
                    return res.render('apps/admin',{apps:data})
                })
                .catch(err => {
                    res.send('Hubo un error probar mas tarde')
                })
                        
        },

    
        crear:function(req,res){
        
            db.Application.create({
                name: req.body.name,
                category_id: req.body.category,
                description: req.body.description,
                image_url: req.body.image_url,
                price: req.body.price,
                user_id: user.name
            })
            .then(function(data){
                return res.redirect('apps/admin')
                
            })
            .catch(err => {
                console.log(err);
                
                res.send('Hubo un error, intentalo mas tarde')
            })
        },
    
        editar: function(req,res){
            db.Application.findByPk(req.params.id)
                .then(
                    function(application){
                        res.render('apps/edit',
                        {application: application});
                    }
                )
        },

        actualizar:function(req,res){
            // agregar cambios a la base para el producto editado
            db.Application.update({
                name: req.body.name,
                category_id: req.body.category,
                description: req.body.description,
                image_url: req.body.image_url,
                price: req.body.price,
                user_id: user.name
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(function(data){
                return res.redirect('/apps/admin')
                
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })
        },

        detalle: function(req,res){
        
            db.productos.findByPk(req.params.id)
                .then(data => {
                    console.log(data)
                    res.render('apps/detail', {application:application})
                    
                })
                .catch(err => {
                    res.send('Hubo un error, intentalo mas tarde')
                })
        },

        borrar: function(req, res){
            db.Application.destroy({
                where: {
                id: req.params.id
            }}) 
            
                res.redirect('/apps/admin')
        },
    
        mostrarDetalleProducto: function(req,res){
                //buscar producto id
            db.Application.findByPk(req.params.id)
                .then(data => {
                        return res.render('./apps/detailApp', {application:data})
                })
                .catch(err => {
                        res.send('Hubo un error, intentalo mas tarde')
                })
        },
}
module.exports= appsControllers;