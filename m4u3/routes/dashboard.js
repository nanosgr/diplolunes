var express = require('express');
var router = express.Router();

const productos =
  [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 100
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 200
    },
    {
      id: 3,
      nombre: 'Producto 3',
      precio: 300
    }
  ];

const usuario = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 30
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard', productos, usuario});
});

module.exports = router;
