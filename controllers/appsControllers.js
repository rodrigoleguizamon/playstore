let db = require('../database/models');


const appsControllers= {   
        admin: function(req,res){
            db.Application.findAll({
                where:{user_id: res.locals.user.id },
                include:[{association:'categories'}],
            })
                .then(function(data){
                    return res.render('apps/admin',{apps:data})
                })
                .catch(err => {
                    res.send('Hubo un error probar mas tarde')
                })
                        
        },
        create:function(req,res){
            db.Category.findAll()
                .then(function(data){
                    return res.render('apps/create',{categorias:data})
                })
                .catch(err => {
                    res.send('Hubo un error probar mas tarde')
                })
                        
        },
    
        guardar:function(req,res){
        
            db.Application.create({
                name: req.body.name,
                category_id: req.body.category,
                description: req.body.description,
                image_url: req.body.image_url,
                price: req.body.price,
                user_id: res.locals.user.id
            })
            .then(function(data){
                return res.redirect('/')
                
            })
            .catch(err => {
                console.log(err);
                
                res.send('Hubo un error, intentalo mas tarde')
            })
        },
    
        edit: function(req,res){
            db.Application.findAll({
                where:{id: req.params.id },
                include:[{association:'categories'}]
            })
                .then(
                    function(application){
                        res.render('apps/edit',
                        {application: application});
                    }
                )
        },

        update:function(req,res){
            // agregar cambios a la base para el producto editado
            db.Application.update({
                name: req.body.name,
                category_id: req.body.category,
                description: req.body.description,
                image_url: req.body.image_url,
                price: req.body.price,
                user_id: res.locals.user.id
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