"use strict";

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
  $.getJSON( "server/users.php", function( data ) {
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
    gotoSite(typeUsr);
  } else {
    alert ("Usuario o contraseña incorrectos");
  }

}

function gotoSite(opc) {
      console.log(opc);
  switch (opc) {

    case "admin":
      renderMainAdmin();
      break;
    case "asistente":
      renderMainAsist();    
      break;
    default:

  }
}
