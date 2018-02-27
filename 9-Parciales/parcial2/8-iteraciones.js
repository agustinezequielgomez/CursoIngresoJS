//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
		var num;
		var respuesta = true;
		var bandera = true;
		var min;
		var max;
		var promedio;
		var suma = 0;
		var contadornumeros = 0;
		var contadorPares = 0;

		while(respuesta == true){
			++contadornumeros;
			num = prompt("Ingresa un numero positivo");
			num = parseInt(num);
			while(num < 0 || isNaN(num)){
				num = prompt("El numero tiene que ser positivo");
				num = parseInt(num);
			}
			if(num % 2 == 0){
				++contadorPares;
			}

			if(num > 0){
			suma += num;
			suma = parseInt(suma);
			promedio = suma / contadornumeros;
			promedio = parseInt(promedio);
			}

			if(bandera == true){
				bandera = false;
				max = num;
				min = num;
			}else if(num > max){
				max = num;
			}else if(num < min){
				min = num;
			}

respuesta = confirm("¿Queres seguir ingresando numeros?");
}
document.write("La cantidad de numeros pares es de " + contadorPares);
document.write("<br />El promedio de los numeros ingresados es de " + promedio);
document.write("<br />La suma de todos los numeros es de " + suma);
document.write("<br />El numero maximo es " + max + " y el minimo es " + min);
}

