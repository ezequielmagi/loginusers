// creacion de variables:
var mensaje = Array();
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var fechanac = document.getElementById("fechanac");

// validacion de los datos ingresados:

document.getElementById("largoNombre").addEventListener("click", function () {
  validacion = Validar();
  if (validacion === -1) {
    mostrarLargo();
  } else {
    control_de_error(validacion);
  }
});
document.getElementById("enviar").addEventListener("click", function () {
  validacion = Validar();
  if (validacion === -1) {
    enviar();
  } else {
    control_de_error(validacion);
  }
});

function Validar() {
  var validacion = "";
  if (nombre.value == "") return 0;
  if (apellido.value == "") return 1;
  if (fechanac.value == "") return 2;
  return -1;
}

function control_de_error(errnro) {
  mensaje.push("El NOMBRE no puede estar vacio");
  mensaje.push("El APELLIDO no puede estar vacio");
  mensaje.push("La FECHA DE NACIMIENTO no puede estar vacia");

  switch (errnro) {
    case 0:
      nombre.focus();
      break;
    case 1:
      apellido.focus();
      break;
    case 2:
      fechanac.focus();
      break;
  }
  alert(mensaje[errnro]);
}

function enviar() {
  document.write(
    `Usted se ha logueado correctamente como ${nombre.value} ${apellido.value}`
  );
}

function mostrarLargo() {
  document.write(
    `Su nombre ${nombre.value} contiene ${nombre.value.length} letras`
  );
}
