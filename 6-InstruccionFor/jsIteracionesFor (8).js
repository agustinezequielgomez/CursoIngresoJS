function Mostrar()
{
var num;
num = prompt("Ingresa un numero");
num = parseInt(num);
var contador = 0;

for(i = 1; i < num; i++){
    if(num%i == 0){
        contador++;
        }

    }
    if(contador > 1){
        alert("No es primo");
    }else{
        alert("Es primo");
    }



}//FIN DE LA FUNCIÓN