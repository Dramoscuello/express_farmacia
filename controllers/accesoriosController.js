var mysql = require('mysql');
module.exports = {
  getAccesorios : function(req, res, next){
    var config = require('.././database/config');
    var db = mysql.createConnection(config);

		db.connect();
		db.query('SELECT nombre, descripcion, imagen, precio FROM productos where categoria=3', function(err, rows, fields){
			if(err) throw err;
      res.render('accesorios', { accesorios: rows });
			db.end();
		});
    return 0;
  }
};