function Mostrar()
{

	var contador=1;
	//declarar contadores y variables 
	
	var respuesta = true;
	var sumneg;
	var sumpos;
	var num; 
	var cantpos;
	var cantneg;
	var cantceros;
	var cantpares;
	var promneg;
	var prompos;
	var dif;

	while(respuesta == true)
	{
		num = prompt("Ingresa un numero");
		num = parseInt(num);
		respuesta = confirm("¿Queres seguir ingresando numeros?");

		if(num>0){
			sumpos += num;
			console.log ( sumpos )
			cantpos = contador ++;
			console.log ( cantpos )
		}else if(num<0){
			sumneg -= num;
			cantneg = contador ++;
		


		}
	}
}//FIN DE LA FUNCIÓN