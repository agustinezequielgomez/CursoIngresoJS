function Mostrar()
{
var num;
num = prompt("Ingresa un numero");
num = parseInt(num);

while(isNaN(num)){
    num = prompt("Ingresa un numero valido");
}

for(i = num; i > 0; i--){
    if(num % i == 0){
        console.log( i )
    }
    

}


}//FIN DE LA FUNCIÓN