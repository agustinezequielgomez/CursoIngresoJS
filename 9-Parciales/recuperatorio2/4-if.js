//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1;
	var num2;
	num1 = prompt("Ingresa un numero");
	num1 = parseInt(num1);
	num2 = prompt("Ingresa otro numero");
	num2 = parseInt(num2);
	var resultado;

	if(num1 == num2){
		resultado = num1 * num2;
		resultado = parseInt(resultado);
	}else if(num1 > num2){
		resultado = num1 - num2;
		resultado = parseInt(resultado);
	}else{
		resultado = num1 + num2;
		resultado = parseInt(resultado)
	}
document.write("El resultado de la operacion es " + resultado);
}

