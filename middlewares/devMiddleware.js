const db= require ('../database/models');

const locals = (req, res, next) => {

   if(req.session.user_type){
      res.locals.user_type = req.session.user_type;
   }
   next()
}


module.exports = locals;