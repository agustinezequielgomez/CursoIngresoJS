//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var lado;
	var perimetro;
	lado = document.getElementById("lado").value;
	lado = parseFloat(lado);
	perimetro = lado * 3;
	perimetro = parseFloat(perimetro);
	alert("El perimetro del triangulo es de  " + perimetro);
	
}

