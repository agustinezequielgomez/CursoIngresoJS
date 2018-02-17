function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
if (edad > 17){
    alert ("Sos mayor de edad");
    }else if (edad < 18 && edad > 12){
        alert ("Sos adolescente");
        }else if (edad < 13){
            alert ("Sos un niño");
        }





}//FIN DE LA FUNCIÓN