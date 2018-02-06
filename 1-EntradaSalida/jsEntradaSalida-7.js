/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
    var num2;
    var suma;
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    suma = num1 + num2;
    alert ("La suma es " + suma);
}

function restar()
{
    var num1;
    var num2;
    var resta;
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    resta = num1 - num2;
    alert ("La resta es " + resta);
	
}

function multiplicar()
{ 
    var num1;
    var num2;
    var multiplicacion;
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    multiplicacion = num1 * num2;
    alert ("La multiplicacion es " + multiplicacion);
	
}

function dividir()
{
    var num1;
    var num2;
    var division;
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    division = num1 / num2;
    alert ("La division es " + division);
	
}

