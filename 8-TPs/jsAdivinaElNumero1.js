/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contador = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
numeroSecreto = Math.floor(Math.random() * 101);
  console.log ( numeroSecreto );
}

function verificar()
{
	var numeroUsuario;
  var diferencia;
  numeroUsuario = document.getElementById("numero").value;
  numeroUsuario = parseFloat(numeroUsuario);
  diferencia = parseFloat(diferencia);
	if (numeroSecreto == numeroUsuario){
    contador = contador + 1;
    alert("¡¡¡Usted es un ganador!!! Y lo logro en " + contador + " intentos");
    document.getElementById("intentos").value = contador;
    }else if(numeroUsuario < numeroSecreto){
      (diferencia = numeroSecreto - numeroUsuario);
      contador = contador + 1;
      alert("Te falta " + diferencia + " para llegar al numero secreto");
      document.getElementById("intentos").value = contador;
      }else if(numeroUsuario > numeroSecreto){
        contador = contador + 1;
        (diferencia = numeroUsuario - numeroSecreto);
        alert("Te pasaste " + diferencia + " de tu numero secreto");
        document.getElementById("intentos").value = contador;
      } 

    }
