const login = ( email , passwd , callback)=>{
  var err = '';
  var bd_data = ''; // simulala inf. proveniente de bd.
  if (email == 'joe@doe.com' && passwd == '1234'){
    // Consultar en BD inf. faltante
    bd_data=(
      'email':email,
      'depto':'Ventas',
      'phone':'5544332211'
    )
  } else{
    err = {'mensaje':"Credenciales incorrectas"}
  }
  callback(err,bd_data);
} // const login = function(){}

exports.login = login;
