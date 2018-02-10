/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var prod1;
    var prod2;
    var prod3;
    var suma;
    prod1 = document.getElementById("PrecioUno").value;
    prod2 = document.getElementById("PrecioDos").value;
    prod3 = document.getElementById("PrecioTres").value;
    prod1 = parseFloat(prod1);
    prod2 = parseFloat(prod2);
    prod3 = parseFloat(prod3);
    suma = parseFloat(suma);
    suma = prod1 + prod2 + prod3;
    suma = parseFloat(suma);
    alert ("El total de los precios es de $" + suma);
}
function Promedio () 
{
    var promedio;    
    var prod1;
    var prod2;
    var prod3;
    var suma;
    prod1 = document.getElementById("PrecioUno").value;
    prod2 = document.getElementById("PrecioDos").value;
    prod3 = document.getElementById("PrecioTres").value;
    prod1 = parseFloat(prod1);
    prod2 = parseFloat(prod2);
    prod3 = parseFloat(prod3);
    suma = parseFloat(suma);
    suma = prod1 + prod2 + prod3;
    suma = parseFloat(suma);
    promedio = suma / 3;
    promedio = parseFloat(promedio);
    alert ("El promedio de los productos de la compra es de $" + promedio);
}
function PrecioFinal () 
{
    
    var iva;
    var preciofinal;
    var prod1;
    var prod2;
    var prod3;
    var suma;
    prod1 = document.getElementById("PrecioUno").value;
    prod2 = document.getElementById("PrecioDos").value;
    prod3 = document.getElementById("PrecioTres").value;
    prod1 = parseFloat(prod1);
    prod2 = parseFloat(prod2);
    prod3 = parseFloat(prod3);
    suma = parseFloat(suma);
    suma = prod1 + prod2 + prod3;
    suma = parseFloat(suma);
    iva = (suma * 21 / 100);
    iva = parseFloat(iva);
    preciofinal = parseFloat(preciofinal);
    preciofinal = iva + suma;
    alert ("El precio final +Iva es de $" + preciofinal);
}