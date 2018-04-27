"use strict";
var 
vistas = new Vistas(),
modelo = new Modelo();

function Eventos() {

}


Eventos.prototype.mostrarformRegistro = function () {
  console.log("evento mostrarformRegistro");
  $("#likFormRegistro").click(function () {
    console.log("vista formulario");
    vistas.formAddRecord();
    Eventos.prototype.agregarRegistro();
  });
};


Eventos.prototype.agregarRegistro = function () {
  $("#btnAgregarRegistro").click(function () {
      modelo.saveRecord($("#txtId").val(), $("#txtNombre").val(), $("#txtApellido1").val(), $("#txtApellido2").val(), $("#txtEmail").val(), "depto");
  });
};

Eventos.prototype.eventosGeneralesAdmin = function () {
    vistas.renderMainAdmin();
    // TODO: Crear manejadores de eventos generales
};



Eventos.prototype.eventosGeneralesAsist = function () {
  vistas.renderMainAsist();
};
