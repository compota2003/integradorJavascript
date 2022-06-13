var entrada = 200;

function accion_resumen() {
  var cant = parseInt(document.getElementById("cantidad").value);
  var cat = parseFloat(document.getElementById("categoria").value);

  if (cant > 0) {
    let resultado = cant * entrada * cat;
    document.getElementById("totPagar").innerHTML = "Total a pagar: $ " + resultado;
  }
}

function reset_mikeForm() {
  document.getElementById("mikeForm").reset();
  document.getElementById("totPagar").innerHTML = "Total a pagar";
}
