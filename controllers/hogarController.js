var mysql = require('mysql');
module.exports = {
  getHogar : function(req, res, next){
    var config = require('.././database/config');
    var db = mysql.createConnection(config);

		db.connect();
		db.query('SELECT nombre, descripcion, imagen, precio FROM productos where categoria=2', function(err, rows, fields){
			if(err) throw err;
      res.render('hogar', { hogar: rows });
			db.end();
		});
    return 0;
  }
};
