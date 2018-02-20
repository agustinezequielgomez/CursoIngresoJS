function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta = true;
	//Creo un array
	var numero = [];
	var numeromax;
	var numeromin;
	
	//Mientras la respuesta sea verdadera se va a ejecutar el While
	while(respuesta == true)
	{
		//Los numeros ingresados por prompt son guardados por separado en el array
		numero.push(prompt("Ingresa un numero"));
		console.log ( numero )
		respuesta = confirm("¿Queres seguir ingresando numeros?"); 
	}
		
		//Entre los numeros del array, el programa selecciona el minimo y maximo
		numeromax = Math.max.apply(Math, numero);
		numeromin = Math.min.apply(Math, numero);
		document.getElementById("maximo").value = numeromax;
		document.getElementById("minimo").value = numeromin;


}//FIN DE LA FUNCIÓN