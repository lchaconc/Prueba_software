
var meModelo;
function Modelo() {
  this.usr={};
  meModelo = this;
  console.log("objeto usuario creado");

}

Modelo.prototype.saveRecord = function (id, nombre, apellido1, apellido2, email, depto) {
  //establece  usuario y lo almacena en localstorage si no existe.
	//Parametros: mod1, mod2 y mod3: Cadenas de caracteres con información del usuario como puntaje, medalla, estado, etc
  var max = localStorage.length, saved=false, done=false;
  //objeto usuario:
  meModelo.usr = {
    id: id,
	  nombre : nombre,
    apellido1 : apellido1,
    apellido2 : apellido2,
    email : email,
    depto : depto
  };
  console.log(meModelo.usr);
  // Si max == 0 significa que el localStorage está vacío, por lo tanto guarda el
  // usuario de una vez:
    if (max==0) {
      try {
		  //Conversión del objeto a cadena de texto para ser almacenado en local storage:
        localStorage.setItem(meModelo.usr.id, JSON.stringify(meModelo.usr));
        done=true;
      } catch (e) {
        alert ("Error " + e);
      };
      } else {
		  //VErifica si el registro existe antes de guardarlo
          for (var i = 0; i < max; i++) {
            var k = localStorage.key(i);
            if (k==meModelo.usr.id) {
          saved=true;
        }
      };
      };
    if (saved==false) {
        try {
			//Conversión del objeto a cadena de texto para ser almacenado en local storage:
          localStorage.setItem(meModelo.usr.id, JSON.stringify(meModelo.usr));
          done=true;
        } catch (e) {
              alert ("Error " + e);
        };
    };
    return done;

};

Modelo.prototype.getUserId = function (key) {
  //Se obtiene lista de usuarios almacenados en local storage
  var max = localStorage.length, user;
  for (var i = 0; i < max; i++) {
    if (key == localStorage.key(i)) {
      user = $.parseJSON(localStorage.getItem(key))
    }
  };
  // Devuelve el array con los registros almacenados en el LocalStorage
  return user;
};

Modelo.prototype.getUsersDepto = function (depto) {
	//Se obtiene lista de usuarios almacenados en local storage
  var max = localStorage.length, users=[], user={};
  for (var i = 0; i < max; i++) {
    var k = localStorage.key(i);
	// Convierte los datos del LocalStorage que son de tipo "String" a objeto "Json"
      user = $.parseJSON(localStorage.getItem(k))
      if (depto == user.depto) {
        users.push(user);
      }

  };
  // Devuelve el array con los registros almacenados en el LocalStorage
  return users;
};
