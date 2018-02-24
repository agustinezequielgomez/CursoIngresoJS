function Mostrar()
{
    var num;
for(;num != 9;){
 num = prompt("Ingresa un numero");
 num = parseInt(num);

    while(isNaN(num)){
        num = prompt("Ingresa un numero valido");
        num = parseInt(num);
    }
}



}//FIN DE LA FUNCIÓN