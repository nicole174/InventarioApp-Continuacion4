var express = require('express');
var router = express.Router();
var usuario = require('../models/user');
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Esto solo realiza el proceso de autentificacion (para el ejemplo),
// pero aun no tiene elementos de SEGURIDAD
router.post('/login', (req, res, next)=>{
  console.log( req.body.email, req.body.passwd );
  usuario.login(req.body.email,req.body.passwd,( e, d )=>{ // req,body.passwd SHA256
    if (d) {
      res.send('Login correcto');
      ses=req.session;
      console.log(ses.id);
      ses.userdata = d;
      console.long(ses);
      const playload ={
        datos : d
      };
      const clave = process.env.SECRETO || 'dios1234'; // obtener desde ENV
      console.log(clave);
      
      const token = jwt.sign(playload , clave , {expiresIn : 60 * 5});
      ses.token = token;


      res.redirect('/')

      // vrear la session
      /*
      1.- Realizar la sesion original del chrone
      2.- Hacer una nueva, desechando la de web brawser
      */

    } else {
      res.json(e);
    }
  });

});

router.post('/logout', (req, res, next)=>{
  req.
})

module.exports = router;
