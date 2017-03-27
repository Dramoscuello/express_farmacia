var mysql = require('mysql');
var config = require('.././database/config');

module.exports = {
  getAlimentos : function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('SELECT nombre, descripcion, imagen, precio FROM productos where categoria=1', function(err, rows, fields){
			if(err) throw err;

      if(req.isAuthenticated() && req.user.rol == "1"){
        res.render('gestionAlimentos', {alimentos: rows, isAuthenticated : req.isAuthenticated(), user : req.user});
      }else{
        res.redirect('/');
      }
    });
    return 0;
  },

  getAseo : function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('SELECT nombre, descripcion, imagen, precio FROM productos where categoria=2', function(err, rows, fields){
			if(err) throw err;

      if(req.isAuthenticated() && req.user.rol == "1"){
        res.render('gestionAseo', {aseo: rows, isAuthenticated : req.isAuthenticated(), user : req.user});
      }else{
        res.redirect('/');
      }
    });
    return 0;
  },

  getMaquillaje : function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('SELECT nombre, descripcion, imagen, precio FROM productos where categoria=3', function(err, rows, fields){
			if(err) throw err;

      if(req.isAuthenticated() && req.user.rol == "1"){
        res.render('gestionMaquillaje', {maquillaje: rows, isAuthenticated : req.isAuthenticated(), user : req.user});
      }else{
        res.redirect('/');
      }
    });
    return 0;
  },

  getMedicina : function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('SELECT nombre, descripcion, imagen, precio FROM productos where categoria=4', function(err, rows, fields){
			if(err) throw err;

      if(req.isAuthenticated() && req.user.rol == "1"){
        res.render('gestionMedicina', {medicina: rows, isAuthenticated : req.isAuthenticated(), user : req.user});
      }else{
        res.redirect('/');
      }
    });
    return 0;
  }
};
