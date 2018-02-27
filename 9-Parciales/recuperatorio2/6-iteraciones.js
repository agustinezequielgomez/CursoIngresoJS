//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var contadordias = 0;
	bandera = true;
	var max, min;
	while(contadordias < 7){
	importe = prompt("Ingresa un importe");
	importe = parseInt(importe);
	contadordias++;
	while(importe < 0 || isNaN(importe)){
		importe = prompt("El imorte debe ser mayor a 0");
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


}
alert("El importe minimo es " + min);
alert("El importe maximo es " + max);

}