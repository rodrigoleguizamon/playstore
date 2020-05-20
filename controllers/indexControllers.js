let db = require('../database/models');

const indexControllers = {
    listar: function(req,res){
        db.applications.findAll()
            .then(function(data){
                return res.render('index', {applications:data})

               
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })
            
    },    
}

module.exports = indexControllers;