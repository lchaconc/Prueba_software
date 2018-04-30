"use strict";
var eventos = new Eventos();

$(document).ready(function () {
  loadAnimation();
  loadUser();
})

function loadAnimation() {
  $('.message a').click(function(){
     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  });
}

function loadUser() {
  $.getJSON( "http://explorahorizontes.com/ajax_test/users.php", function( data ) {
    addEventVerify (data);
    });
}

function addEventVerify(array) {
  $("#btnLogin").click(function () {
    verifUser (array);
  })

}

function verifUser (array) {
  var name = $("#txtName").val(),
  pwd = $("#txtPwd").val(),
  access = false,
  typeUsr = null;

  for (var i = 0; i < array.length; i++) {
    if (name==array[i].name && pwd == array[i].pwd) {
        access=true;
        typeUsr = array[i].typeUsr;
    }
  }

  if (access) {
    loadModule(typeUsr);
  } else {
    alert ("Usuario o contraseña incorrectos");
  }

}

function loadModule(opc) {
      console.log(opc);
  switch (opc) {

    case "admin":
      eventos.eventosGeneralesAdmin();
      eventos.mostrarformRegistro();
      break;
    case "asistente":
      eventos.eventosGeneralesAsist();
    break;
    default:
      console.log("tipo de usuario no encontrado");
  }

    //Genéricos
    eventos.eventosBuscarPorId();
    eventos.eventosBuscarPorDepto();
    eventos.graficos();
    eventos.generales();
}
