function Mostrar()
{
var rep;
var contadorPar = 0;
contadorPar = parseInt(contadorPar);
rep = prompt("Ingresa un numero");
rep = parseInt(rep);
while(isNaN(rep)){
    rep = prompt("Ingresa un numero valido");
}

for(var i = 0; rep > i; i++){
    if(rep%2 == 0){
        console.log ( i )
    }

}



}//FIN DE LA FUNCIÓN