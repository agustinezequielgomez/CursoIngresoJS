function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño){
    
    case "Febrero":
    alert("El mes tiene 28 dias");
    break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    alert("El mes tiene 30 dias");
    break;

default: 
alert("El mes tiene 31 dias");


}	



}//FIN DE LA FUNCIÓN