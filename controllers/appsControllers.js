let db = require('../database/models');
let Sequelize = db.sequelize;


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
            db.Application.findByPk(req.params.id)
                .then(
                    function(application){
                        db.Category.findAll()
                            .then(function(data){
                                res.render('apps/edit',
                                {application: application, categorias:data});
                    
                            })
                    })
            
        },

        update:function(req,res){
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
                res.send('Hubo un error, intentalo mas tarde'+ err + "+++++++++" + req.body.category)
            })
        },

        detail: function(req,res){
        
            db.Application.findByPk(req.params.id)
                .then(data => {
                    res.render('apps/detail', {application:data})
                    
                })
                .catch(err => {
                    res.send('Hubo un error, intentalo mas tarde')
                })
        },

        delete: function(req, res){
            db.Application.destroy({
                where: {
                id: req.params.id
            }
        })
                    .then(function(data){
                        return res.redirect('apps/admin',{apps:data})
                    })
                    .catch(err => {
                        res.send('Hubo un error probar mas tarde')
                    })
                
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
        order:function(req,res){
            db.Application.findByPk(req.params.id)
                .then(application => {
                    db.Order.create({
                        user_id: res.locals.user.id,
                        application_id: application.id,
                        price: application.price
                    })
            })
            .then(function(data){
                return res.redirect('/apps/myApps')
                
            })
            .catch(err => {
                console.log(err);
                
                res.send('Hubo un error, intentalo mas tarde')
            })
        },
        appsList: function(req,res){
            db.Application.findAll({
            include:[{association:"categories"},{association:"usuarios"}],
                
                raw:true,
                nest:true
            })
            .then(function(data){
                let apps = []
                JSON.stringify(data)
                for(let i = 0; i < data.length; i++){
                    if(data[i].usuarios.id == res.locals.user.id){
                        apps.push(data[i])
                    }
                }
                return res.render('apps/myApps',{apps:apps})
                })
                .catch(err => {
                   res.send('Hubo un error probar mas tarde'+err)
                })      
            }
}
module.exports= appsControllers;