/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
    var calculo;
    importe = document.getElementById("importe").value;
    importe = parseInt(importe);
    calculo = parseInt(calculo);
    calculo = importe - (importe * 25 / 100);
    document.getElementById("resultado").value = calculo;

}
