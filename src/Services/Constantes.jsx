const sandboxWortev= true;
const urlHead = (sandboxWortev == true) ? 'http://wortevcanvasjet.wortevqa.com/api' : 'https://api.wortev.com/api' ;
  export const urlsApi = {
    login: urlHead+'/login',
    registro: urlHead+'/registrousuario',
    recuperarcontrasenia: urlHead+'/recuperarcontrasenia',
    leerusuario:  urlHead+'/leerusuario/',
    datosperfil: urlHead+'/datosperfil/',
    cargarphoto: urlHead+'/cargarphoto',
    leerpaises: urlHead+'/leerpaises',
    leerpaisesNiv2: urlHead+'/leerdivpolniv2/',
    actualizarperfil: urlHead+'/actualizaperfil',
    actualizarusuario: urlHead+'/actualizarusuario',
    verbmc: urlHead+'/verbmc/',
    crearbmc: urlHead+'/crearbmc',
    actualizarbmc: urlHead+'/actualizarbmc',
    restaurarbmc: urlHead+'/restaurarbmc',
    copiarbmc: urlHead+'/copiarbmc',
    listarbmc: urlHead+'/listarbmc',
    listarbmcpapelera: urlHead+'/listarbmcpapelera',
    papelerabmc: urlHead+'/papelerabmc',
    eliminarbmcusuario: urlHead+'/eliminarbmcusuario',
    eliminarbmc: urlHead+'/eliminarbmc',
    token: 'xK8ti0TzA4NR6doTqiG4gP8RTq865FLjPJ15NOD2'
  };
