function Mostrar()
{
    var largo;
    var ancho;
    var perimetro;
    largo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    perimetro = (largo * 2 + ancho * 2) * 3;
    perimetro = parseInt(perimetro);
    alert ("Necesitas " + perimetro + " metros de alambrado");
}
