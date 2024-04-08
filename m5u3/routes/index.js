
var express = require('express');
var router = express.Router();
var pool = require('../models/bd');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const empleados = await pool.query('SELECT * FROM empleados');
  res.render('index', { title: 'Empleados', empleados });
});

module.exports = router;
