
var me;
function Modelo() {
  this.usr={};
  me = this;
  console.log("objeto usuario creado");

}

Modelo.prototype.saveRecord = function (nombre, apellido1, apellido2, email, depto) {
  //establece  usuario y lo almacena en localstorage si no existe.
	//Parametros: mod1, mod2 y mod3: Cadenas de caracteres con información del usuario como puntaje, medalla, estado, etc
  var max = localStorage.length, saved=false, done=false;
  //objeto usuario:
  me.usr = {
    id: id,
	  name : nombre,
    apellido1 : apellido1,
    apellido2 : apellido2,
    email : email,
    depto : depto
  };
  // Si max == 0 significa que el localStorage está vacío, por lo tanto guarda el
  // usuario de una vez:
    if (max==0) {
      try {
		  //Conversión del objeto a cadena de texto para ser almacenado en local storage:
        localStorage.setItem(this.usr.id, JSON.stringify(this.usr));
        done=true;
      } catch (e) {
        alert ("Error " + e);
      };
      } else {
		  //VErifica si el registro existe antes de guardarlo
          for (var i = 0; i < max; i++) {
            var k = localStorage.key(i);
            if (k==this.usr.id) {
          saved=true;
        }
      };
      };
    if (saved==false) {
        try {
			//Conversión del objeto a cadena de texto para ser almacenado en local storage:
          localStorage.setItem(this.usr.id, JSON.stringify(this.usr));
          done=true;
        } catch (e) {
              alert ("Error " + e);
        };
    };
    return done;

};
