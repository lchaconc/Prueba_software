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

Eventos.prototype.generales = function () {
  $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
    template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  })
  // Toggle the side navigation
  $("#sidenavToggler").click(function(e) {
    e.preventDefault();
    $("body").toggleClass("sidenav-toggled");
    $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
    $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
  });
  // Force the toggled class to be removed when a collapsible nav link is clicked
  $(".navbar-sidenav .nav-link-collapse").click(function(e) {
    e.preventDefault();
    $("body").removeClass("sidenav-toggled");
  });
  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
    var e0 = e.originalEvent,
      delta = e0.wheelDelta || -e0.detail;
    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    e.preventDefault();
  });
  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
  // Configure tooltips globally
  $('[data-toggle="tooltip"]').tooltip()
  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
};

Eventos.prototype.graficos = function () {
    $("#linkGraficos").click(function () {
      vistas.showGraphics();
    })
};
