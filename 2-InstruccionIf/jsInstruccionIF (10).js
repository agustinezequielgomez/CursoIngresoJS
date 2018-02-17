function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero = (Math.floor(Math.random() * 11));
	if (numero == 9 || numero == 10){
		alert("Excelente");
		}else if(numero < 8 && numero > 4){
			alert("Aprobo");
			}else{
				alert("Vamos, la proxima se puede");
			}

}//FIN DE LA FUNCIÓN