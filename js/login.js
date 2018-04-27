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
    console.log("defr");
      window.open('admin.html','_self') ;
      //window.location.href = 'site/admin/index.html';
    //  window.location.replace ('admin.html');
      window.location.href = "site/administrator.html";
      break;
    case "operator":
    console.log("oper");
      //window.open('site/operator/', '_blank');
      //window.open('site/operator.html');
      window.location.replace("site/operator.html");
      break;
    default:

  }
}
