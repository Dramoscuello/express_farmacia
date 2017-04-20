var mysql = require('mysql');
var config = require('.././database/config');

module.exports = {
  getAlimentos : function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('SELECT nombre, descripcion, imagen, precio, cantidad FROM productos where categoria=1', function(err, rows, fields){
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
		db.query('SELECT nombre, descripcion, imagen, precio, cantidad FROM productos where categoria=2', function(err, rows, fields){
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
		db.query('SELECT nombre, descripcion, imagen, precio, cantidad FROM productos where categoria=3', function(err, rows, fields){
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
		db.query('SELECT nombre, descripcion, imagen, precio, cantidad FROM productos where categoria=4', function(err, rows, fields){
			if(err) throw err;

      if(req.isAuthenticated() && req.user.rol == "1"){
        res.render('gestionMedicina', {medicina: rows, isAuthenticated : req.isAuthenticated(), user : req.user});
      }else{
        res.redirect('/');
      }
    });
    return 0;
  },

  agregarProducto:function(req, res, next){
    if(req.isAuthenticated() && req.user.rol == "1"){
      res.render('agregarProducto', {isAuthenticated : req.isAuthenticated(), user : req.user, message: req.flash('info')});
    }else{
      res.redirect('/');
    }
  },

  agregarProductoPost:function(req, res, next){
    var producto = {
      nombre : req.body.producto,
      descripcion : req.body.descripcion,
      imagen : req.body.imagen,
			precio : req.body.precio,
      categoria : req.body.categoria,
      cantidad : req.body.cantidad
		};

    var config = require('.././database/config');

    var db = mysql.createConnection(config);

		db.connect();

		db.query('INSERT INTO productos SET ?', producto, function(err, rows, fields){
			if(err) throw err;

			db.end();
		});
    req.flash('info', '¡Producto registrado correctamente!');
    return res.redirect('/agregar-producto');
  }
};
