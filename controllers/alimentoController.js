var mysql = require('mysql');
module.exports = {
  getAlimento : function(req, res, next){
    var config = require('.././database/config');
    var db = mysql.createConnection(config);

		db.connect();
		db.query('SELECT nombre, descripcion, imagen, precio FROM productos where categoria=1', function(err, rows, fields){
			if(err) throw err;
      res.render('alimentos', { alimentos: rows, isAuthenticated : req.isAuthenticated(), user : req.user });
			db.end();
		});
    return 0;
  }
};
