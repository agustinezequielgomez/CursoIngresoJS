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
numeroSecreto = parseFloat(numeroSecreto);
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
  var confirmar;
  numeroUsuario = document.getElementById("numero").value;
  numeroUsuario = parseFloat(numeroUsuario);
	if (numeroSecreto == numeroUsuario && contador == 0){
    contador = contador + 1;
    numeroSecreto = numeroSecreto + 2;
    console.log ( numeroSecreto );
    alert("Te falta para llegar a tu numero secreto");
    document.getElementById("intentos").value = contador;
    }else if (numeroSecreto == numeroUsuario && contador >= 1){
      contador = contador + 1;
      alert("¡¡¡Usted es un ganador!!! Y solo en " + contador + " intentos");
      document.getElementById("intentos").value = contador;
        }else if(numeroUsuario < numeroSecreto){
        contador = contador + 1;
        alert("Te falta para llegar al numero secreto");
        document.getElementById("intentos").value = contador;
          }else if(numeroUsuario > numeroSecreto){
          contador = contador + 1;
          alert("Te pasaste de tu numero secreto");
          document.getElementById("intentos").value = contador;
      } 

      if (contador == 10){
        document.write("LLegaste al limite de intentos.")
      }else{ 
      }
}
