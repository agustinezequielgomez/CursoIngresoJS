//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base;
	var perimetro;
	base = document.getElementById("lado").value;
	base = parseFloat(base);
	perimetro = base * 3;
	perimetro = parseFloat(perimetro);
	
	alert("El perimetro del triangulo es " + perimetro);
	
}

