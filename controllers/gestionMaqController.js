var mysql = require('mysql');
var config = require('.././database/config');

module.exports = {

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
  }
};
