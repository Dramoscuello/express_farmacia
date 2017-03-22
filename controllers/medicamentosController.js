var mysql = require('mysql');
module.exports = {
  getMedicamentos : function(req, res, next){
    var config = require('.././database/config');
    var db = mysql.createConnection(config);

		db.connect();
		db.query('SELECT nombre, descripcion, imagen, precio FROM productos where categoria=4', function(err, rows, fields){
			if(err) throw err;
      res.render('medicamentos', { medicamentos: rows });
			db.end();
		});
    return 0;
  }
};
