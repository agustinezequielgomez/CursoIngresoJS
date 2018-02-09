//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var producto;
	var iva;
	var preciofinal;
	producto = prompt("Ingresa el precio de tu producto");
	producto = parseFloat(producto);
	iva = producto * 21 / 100;
	iva = parseFloat(iva);
	preciofinal = parseFloat(preciofinal);
	preciofinal = producto + iva;
	document.getElementById("importe").value = preciofinal;
	
}

