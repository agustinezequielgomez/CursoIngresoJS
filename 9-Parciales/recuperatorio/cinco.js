function Mostrar()
{
    var mes;
    mes = prompt("Ingresa un mes");
    switch (mes){

        case "Enero":
        case "enero":
        alert("Comienza el año");
        break;

        case "Diciembre":
        case "diciembre":
        alert("Se vienen las fiestas");
        break;
        
default:
alert("No es Enero ni Diciembre");
    }
}
