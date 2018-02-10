/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var cel;
    var far;
    far = document.getElementById("Temperatura").value;
    far = parseFloat(far);
    cel = parseFloat(cel);
    cel = (far - 32) / 1.8;
    alert (far + "º fahrenheit son equivalentes a " + cel + "º centigrados");

}

function CentigradosFahrenheit () 
{
	var cel;
    var far;
    cel = document.getElementById("Temperatura").value;
    cel = parseFloat(cel);
    far = parseFloat(far);
    far = (cel * 1.8) + 32;
    alert (cel + "º centigrados son equivalentes a " + far + "º fahrenheit");
}
