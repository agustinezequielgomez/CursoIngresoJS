//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
	var numero2;
	var resultado;
	numero1 = prompt("Ingresa un numero");
	numero1 = parseInt(numero1);
	numero2 = prompt("Ingresa otro numero");
	numero2 = parseInt(numero2)

	if(numero1 == numero2){
		resultado = numero1 * numero2;
		resultado = parseInt(resultado);
			}else if(numero1 > numero2){
				resultado = numero1 - numero2;
				resultado = parseInt(resultado);
			}else{
				resultado = numero1 + numero2;
				resultado = parseInt(resultado);
			}
	document.write("El resultado de la operacion es " + resultado);
}

