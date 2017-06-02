var express = require('express');
var dataModel = require('../models/facturas');
var router = express.Router();

router.get('/', function(req, res, next) {
  var id = req.query.id;
  var start = req.query.start;
  var finish = req.query.finish;
  console.log('id:' + id);
  console.log('start:' + start);
  console.log('finish:' + finish);

  if(!id || !start || !finish) {
      res.json(200, {response:"Te faltan parámetros"});
      return;
  }

  dataModel.getData(id, start, finish, function(err, data) {
    var facturas = 0;
    if(data[0].Facturas) facturas = data[0].Facturas;
    if(facturas > 100) {
        res.json(200, {response:"Hay más de 100 resultados"});
    } else {
        res.json(200, {response:facturas});
    }
  });

});

module.exports = router;
