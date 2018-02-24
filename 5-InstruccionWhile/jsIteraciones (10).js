function Mostrar()
{

	var contadorpos = 0;
	var contadorneg = 0;
	var contadorpar = 0;
	//declarar contadores y variables 
	
	var respuesta = true;
	var sumneg = 0;
	var sumpos = 0;
	var num; 
	var cantpos = 0;
	var cantneg = 0;
	var cantceros = 0;
	var cantpares = 0;
	var promneg = 0;
	var prompos = 0;
	var dif = 0;


	while(respuesta == true)
	{
		
		while(isNaN(num)){
			num = prompt("Ingresa un numero que sea valido");
		}
	
		num = prompt("Ingresa un numero");
		num = parseInt(num);
		console.log ( num )
		var resto = num % 2;
		resto = parseInt(resto);
		respuesta = confirm("¿Queres seguir ingresando numeros?");
	
		if(num > 0){
			sumpos += num;
			sumpos = parseInt(sumpos);
			cantpos = ++contadorpos;
			contadorpos = parseInt(contadorpos);
		
				}else if(num < 0){
					sumneg += num;
					sumneg = parseInt(sumneg);
					cantneg = ++contadorneg;
					contadorneg = parseInt(contadorneg);
		
		}if(resto == 0){
			cantpares = ++contadorpar;
		}else{
		}
								
		if(sumpos > 0){
			prompos = sumpos / contadorpos;
			prompos = parseInt(prompos);
				}else{ 
				}
		
		if(sumneg < 0){
		promneg = sumneg / contadorneg;
		promneg = parseInt(promneg);
		}else{	
		}

		if(sumpos > 0 || sumneg < 0){
			dif = sumpos + sumneg;
			dif = parseInt(dif);
		}else{
		}

}
document.write ("La suma de los negativos es: " + sumneg);
document.write ("<br />La suma de los positivos es: " + sumpos);
document.write ("<br />La cantidad de numeros positivos ingresados es de: " + cantpos);
document.write ("<br />La cantidad de numeros negativos ingresados es de: " + cantneg); 
document.write ("<br />La cantidad de numeros pares ingresados es de: " + cantpares);
document.write ("<br />El promedio de numeros positivos es de " + prompos);
document.write ("<br />El promedio de numeros negativos es de: " + promneg);
document.write ("<br />La diferencia entre los numeros positivos y negativos ingresados es de: " + dif);	
}//FIN DE LA FUNCIÓN