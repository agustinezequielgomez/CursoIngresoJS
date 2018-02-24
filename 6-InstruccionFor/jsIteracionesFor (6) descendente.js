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

for(var i = rep; i > 0; i--){
    if(i%2 == 0){
        console.log ( i )
        contadorPar += contadorPar;
    }

}
alert("La cantidad de numeros pares es de " + contadorPar)


}//FIN DE LA FUNCIÓN