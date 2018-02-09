//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

	var largo;
	var ancho;
	var perimetro;
	ancho = document.getElementById("ancho").value;
	largo = document.getElementById("largo").value;
	ancho = parseFloat(ancho);
	largo = parseFloat(largo);
	perimetro = (ancho * 2 + largo * 2) * 6;
	perimetro = parseFloat(perimetro);
	alert("Necesitas " + perimetro + " metros de alambre para colocar 6 hilos de alambrado a tu terreno");
	
}

