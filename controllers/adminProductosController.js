var mysql = require('mysql');
var config = require('.././database/config');

module.exports = {
  getAlimentos : function(req, res, next){
    if(req.isAuthenticated() && req.user.rol == "1"){
      res.render('gestionAlimentos', {isAuthenticated : req.isAuthenticated(), user : req.user});
      return 0;
    }else{
      res.redirect('/');
    }
  }
};
