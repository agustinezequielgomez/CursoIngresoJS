function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño){

    case "Febrero":
    alert("Este mes tiene 28 dias");
    break;

default:
alert("Este mes tiene 30 dias o mas"); 
}
}//FIN DE LA FUNCIÓN