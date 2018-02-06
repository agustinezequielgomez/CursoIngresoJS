function Mostrar()
{
  var importe;
  var descuento;
  var importefinal;
  importe = prompt("Ingrese su importe");
  importe = parseInt(importe);
  descuento = parseInt(descuento);
  importefinal = parseInt(importefinal);
  descuento = importe * 0.25;
  importefinal = importe - descuento;
  document.getElementById("importeFinal").value = importefinal;
}
