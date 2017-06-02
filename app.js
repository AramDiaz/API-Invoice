/*!
 * Copyright(c) 2017 Aram Diaz
 */
var express = require('express');
var routes = require('./routes/facturas');

var app = express();

//rutas
app.use('/facturas', routes);

// catch Error 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.send(err.message);
});

// catch error 500
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('Error 500');
});

// inicia servidor
app.listen(3000, function () {
  console.log('Server Start!');
});

module.exports = app;
