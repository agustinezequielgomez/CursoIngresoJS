function Mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");
repeticiones = parseInt(repeticiones);

while(isNaN(repeticiones)){
    repeticiones = prompt("Ingresa un numero que sea valido");
}

for(var contador = 0; contador != repeticiones; contador++){
    alert("Hola UTN FRA" + contador);

}



}//FIN DE LA FUNCIÓN