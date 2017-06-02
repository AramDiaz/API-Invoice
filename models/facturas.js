
var mysql = require('mysql');

var connection = mysql.createConnection({
  		host     : 'localhost',
  		user     : 'root',
  		password : 'root123',
  		database : 'facturas',
  		multipleStatements: false
		});

var dataModel = {};

dataModel.getData = function(id, start, finish, callback) {
  if(connection) {
    connection.query('SELECT SUM(InvoiceTotal) AS Facturas FROM facturas WHERE Id = ? AND Date >= ? AND Date <= ?',
                     [id, start, finish],
                     function(error, row) {
  			                 if(error) {
  				                   throw error;
  			                 } else {
  				                   callback(null, row);
  			                 }
                     });
  }
}

module.exports = dataModel;
