function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero = (Math.floor(Math.random() * 11));
	if (numero >= 9){
		alert("Te sacaste un " + numero + ". Excelente");
		}else if (numero >= 7){
			alert("Te sacaste un " + numero + ". Muy bien");
			}else if (numero >= 4){
				alert("Te sacaste un " + numero + ". Bien");
				}else if (numero >= 2){
					alert("Te sacaste un " + numero + ". Mal");
					}else if (numero >= 0){
						alert("Te sacaste un " + numero + ". Pesimo");
					}

}//FIN DE LA FUNCIÓN