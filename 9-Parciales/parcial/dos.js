function Mostrar()
{
    var importe;
    var iva;
    var importefinal;
    iva = parseInt(iva);
    importefinal= parseInt(importefinal);    
    importe = prompt("Ingresa tu importe");
    importe = parseInt(importe);
    iva = importe * 21 / 100;
    importefinal = importe + iva;
    document.getElementById("importeFinal").value = importefinal;  
}
