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
    if (modelo.saveRecord($("#txtId").val(), $("#txtNombre").val(), $("#txtApellido1").val(), $("#txtApellido2").val(), $("#txtEmail").val(), $("#selDepto").val())) {
        alert ("Registro agregado satisfactoriamente");
        $("#txtId").val("");
        $("#txtNombre").val("");
        $("#txtApellido1").val("")
        $("#txtApellido2").val("");
        $("#txtEmail").val("");
        $("#selDepto").val("0");
    } else {
      alert ("Problemas al intentar guardar registro");
    }

  });
};

Eventos.prototype.eventosGeneralesAdmin = function () {
    vistas.renderMainAdmin();
    // TODO: Crear manejadores de eventos generales
};

Eventos.prototype.eventosGeneralesAsist = function () {
  vistas.renderMainAsist();
};

Eventos.prototype.eventosBuscarPorId = function () {
  $("#linkPorId").click(function () {
    vistas.formId();
    $("#btnBuscarPorId").click(function () {
      vistas.showRecordId(modelo.getUserId($("#txtId").val()));
    })
  })
};

Eventos.prototype.eventosBuscarPorDepto = function () {
  $("#lnkDepto").click(function () {
        vistas.ShowformDepto();
        $("#btnBuscarPorDepto").click(function () {
          vistas.tablaDepto(modelo.getUsersDepto($("#selDepto").val()));
        })
  })

};
