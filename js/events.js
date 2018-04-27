"use strict";


function Eventos() {

}


Eventos.prototype.mostrarformRegistro = function (metodoVista) {
  $("#likFormRegistro").click(function () {
    //console.log("evetno mostrarformRegistro");
    metodoVista();
  });
};


Eventos.prototype.agregarRegistro = function (modeloMetodo, nombre, apellido1, apellido2, email, depto) {
  $("#btnAgregarRegistro").click(function () {
    //console.log("evento agregarRegistro");
    modeloMetodo(nombre, apellido1, apellido2, email, depto);

  });
};
