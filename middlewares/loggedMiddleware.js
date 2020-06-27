const loggedMiddleware = function(req, res, next){

    if(res.locals.user == undefined){
        return res.redirect('/users/login')
    }
    next()
 }
 
 
 module.exports = loggedMiddleware;