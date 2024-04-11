var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin/nodevades', 
      {
          layout: 'admin/layout', 
          usuario: req.session.nombre,
      });
});