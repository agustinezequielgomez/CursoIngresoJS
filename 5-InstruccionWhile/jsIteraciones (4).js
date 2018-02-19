function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
while (numero > 9 || numero < 0){

	numero = prompt("Ingrese un numero entre el 0 y el 10");

}
document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN