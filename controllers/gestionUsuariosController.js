var mysql = require('mysql');
var config = require('.././database/config');

module.exports = {
  getUsuarios : function(req, res, next){
    var db = mysql.createConnection(config);
		db.connect();
		db.query('SELECT id, nombres, apellidos, email, password, telefono, direccion FROM users WHERE rol=2', function(err, rows, fields){
			if(err) throw err;

      if(req.isAuthenticated() && req.user.rol == "1"){
        res.render('gestionUsuarios', {usuarios: rows, isAuthenticated : req.isAuthenticated(), user : req.user, message: req.flash('info')});
      }else{
        res.redirect('/');
      }
    });
    return 0;
  },

  deleteUsuario : function(req, res, next){
    //console.log(req.params.id);
    var db = mysql.createConnection(config);
		db.connect();
		db.query('DELETE FROM users WHERE id = ' + [req.params.id], function(err, rows, fields){
			if(err) throw err;
    });
    req.flash('info', 'Se ha eliminado el usuario');
    return res.redirect('/gestionar-usuarios');
  }
};
