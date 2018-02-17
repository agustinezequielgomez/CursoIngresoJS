function Mostrar()
{
var num1;
var num2;
var resultado;
num1 = prompt("Ingresa un numero");
num2 = prompt("Ingresa otro numero");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
resultado = parseFloat(resultado);
    if (num1 == num2){
        (resultado = num1 * num2);
        }else if (num1 > num2){
            (resultado = num1 - num2);
            }else{
                (resultado = num1 + num2);            
            }
document.write(resultado);
}
