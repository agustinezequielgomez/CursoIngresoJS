function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = true;
	var numero;

while(respuesta == true){
	contador++;
	numero = prompt("Ingresa un numero");
	numero = parseInt(numero);
	while (isNaN(numero)){
		numero = prompt("Ingresa un numero valido");
		numero = parseInt(numero);
	}
	acumulador += numero;
	respuesta = confirm("¿Queres seguir ingresando numeros?");
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN