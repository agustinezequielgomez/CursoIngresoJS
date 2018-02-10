//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	ancho = document.getElementById("ancho").value;
	largo = document.getElementById("largo").value;
	ancho = parseFloat(ancho);
	largo = parseFloat(largo);
	perimetro = (ancho * 2 + largo * 2) * 6;
	perimetro = parseFloat(perimetro);
	alert ("Necesitas " + perimetro + " metros para alambrar el terreno");
	
}

