/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    ancho = document.getElementById("Ancho").value;
    largo = document.getElementById("Largo").value;
    perimetro = (largo * 2 + ancho * 2) * 3;
    perimetro = parseFloat(perimetro);
    alert ("Necesitas " + perimetro + " metros para alambrar el terreno");
}
function Circulo () 
{
    var radio;
    var perimetro;
    radio = document.getElementById("Radio").value;
    radio = parseFloat(radio);
    perimetro = (radio * 2 * 3.14159265359) * 3;
    alert ("Se necesitan " + perimetro + " metros para alambrar el terreno");
}
function Materiales () 
{
    var largo;
    var ancho;
    var cemento;
    var cal;
    var materiales;
    var perimetro;
    ancho = document.getElementById("Ancho").value;
    largo = document.getElementById("Largo").value;
    perimetro = (largo * 2 + ancho * 2);
    perimetro = parseFloat(perimetro);
    cal = perimetro * 3;
    cal = parseFloat(cal);
    cemento = perimetro * 2;
    cemento = parseFloat(cemento);
    alert ("Para tu terreno de " + perimetro + " metros, vas a necesitar " + cal + " bolsas de cal y " + cemento + " bolsas de cemento");
}