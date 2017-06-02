
var express = require('express');
var routes = require('./routes/facturas');

var app = express();

//Route main
app.use('/facturas', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.send(err.message);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('Error 500');
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('Error 500');
});

//Start Server
app.listen(3000, function () {
  console.log('Server Start!');
});

module.exports = app;
