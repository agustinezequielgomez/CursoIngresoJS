//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var precio;
	var iva;
	var preciofinal;
	precio = prompt("Ingresa el precio del producto");
	precio = parseFloat(precio);
	iva = precio * 21 / 100;
	iva = parseFloat(iva);
	preciofinal = precio + iva;
	preciofinal = parseFloat(preciofinal);
	document.getElementById("importe").value = preciofinal;
	
}

