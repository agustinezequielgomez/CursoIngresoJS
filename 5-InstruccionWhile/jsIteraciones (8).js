function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta=true;

	while(respuesta == true){
		contador++;
		numero = prompt("Ingresa un numero");
		while(isNaN(numero)){
			numero = prompt("Ingresa un numero valido");
		}
		numero = parseInt(numero);
		if(numero < 0){
			negativo = (negativo *= numero);
		}else{
			positivo = (positivo += numero);
		}
		respuesta = confirm ("¿Queres seguir ingresando numeros?");


	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN