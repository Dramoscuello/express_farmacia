var mysql = require('mysql');
var config = require('.././database/config');
var fs = require("fs")

module.exports = {
  getAlimentos : function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('SELECT id, nombre, descripcion, imagen, precio, cantidad FROM productos where categoria=1', function(err, rows, fields){
			if(err) throw err;

      if(req.isAuthenticated() && req.user.rol == "1"){
        res.render('gestionAlimentos', {alimentos: rows, isAuthenticated : req.isAuthenticated(), user : req.user, message: req.flash('info')});
      }else{
        res.redirect('/');
      }
    });
    return 0;
  },

  deleteAlimento: function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('DELETE FROM productos WHERE id = ' + [req.params.id], function(err, rows, fields){
			if(err) throw err;
    });
    req.flash('info', 'Se ha eliminado correctamente');
    return res.redirect('/gestionar-alimento');
  },

  getAseo : function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('SELECT id, nombre, descripcion, imagen, precio, cantidad FROM productos where categoria=2', function(err, rows, fields){
			if(err) throw err;

      if(req.isAuthenticated() && req.user.rol == "1"){
        res.render('gestionAseo', {aseo: rows, isAuthenticated : req.isAuthenticated(), user : req.user,message: req.flash('info')});
      }else{
        res.redirect('/');
      }
    });
    return 0;
  },

  deleteAseo: function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('DELETE FROM productos WHERE id = ' + [req.params.id], function(err, rows, fields){
			if(err) throw err;
    });
    req.flash('info', 'Se ha eliminado correctamente');
    return res.redirect('/gestionar-aseo');
  },

  getMaquillaje : function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('SELECT id, nombre, descripcion, imagen, precio, cantidad FROM productos where categoria=3', function(err, rows, fields){
			if(err) throw err;

      if(req.isAuthenticated() && req.user.rol == "1"){
        res.render('gestionMaquillaje', {maquillaje: rows, isAuthenticated : req.isAuthenticated(), user : req.user,message: req.flash('info')});
      }else{
        res.redirect('/');
      }
    });
    return 0;
  },

  deleteMaquillaje: function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('DELETE FROM productos WHERE id = ' + [req.params.id], function(err, rows, fields){
			if(err) throw err;
    });
    req.flash('info', 'Se ha eliminado correctamente');
    return res.redirect('/gestionar-maquillaje');
  },

  getMedicina : function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('SELECT id, nombre, descripcion, imagen, precio, cantidad FROM productos where categoria=4', function(err, rows, fields){
			if(err) throw err;

      if(req.isAuthenticated() && req.user.rol == "1"){
        res.render('gestionMedicina', {medicina: rows, isAuthenticated : req.isAuthenticated(), user : req.user,message: req.flash('info')});
      }else{
        res.redirect('/');
      }
    });
    return 0;
  },

  deleteMedicina: function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('DELETE FROM productos WHERE id = ' + [req.params.id], function(err, rows, fields){
			if(err) throw err;
    });
    req.flash('info', 'Se ha eliminado correctamente');
    return res.redirect('/gestionar-medicina');
  },

  agregarProducto:function(req, res, next){
    if(req.isAuthenticated() && req.user.rol == "1"){
      res.render('agregarProducto', {isAuthenticated : req.isAuthenticated(), user : req.user, message: req.flash('info')});
    }else{
      res.redirect('/');
    }
  },

  agregarProductoPost:function(req, res, next){
    fs.rename(req.files.imagen.path, "public/img/"+req.files.imagen.name);
    //console.log(req.files.imagen);
    var producto = {
      nombre : req.body.producto,
      descripcion : req.body.descripcion,
      imagen : req.files.imagen.name,
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
