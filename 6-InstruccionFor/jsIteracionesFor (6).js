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

for(var i = 1; i <= rep; i++){
    if(i%2 == 0){
        console.log ( i )
        contadorPar = contadorPar + 1;
        alert("La cantidad de numeros pares es de " + contadorPar);
    }   
    
}


}//FIN DE LA FUNCIÓN