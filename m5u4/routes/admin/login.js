var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuarios');

router.get('/', function(req, res, next) {
  res.render('admin/login', 
    {
        layout: 'admin/layout', 
    });
});

router.post('/', async function(req, res, next) {
  try{
    var usuario = req.body.usuario;
    var password = req.body.password;
    var usuario = await usuariosModel.getUserByUsernameAndPassword(usuario, password);
    if(usuario){
        res.redirect('/admin/usuarios');
    }else{
        res.render('admin/login', 
        {
            layout: 'admin/layout', 
            error: true
        });
    }}catch(error){
        console.log(error);
        res.render('admin/login', 
        {
            layout: 'admin/layout', 
            error: true
        });
      } 
  });


module.exports = router;