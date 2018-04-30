"use strict";
var myVista;
function Vistas() {
  this.HtmlMainContentAdmin = $(
    "<nav class='navbar navbar-expand-lg navbar-dark bg-dark fixed-top' id='mainNav'>"+
    "<a class='navbar-brand' href='index.html'>Usuario Administrador</a>"+
    "<button class='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>"+
    "  <span class='navbar-toggler-icon'></span>"+
    "</button>"+
    "<div class='collapse navbar-collapse' id='navbarResponsive'> "+
    "  <ul class='navbar-nav navbar-sidenav' id='exampleAccordion'>"+
    "    <li class='nav-item' data-toggle='tooltip' data-placement='right' title='Dashboard'>"+
    "      <a class='nav-link' href='index.html'>"+
    "        <i class='fa fa-fw fa-dashboard'></i>"+
    "        <span class='nav-link-text'>Principal</span>"+
    "      </a>"+
    "    </li>"+
    "    <li class='nav-item' data-toggle='tooltip' data-placement='right' title='Charts'>"+
    "      <a class='nav-link' href='#'>"+
    "        <i class='fa fa-fw fa-area-chart'></i>"+
    "        <span class='nav-link-text' id='linkGraficos'>Gráficos</span>"+
    "      </a>"+
    "    </li>"+
    "    <li class='nav-item' data-toggle='tooltip' data-placement='right' title='TablesId'>"+
    "      <a class='nav-link' href='#'>"+
    "        <i class='fa fa-fw fa-table'></i>"+
    "        <span id='linkPorId' class='nav-link-text' id='linkPorId'>Consulta por ID</span>"+
    "      </a>"+
    "    </li>"+
    "    <li class='nav-item' data-toggle='tooltip' data-placement='right' title='TablesDepto'>"+
    "      <a class='nav-link' href='#'>"+
    "        <i class='fa fa-fw fa-table'></i>"+
    "        <span id = 'lnkDepto' class='nav-link-text'>Consulta por Depto.</span>"+
    "      </a>"+
    "    </li>"+
    "    <li class='nav-item' data-toggle='tooltip' data-placement='right' title='Mantenimiento'>"+
    "      <a class='nav-link nav-link-collapse collapsed' data-toggle='collapse' href='#collapseComponents' data-parent='#exampleAccordion'>"+
    "        <i class='fa fa-fw fa-wrench'></i>"+
    "        <span class='nav-link-text'>Mantenimiento</span>"+
    "      </a>"+
    "      <ul class='sidenav-second-level collapse' id='collapseComponents'>"+
    "        <li>"+
    "          <a id='lnkBaseDatos' href='#'>Base de Datos</a>"+
    "        </li>"+
    "        <li>"+
    "          <a id='likFormRegistro' href='#'>Agregar Registro</a>"+
    "        </li>"+
    "        <li>"+
    "          <a href='#'>Reportes</a>"+
    "        </li>"+
    "      </ul>"+
    "      <li class='nav-item' data-toggle='tooltip' data-placement='right' title='Link'>"+
    "        <a class='nav-link' href='#'>"+
    "          <i class='fa fa-fw fa-link'></i>"+
    "          <span class='nav-link-text'>Acerca de...</span>"+
    "        </a>"+
    "      </li>"+
    "    </ul>"+
    "    <ul class='navbar-nav sidenav-toggler'>"+
    "      <li class='nav-item'>"+
    "        <a class='nav-link text-center' id='sidenavToggler'>"+
    "          <i class='fa fa-fw fa-angle-left'></i>"+
    "        </a>"+
    "      </li>"+
    "    </ul>"+
    "    <ul class='navbar-nav ml-auto'>"+
    "      <li class='nav-item dropdown'>"+
    "        <a class='nav-link dropdown-toggle mr-lg-2' id='messagesDropdown' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"+
    "          <i class='fa fa-fw fa-envelope'></i>"+
    "          <span class='d-lg-none'>Messages"+
    "            <span class='badge badge-pill badge-primary'>12 New</span>"+
    "          </span>"+
    "          <span class='indicator text-primary d-none d-lg-block'>"+
    "            <i class='fa fa-fw fa-circle'></i>"+
    "          </span>"+
    "        </a>"+
    "        <div class='dropdown-menu' aria-labelledby='messagesDropdown'>"+
    "          <h6 class='dropdown-header'>New Messages:</h6>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item' href='#'>"+
    "            <strong>David Miller</strong>"+
    "            <span class='small float-right text-muted'>11:21 AM</span>"+
    "            <div class='dropdown-message small'>Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>"+
    "          </a>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item' href='#'>"+
    "            <strong>Jane Smith</strong>"+
    "            <span class='small float-right text-muted'>11:21 AM</span>"+
    "            <div class='dropdown-message small'>I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>"+
    "          </a>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item' href='#'>"+
    "            <strong>John Doe</strong>"+
    "            <span class='small float-right text-muted'>11:21 AM</span>"+
    "            <div class='dropdown-message small'>I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>"+
    "          </a>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item small' href='#'>View all messages</a>"+
    "        </div>"+
    "      </li>"+
    "      <li class='nav-item dropdown'>"+
    "        <a class='nav-link dropdown-toggle mr-lg-2' id='alertsDropdown' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"+
    "          <i class='fa fa-fw fa-bell'></i>"+
    "          <span class='d-lg-none'>Alerts"+
    "            <span class='badge badge-pill badge-warning'>6 New</span>"+
    "          </span>"+
    "          <span class='indicator text-warning d-none d-lg-block'>"+
    "            <i class='fa fa-fw fa-circle'></i>"+
    "          </span>"+
    "        </a>"+
    "        <div class='dropdown-menu' aria-labelledby='alertsDropdown'>"+
    "          <h6 class='dropdown-header'>New Alerts:</h6>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item' href='#'>"+
    "            <span class='text-success'>"+
    "              <strong>"+
    "                <i class='fa fa-long-arrow-up fa-fw'></i>Status Update</strong>"+
    "            </span>"+
    "            <span class='small float-right text-muted'>11:21 AM</span>"+
    "            <div class='dropdown-message small'>This is an automated server response message. All systems are online.</div>"+
    "         </a>"+
    "         <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item' href='#'>"+
    "            <span class='text-danger'>"+
    "              <strong>"+
    "                <i class='fa fa-long-arrow-down fa-fw'></i>Status Update</strong>"+
    "            </span>"+
    "            <span class='small float-right text-muted'>11:21 AM</span>"+
    "            <div class='dropdown-message small'>This is an automated server response message. All systems are online.</div>"+
    "          </a>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item' href='#'>"+
    "            <span class='text-success'>"+
    "              <strong>"+
    "                <i class='fa fa-long-arrow-up fa-fw'></i>Status Update</strong>"+
    "            </span>"+
    "            <span class='small float-right text-muted'>11:21 AM</span>"+
    "            <div class='dropdown-message small'>This is an automated server response message. All systems are online.</div>"+
    "          </a>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item small' href='#'>View all alerts</a>"+
    "        </div>"+
    "      </li>"+
    "      <li class='nav-item'>"+
    "        <form class='form-inline my-2 my-lg-0 mr-lg-2'>"+
    "          <div class='input-group'>"+
    "            <input class='form-control' type='text' placeholder='Buscar'>"+
    "            <span class='input-group-append'>"+
    "              <button class='btn btn-primary' type='button'>"+
    "                <i class='fa fa-search'></i>"+
    "              </button>"+
    "            </span>"+
    "          </div>"+
    "        </form>"+
    "      </li>"+
    "      <li class='nav-item'>"+
    "        <a class='nav-link' data-toggle='modal' data-target='#exampleModal'>"+
    "          <i class='fa fa-fw fa-sign-out'></i>Logout</a>"+
    "      </li>"+
    "    </ul>"+
    "  </div>"+
    "</nav>"   );
  this.HtmlMainContentAsistente = $(
    "<nav class='navbar navbar-expand-lg navbar-dark bg-dark fixed-top' id='mainNav'>"+
    "<a class='navbar-brand' href='index.html'>Usuario Asistente</a>"+
    "<button class='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>"+
    "  <span class='navbar-toggler-icon'></span>"+
    "</button>"+
    "<div class='collapse navbar-collapse' id='navbarResponsive'> "+
    "  <ul class='navbar-nav navbar-sidenav' id='exampleAccordion'>"+
    "    <li class='nav-item' data-toggle='tooltip' data-placement='right' title='Dashboard'>"+
    "      <a class='nav-link' href='index.html'>"+
    "        <i class='fa fa-fw fa-dashboard'></i>"+
    "        <span class='nav-link-text'>Principal</span>"+
    "      </a>"+
    "    </li>"+
    "    <li class='nav-item' data-toggle='tooltip' data-placement='right' title='Charts'>"+
    "      <a class='nav-link' href='#'>"+
    "        <i class='fa fa-fw fa-area-chart'></i>"+
    "        <span class='nav-link-text' id='linkGraficos' >Gráficos</span>"+
    "      </a>"+
    "    </li>"+
    "    <li class='nav-item' data-toggle='tooltip' data-placement='right' title='TablesId'>"+
    "      <a class='nav-link' href='#'>"+
    "        <i class='fa fa-fw fa-table'></i>"+
    "        <span id='linkPorId' class='nav-link-text'>Consulta por ID</span>"+
    "      </a>"+
    "    </li>"+
    "    <li class='nav-item' data-toggle='tooltip' data-placement='right' title='TablesDepto'>"+
    "      <a class='nav-link' href='#'>"+
    "        <i class='fa fa-fw fa-table'></i>"+
    "        <span id='lnkDepto' class='nav-link-text'>Consulta por Depto.</span>"+
    "      </a>"+
    "    </li>"+
    "      <li class='nav-item' data-toggle='tooltip' data-placement='right' title='Link'>"+
    "        <a class='nav-link' href='#'>"+
    "          <i class='fa fa-fw fa-link'></i>"+
    "          <span class='nav-link-text'>Acerca de...</span>"+
    "        </a>"+
    "      </li>"+
    "    </ul>"+
    "    <ul class='navbar-nav sidenav-toggler'>"+
    "      <li class='nav-item'>"+
    "        <a class='nav-link text-center' id='sidenavToggler'>"+
    "          <i class='fa fa-fw fa-angle-left'></i>"+
    "        </a>"+
    "      </li>"+
    "    </ul>"+
    "    <ul class='navbar-nav ml-auto'>"+
    "      <li class='nav-item dropdown'>"+
    "        <a class='nav-link dropdown-toggle mr-lg-2' id='messagesDropdown' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"+
    "          <i class='fa fa-fw fa-envelope'></i>"+
    "          <span class='d-lg-none'>Messages"+
    "            <span class='badge badge-pill badge-primary'>12 New</span>"+
    "          </span>"+
    "          <span class='indicator text-primary d-none d-lg-block'>"+
    "            <i class='fa fa-fw fa-circle'></i>"+
    "          </span>"+
    "        </a>"+
    "        <div class='dropdown-menu' aria-labelledby='messagesDropdown'>"+
    "          <h6 class='dropdown-header'>New Messages:</h6>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item' href='#'>"+
    "            <strong>David Miller</strong>"+
    "            <span class='small float-right text-muted'>11:21 AM</span>"+
    "            <div class='dropdown-message small'>Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>"+
    "          </a>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item' href='#'>"+
    "            <strong>Jane Smith</strong>"+
    "            <span class='small float-right text-muted'>11:21 AM</span>"+
    "            <div class='dropdown-message small'>I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>"+
    "          </a>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item' href='#'>"+
    "            <strong>John Doe</strong>"+
    "            <span class='small float-right text-muted'>11:21 AM</span>"+
    "            <div class='dropdown-message small'>I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>"+
    "          </a>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item small' href='#'>View all messages</a>"+
    "        </div>"+
    "      </li>"+
    "      <li class='nav-item dropdown'>"+
    "        <a class='nav-link dropdown-toggle mr-lg-2' id='alertsDropdown' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"+
    "          <i class='fa fa-fw fa-bell'></i>"+
    "          <span class='d-lg-none'>Alerts"+
    "            <span class='badge badge-pill badge-warning'>6 New</span>"+
    "          </span>"+
    "          <span class='indicator text-warning d-none d-lg-block'>"+
    "            <i class='fa fa-fw fa-circle'></i>"+
    "          </span>"+
    "        </a>"+
    "        <div class='dropdown-menu' aria-labelledby='alertsDropdown'>"+
    "          <h6 class='dropdown-header'>New Alerts:</h6>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item' href='#'>"+
    "            <span class='text-success'>"+
    "                <strong>"+
    "                <i class='fa fa-long-arrow-up fa-fw'></i>Status Update</strong>"+
    "            </span>"+
    "            <span class='small float-right text-muted'>11:21 AM</span>"+
    "            <div class='dropdown-message small'>This is an automated server response message. All systems are online.</div>"+
    "         </a>"+
    "         <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item' href='#'>"+
    "            <span class='text-danger'>"+
    "              <strong>"+
    "                <i class='fa fa-long-arrow-down fa-fw'></i>Status Update</strong>"+
    "            </span>"+
    "            <span class='small float-right text-muted'>11:21 AM</span>"+
    "            <div class='dropdown-message small'>This is an automated server response message. All systems are online.</div>"+
    "          </a>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item' href='#'>"+
    "            <span class='text-success'>"+
    "              <strong>"+
    "                <i class='fa fa-long-arrow-up fa-fw'></i>Status Update</strong>"+
    "            </span>"+
    "            <span class='small float-right text-muted'>11:21 AM</span>"+
    "            <div class='dropdown-message small'>This is an automated server response message. All systems are online.</div>"+
    "          </a>"+
    "          <div class='dropdown-divider'></div>"+
    "          <a class='dropdown-item small' href='#'>View all alerts</a>"+
    "        </div>"+
    "      </li>"+
    "      <li class='nav-item'>"+
    "        <form class='form-inline my-2 my-lg-0 mr-lg-2'>"+
    "          <div class='input-group'>"+
    "            <input class='form-control' type='text' placeholder='Buscar'>"+
    "            <span class='input-group-append'>"+
    "              <button class='btn btn-primary' type='button'>"+
    "                <i class='fa fa-search'></i>"+
    "              </button>"+
    "            </span>"+
    "          </div>"+
    "        </form>"+
    "      </li>"+
    "      <li class='nav-item'>"+
    "        <a class='nav-link' data-toggle='modal' data-target='#exampleModal'>"+
    "          <i class='fa fa-fw fa-sign-out'></i>Logout</a>"+
    "      </li>"+
    "    </ul>"+
    "  </div>"+
    " </nav>" );
  this.htmlWraper = $(
    "<div class='content-wrapper'>" +
    "  <div class='container-fluid'>" +
    "    <ol class='breadcrumb'> " +
    "      <li class='breadcrumb-item'>" +
    "        <a href='#'>Panel</a>" +
    "      </li>" +
    "      <li class='breadcrumb-item active'>Principal</li>" +
    "    </ol>" +
    " <div class='row' id='mainVisor'>  </div>" +
    " </div>" +
    "  <footer class='sticky-footer'>" +
    "    <div class='container'>" +
    "      <div class='text-center'>" +
    "        <small>Copyright © 2018 Valle Fresco</small>" +
    "      </div>" +
    "    </div>" +
    "  </footer>" +
    "<a class='scroll-to-top rounded' href='#page-top'>" +
    "    <i class='fa fa-angle-up'></i>" +
    "  </a>  " +
    "  <div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>" +
    "    <div class='modal-dialog' role='document'>" +
    "      <div class='modal-content'>" +
    "        <div class='modal-header'>" +
    "          <h5 class='modal-title' id='exampleModalLabel'>Cerrar Sesión</h5>" +
    "          <button class='close' type='button' data-dismiss='modal' aria-label='Close'>" +
    "            <span aria-hidden='true'>×</span>" +
    "          </button>" +
    "        </div>" +
    "        <div class='modal-body'>Oprima el botón  'Salir' si desea cerrar sesión.</div>" +
    "        <div class='modal-footer'>" +
    "          <button class='btn btn-secondary' type='button' data-dismiss='modal'>Cancelar</button>" +
    "          <a class='btn btn-primary' href='index.html'>Salir</a>" +
    "        </div>" +
    "      </div>" +
    "    </div>" +
    "  </div>" +
    " </div>  ");
  this.htmlForm = $(
    "<form>"+
    "<div class='form-group'> "+
    "  <label for='txtId'>Identificación:</label> "+
    "  <input type='text' class='form-control' id='txtId' > "+
    " </div> "+
    "<div class='form-group'> "+
    "  <label for='txtNombre'>Nombre:</label> "+
    "  <input type='text' class='form-control' id='txtNombre' > "+
    " </div> "+
    "<div class='form-group'> "+
    "  <label for='txtApellido1'>Primer Apellido</label> "+
    "  <input type='text' class='form-control' id='txtApellido1'> "+
    " </div> "+
    "<div class='form-group'> "+
    "  <label for='txtApellido2'>Segundo Apellido</label> "+
    "  <input type='text' class='form-control' id='txtApellido2'> "+
    " </div> "+
    "<div class='form-group'> "+
    "  <label for='txtEmail'>Correo Electrónico</label> "+
    "  <input type='email' class='form-control' id='txtEmail'> "+
    " </div> "+
    "  <div class='form-group'> "+
    "  <label for='selDepto'>Departamento</label> "+
    "  <select class='form-control' id='selDepto'> "+
    "    <option value='0' >Selecciones una opción</option> "+
    "    <option value='Recursos Humanos'>Recursos Humanos</option> "+
    "    <option value='Finanzas'>Finanzas</option> "+
    "    <option value='Tecnología de la infroamción'>Tecnología de la infroamción</option> "+
    "    <option value='Proveeduría'>Proveeduría</option> "+
    "    <option value='Dirección'>Dirección</option> "+
    "  </select> "+
    "  </div> "+
    " <button type='button' id='btnAgregarRegistro' class='btn btn-success'>Guardar Registro</button> "+
    "</form>");
  this.htmlFormId = $(
    "<div class='row'>"+
    "<form class='form-inline'>"+
    "  <div class='form-group mx-sm-3 mb-2'>"+
    "    <label for='txtId' class='sr-only'>ID</label>"+
    "    <input type='text' class='form-control' id='txtId' placeholder='Digite la identificación'>"+
    "  </div>"+
    "  <button type='button' id='btnBuscarPorId' class='btn btn-primary mb-2'>Buscar</button>"+
    "</form>" +
    "  </div>"+
    "<hr>"+
    "<div id='contTabla' class='row'></div>"  );
  this.htmlFormDepto = $(
      "<div class='row'>"+
      "<form class='form-inline'>"+
      "  <div class='form-group'> "+
      "  <select class='form-control' id='selDepto'> "+
      "    <option value='0' >Seleccione un departamento</option> "+
      "    <option value='Recursos Humanos'>Recursos Humanos</option> "+
      "    <option value='Finanzas'>Finanzas</option> "+
      "    <option value='Tecnología de la infroamción'>Tecnología de la infroamción</option> "+
      "    <option value='Proveeduría'>Proveeduría</option> "+
      "    <option value='Dirección'>Dirección</option> "+
      "  </select> "+
      "  </div> "+
      "  <button type='button' id='btnBuscarPorDepto' class='btn btn-primary mb-2'>Buscar</button>"+
      "</form>" +
      "  </div>"+
      "<hr>"+
      "<div id='contTabla' class='row'></div>"  );
this.htmlGraficos = $(
  "  <div class='container-fluid'>"+
  "  <!-- Area Chart Example--> "+
  "  <div class='card mb-3'> "+
  "    <div class='card-header'>"+
  "      <i class='fa fa-area-chart'></i> Area Chart Example</div>"+
  "    <div class='card-body'>"+
  "      <canvas id='myAreaChart' width='100%' height='30'></canvas>"+
  "    </div>"+
  "    <div class='card-footer small text-muted'>Updated yesterday at 11:59 PM</div>"+
  "  </div>"+
  "  <div class=row>"+
  "    <div class=col-lg-8>"+
  "      <!-- Example Bar Chart Card-->"+
  "      <div class=card mb-3>"+
  "        <div class=card-header>"+
  "          <i class=fa fa-bar-chart></i> Bar Chart Example</div>"+
  "        <div class=card-body>"+
  "          <canvas id=myBarChart width=100 height=50></canvas>"+
  "        </div>"+
  "        <div class=card-footer small text-muted>Updated yesterday at 11:59 PM</div>"+
  "      </div>"+
  "    </div>"+
  "    <div class=col-lg-4>"+
  "      <!-- Example Pie Chart Card-->"+
  "      <div class=card mb-3>"+
  "        <div class=card-header>"+
  "          <i class=fa fa-pie-chart></i> Pie Chart Example</div>"+
  "        <div class=card-body>"+
  "          <canvas id=myPieChart width='100%' height='100'></canvas>"+
  "        </div>"+
  "        <div class='card-footer small text-muted'>Updated yesterday at 11:59 PM</div>"+
  "      </div>"+
  "    </div>"+
  "  </div>"+
   "  </div>"
  );


  myVista = this;
}
this.htmlImage = $("<img src='https://images.vexels.com/media/users/3/146880/isolated/preview/072919975ee8f4ca250a21e15e02d58e-ruedas-dentadas-by-vexels.png'>");
  this.htmlCards = $(
  "  <div class='row'>
  "<div class='col-xl-3 col-sm-6 mb-3'>
 <div class='card text-white bg-primary o-hidden h-100'>
   <div class='card-body'>
     <div class='card-body-icon'>
       <i class='fa fa-fw fa-comments'></i>
     </div>
     <div class='mr-5'>26 New Messages!</div>
   </div>
   <a class='card-footer text-white clearfix small z-1' href='#'>
     <span class='float-left'>View Details</span>
     <span class='float-right'>
       <i class='fa fa-angle-right'></i>
     </span>
   </a>
 </div>
</div>
<div class='col-xl-3 col-sm-6 mb-3'>
 <div class='card text-white bg-warning o-hidden h-100'>
   <div class='card-body'>
     <div class='card-body-icon'>
       <i class='fa fa-fw fa-list'></i>
     </div>
     <div class='mr-5'>11 New Tasks!</div>
   </div>
   <a class='card-footer text-white clearfix small z-1' href='#'>
     <span class='float-left'>View Details</span>
     <span class='float-right'>
       <i class='fa fa-angle-right'></i>
     </span>
   </a>
 </div>
</div>
<div class='col-xl-3 col-sm-6 mb-3'>
 <div class='card text-white bg-success o-hidden h-100'>
   <div class='card-body'>
     <div class='card-body-icon'>
       <i class='fa fa-fw fa-shopping-cart'></i>
     </div>
     <div class='mr-5'>123 New Orders!</div>
   </div>
   <a class='card-footer text-white clearfix small z-1' href='#'>
     <span class='float-left'>View Details</span>
     <span class='float-right'>
       <i class='fa fa-angle-right'></i>
     </span>
   </a>
 </div>
</div>
<div class='col-xl-3 col-sm-6 mb-3'>
 <div class='card text-white bg-danger o-hidden h-100'>
   <div class='card-body'>
     <div class='card-body-icon'>
       <i class='fa fa-fw fa-support'></i>
     </div>
     <div class='mr-5'>13 New Tickets!</div>
   </div>
   <a class='card-footer text-white clearfix small z-1' href='#'>
     <span class='float-left'>View Details</span>
     <span class='float-right'>
       <i class='fa fa-angle-right'></i>
     </span>
   </a>
 </div>
</div>
</div>
  );

Vistas.prototype.renderMainAdmin = function () {
  $("#page-top").html(this.HtmlMainContentAdmin);
  $("#page-top").append(this.htmlWraper);
};

Vistas.prototype.renderMainAsist = function () {
  $("#page-top").html(this.HtmlMainContentAsistente);
  $("#page-top").append(this.htmlWraper);
};


Vistas.prototype.formAddRecord = function () {
  $("#mainVisor").html(myVista.htmlForm);
};

Vistas.prototype.formId = function () {
  $("#mainVisor").css("display", "block");
  $("#mainVisor").html(myVista.htmlFormId);
};

Vistas.prototype.showRecordId = function (obj) {
  var fila ="",
  tabla = $("<table> <tr>" +
  "<th>Identificación</th>" +
  "<th>Nombre</th>" +
  "<th>Primer Apellido</th>" +
  "<th>Segundo Apellido</th>" +
  "<th>Correo Elctrónico</th>" +
  "<th>Departamento</th>" +
  "</tr></table>");

  $(tabla).addClass("table table-striped");
  $(tabla).attr("id","tablaRegistros");

  fila = $("<tr>"+
   "<td>" + obj.id + "</td>" +
   "<td>" + obj.nombre + "</td>" +
   "<td>" + obj.apellido1 + "</td>" +
   "<td>" + obj.apellido2 + "</td>" +
   "<td>" + obj.email + "</td>" +
   "<td>" + obj.depto + "</td>" +
   "</tr>" );
   $(tabla).append(fila);
    $("#contTabla").html(tabla);
};

Vistas.prototype.ShowformDepto = function () {
  $("#mainVisor").css("display", "block");
  $("#mainVisor").html(myVista.htmlFormDepto);
  $("#btnBuscarPorDepto").css({"margin-left": "17px","margin-top": "7px"});
};

Vistas.prototype.tablaDepto = function (array) {

  var  limite = array.length, fila ="",

  tabla = $("<table> <tr>" +
  "<th>Identificación</th>" +
  "<th>Nombre</th>" +
  "<th>Primer Apellido</th>" +
  "<th>Segundo Apellido</th>" +
  "<th>Correo Elctrónico</th>" +
  "<th>Departamento</th>" +
  "</tr></table>");

  $(tabla).addClass("table table-striped");
  $(tabla).attr("id","tablaRegistros");

  for (var i = 0; i < limite; i++) {
    //Creación de las filas de forma dinánmica
    fila = $("<tr>"+
      "<td>" + array[i].id + "</td>" +
      "<td>" + array[i].nombre + "</td>" +
      "<td>" + array[i].apellido1 + "</td>" +
      "<td>" + array[i].apellido2 + "</td>" +
      "<td>" + array[i].email + "</td>" +
      "<td>" + array[i].depto + "</td>" +
      "</tr>" );

     // Una vez creada la fila se agrega en la tabla
     $(tabla).append(fila);
   };

  //Imprime en el HTML cada párrafo que contiene cada uno de los registros
  $("#contTabla").html(tabla);
};

Vistas.prototype.showGraphics = function () {
    $("#mainVisor").html(myVista.htmlGraficos);
    graficoLineal();
    graficoBarras();
    graficoCircular();
};

Vistas.prototype.notAvailable = function () {
    $("#mainVisor").html("<h2> Vista no disponible</h2>");
      $("#mainVisor").append(htmlImage);
};

Vistas.prototype.cards = function () {

};
