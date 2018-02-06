
function Mostrar()
{
    var base;
    var perimetro;
    base = document.getElementById("laBase").value;
    base = parseInt(base);
    perimetro = base * 4;
    perimetro = parseInt(perimetro);
    alert("La superficie del caudrado es de " + perimetro);
}
