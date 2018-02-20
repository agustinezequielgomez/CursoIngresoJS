function Mostrar()
{
	var min;
	var max;
	var primera = true;
	var num;
	var respuesta = true;
	var contador = 0;

	while(respuesta == true){
		num = prompt("Ingresa un numero");
		num = parseInt(num);
		respuesta = confirm("¿Queres seguir ingresando numeros?");

			while(isNaN(num)){
				num = prompt("Ingresa un numero valido");
				num = parseInt(num);

			}
		if(primera){
			primera = false;
			max = num;
			min = num;
		}else if(num>max){
			max = num;
		}else if(num<min){
			min = num;
		}		
	}
	
document.getElementById("maximo").value = max;
document.getElementById("minimo").value = min;

}//FIN DE LA FUNCIÓN