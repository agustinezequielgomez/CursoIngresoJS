//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var contador = 0;
	var max;
	max = parseInt(max);
	var min;
	min = parseInt(min);
	var bandera = true;
	contador = parseInt(contador);
	while(contador < 7){
		importe = prompt("Ingresa el importe de las ventas")
		importe = parseInt(importe);
			while(isNaN(importe)|| importe < 0){
				importe = prompt("Ingresa un importe mayor a 0")
				importe = parseInt(importe);
			}

		if(bandera == true){
			bandera = false;
			max = importe;
			min = importe;
		}else if(importe > max){
			max = importe;
		}else if(importe < min){
			min = importe;
		}
	contador = ++contador;
	}
	alert("El importe maximo de la semana fue " + max);
	alert("El importe minimo de la semana fue " + min);
}

