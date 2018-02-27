//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sumaNotas = 0;
	var sexo;
	var promedio;
	promedio = parseInt(promedio);
	var min;
	min = parseInt(min);
	var varonesAprobados = 0;
	varonesAprobados = parseInt(varonesAprobados);
	var contadorProm = 0;
	contadorProm = parseInt(contadorProm);
	var contadorAprobados = 0;
	contadorAprobados = parseInt(contadorAprobados);
	var bandera = true;

	while(contadorProm < 7){
		nota = prompt("Ingresa una nota");
		nota = parseInt(nota);
		contadorProm = ++contadorProm;
		while(nota < 0 || nota > 10 || isNaN(nota)){
			nota = prompt("Ingresa una nota entre 0 y 10");
			nota = parseInt(nota);
		}
		
	sexo = prompt("Ingresa el sexo del alumno").toLowerCase();
	console.log ( sexo )
	while(sexo != "f" && sexo != "m"){
		sexo = prompt("Ingresa un sexo valido").toLowerCase();
	}

	if(nota > 0){
		sumaNotas = sumaNotas + nota;
		sumaNotas = parseInt(sumaNotas);
		promedio = sumaNotas / contadorProm;
	}

	if(bandera == true){
		bandera = false;
		min = nota;
	}else if(min > nota){
		min = nota;
	}

	if(nota >= 6 && sexo == "m"){
		++contadorAprobados;
		varonesAprobados =  contadorAprobados;
	}
}
alert("El promedio de notas fue de " + promedio);
alert("La nota mas baja fue " + min);
alert("La cantidad de varones aprobados fue de " + varonesAprobados);	
}

