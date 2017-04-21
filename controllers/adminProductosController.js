var mysql = require('mysql');
var config = require('.././database/config');
var fs = require("fs");

module.exports = {

  agregarProducto:function(req, res, next){
    if(req.isAuthenticated() && req.user.rol == "1"){
      res.render('agregarProducto', {isAuthenticated : req.isAuthenticated(), user : req.user, message: req.flash('info')});
    }else{
      res.redirect('/');
    }
  },

  agregarProductoPost:function(req, res, next){
    fs.rename(req.files.imagen.path, "public/img/"+req.files.imagen.name);
    var producto = {
      nombre : req.body.producto,
      descripcion : req.body.descripcion,
      imagen : req.files.imagen.name,
			precio : req.body.precio,
      categoria : req.body.categoria,
      cantidad : req.body.cantidad
		};
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
