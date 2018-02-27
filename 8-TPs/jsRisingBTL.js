/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;
 var sexo;
 var estadoCivil;
 var sueldo;
 var legajo;
 var nacionalidad;
 var numeroIngresos = 0;
 numeroIngresos = parseInt(numeroIngresos);


 var sueldoMaxNac = 0;
 sueldoMaxNac = parseInt(sueldoMaxNac);
 var bandera = true;
 var bandera2 = true;
 var sueldoMaxFemArg;
 var sueldoPromF;
 sueldoPromF = parseInt(sueldoPromF);
 var sueldoPromFNe;
 sueldoPromFNe = parseInt(sueldoPromFNe);
 var contadorSuelF = 0;
 contadorSuelF = parseInt(contadorSuelF);
 var sumaSueldoF = 0;
 sumaSueldoF = parseInt(sumaSueldoF);
 var sueldoPromM;
 sueldoPromM = parseInt(sueldoPromM);
 var sueldoPromMNe;
 sueldoPromMNe = parseInt(sueldoPromMNe);
 var contadorSuelM = 0;
 contadorSuelM = parseInt(contadorSuelM);
 var sumaSueldoM = 0;
 sumaSueldoM = parseInt(sumaSueldoM);
 var sueldoPromAm;
 sueldoPromAm = parseInt(sueldoPromAm)
 var contadorSuelAm = 0;
 var sueldoPromAmNe;
 sueldoPromAmNe = parseInt(sueldoPromAmNe);
 contadorSuelAm = parseInt(contadorSuelAm);
 var sumaSueldoAm = 0;
 sumaSueldoAm = parseInt(sumaSueldoAm);
 var cantPersonasM = 0;
 cantPersonasM = parseInt(cantPersonasM);
 var contPersonasM = 0;
 contPersonasM = parseInt(contPersonasM);
 var edadFemSueldoMax;
 var sueldoMaxFem;
 sueldoMaxFem = parseInt(sueldoMaxFem);
 var bandera3 = true;
 var legajoArg;
 legajoArg = parseInt(legajoArg);
 var sueldoLegajo;
 sueldoLegajo = parseInt(sueldoLegajo);
 var bandera4 = true;
 var cantPersonasSueldoNetMProm;
 var contadorPersonasSueldoNet = 0;
contadorPersonasSueldoNet = parseInt(contadorPersonasSueldoNet);
 var cantPersonasSueldoBrutProm;
 var contadorPersonasSueldoBrut = 0;
 contadorPersonasSueldoBrut = parseInt(contadorPersonasSueldoBrut);
 



while(numeroIngresos < 7){

 edad = prompt("Ingresa tu edad (entre 18 y 90 años)");
 edad = parseInt(edad);
    while (edad < 18 || edad > 90 || isNaN(edad)){
     edad = prompt("Ingresa una edad valida");
     edad = parseInt(edad);
    }
    document.getElementById("Edad").value = edad;

sexo = prompt("Ingresa tu sexo (F o M)").toLowerCase();
    while(sexo != "f" && sexo != "m"){
        sexo = prompt("Ingresa un sexo valido").toLowerCase();
    }
    console.log ( sexo )
    if(sexo == "m"){
        document.getElementById("Sexo").value = "Masculino";
            }else if (sexo == "f"){
                document.getElementById("Sexo").value = "Femenino";
            }   
    

estadoCivil = prompt("Ingresa tu estado civil (1- Soltero; 2- Casado; 3- Divorciado; 4- Viudo)");
    while(estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4){
        estadoCivil = prompt("Ingresa un estado civil valido");
    }

    switch(estadoCivil){
        case "1":
        document.getElementById("EstadoCivil").value = "Soltero/a";
        break;
        case "2":
        document.getElementById("EstadoCivil").value = "Casado/a";
        break;
        case "3":
        document.getElementById("EstadoCivil").value = "Divorciado/a";
        break;
        case "4":
        document.getElementById("EstadoCivil").value = "Viudo/a";
        break;
    }
    

sueldo = prompt("Ingresa tu sueldo bruto (Debe ser mayor a $8000)");
    sueldo = parseInt(sueldo);
    contadorSuelAm = ++contadorSuelAm;
    sumaSueldoAm = sueldo + sumaSueldoAm;

    while(sueldo < 8000 || isNaN(sueldo)){
        sueldo = prompt("Ingresa un sueldo valido");
    }
    document.getElementById("Sueldo").value = sueldo;
    
    if(sueldo > 8000 && sexo == "f"){
        contadorSuelF = ++contadorSuelF;
        sumaSueldoF = sueldo + sumaSueldoF;
    }else if (sueldo > 8000 && sexo == "m"){
        contadorSuelM = ++contadorSuelM;
        sumaSueldoM = sueldo + sumaSueldoM;
    }

    

legajo = prompt("Ingresa tu numero de legajo");
    legajo = parseInt(legajo);
    while(legajo <= 1000 || legajo >= 10000 || isNaN(legajo)){
        legajo = prompt("Ingresa un numero de legajo valido");
        legajo = parseInt(legajo);
    }
    document.getElementById("Legajo").value = legajo;

nacionalidad = prompt("Ingresa tu nacionalidad ('A' para Argentinos; 'E' para Extranjeros; 'N' para Nacionalizados)").toLowerCase();
    while(nacionalidad !== "a" && nacionalidad !== "e" && nacionalidad !== "n"){
        nacionalidad = prompt("Ingresa una nacionalidad valida").toLowerCase();
        console.log ( nacionalidad )
    }
    
    if(nacionalidad == "a"){
        document.getElementById("Nacionalidad").value = "Argentino/a"
            }else if (nacionalidad == "e"){
                document.getElementById("Nacionalidad").value = "Extranjero/a"
                    }else if (nacionalidad == "n"){
                        document.getElementById("Nacionalidad").value = "Nacionalizado/a"
                    }

if(nacionalidad == "n" && bandera == true){
    bandera = false;
    sueldoMaxNac = sueldo;
    }else if(sueldo > sueldoMaxNac && nacionalidad == "n"){
        sueldoMaxNac = sueldo;
    }

if(nacionalidad == "a" && sexo == "f" && bandera2 == true){
    bandera = false;
    sueldoMaxFemArg = sueldo;
    }else if(sueldo > sueldoMaxFemArg && nacionalidad == "a" && sexo == "f"){
        sueldoMaxFemArg = sueldo;
    }

if(sumaSueldoAm >= 0){
    sueldoPromAm = sumaSueldoAm / contadorSuelAm;
    sueldoPromAmNe = sueldoPromAm * 0.75;
        }else{
        } 
        
if(sumaSueldoF > 0){
    sueldoPromF = sumaSueldoF / contadorSuelF;
    sueldoPromFNe = sueldoPromF * 0.75;
    }else{    
    } 

if(sumaSueldoM >= 0){
    sueldoPromM = sumaSueldoM / contadorSuelM;
    sueldoPromMNe = sueldoPromM * 0.75;
    }else{
    }

if(sueldo >= 12000 && sexo == "m"){
    cantPersonasM = ++contPersonasM
}

if(sexo == "f" && bandera3 == true){
    bandera3 = false;
    sueldoMaxFem = sueldo;
    edadFemSueldoMax = edad;
    }else if(sueldo > sueldoMaxFem && sexo == "f"){
        sueldoMaxFem = sueldo;
        edadFemSueldoMax = edad;
    }

if(nacionalidad == "a" && bandera4 == true){
    bandera4 = false;
    sueldoLegajo = sueldo;
    legajoArg = legajo;
    }else if(sueldo < sueldoLegajo && nacionalidad == "a"){
        sueldoLegajo = sueldo;
        legajoArg = legajo;
        console.log ( legajoArg )
    }

if(sueldo > sueldoPromAmNe){
    cantPersonasSueldoNetMProm = ++contadorPersonasSueldoNet;
}

if(sueldo > sueldoPromAm){
    cantPersonasSueldoBrutProm = ++contadorPersonasSueldoBrut;
}

numeroIngresos = ++numeroIngresos
}
document.write("El sueldo maximo de las personas nacionalizadas es de es de $" + sueldoMaxNac);
document.write("<br />El sueldo maximo de las personas de sexo femenino pertenecientes a Argentina es de $" + sueldoMaxFemArg);
document.write("<br />El sueldo bruto promedio de hombres y mujeres es de $" + sueldoPromAm);
document.write("<br />El sueldo bruto promedio de las personas de sexo femenino es de $" + sueldoPromF);
document.write("<br />El sueldo bruto promedio de las personas de sexo masculino es de $" + sueldoPromM);
document.write("<br />El sueldo neto promedio de hombres y mujeres es de $" + sueldoPromAmNe);
document.write("<br />El sueldo neto promedio de las personas de sexo femenino es de $" + sueldoPromFNe);
document.write("<br />El sueldo neto promedio de las personas de sexo masculino es de $" + sueldoPromMNe);
document.write("<br />La cantidad de personas de sexo masculino con sueldo mayor a $12.000 es de " + cantPersonasM);
document.write("<br />La edad de la persona de sexo femenino con mayor sueldo es de " + edadFemSueldoMax);
document.write("<br />El Nº de legajo de la persona argentina de menor sueldo es de " + legajoArg);
document.write("<br />La cantidad de personas con sueldo Neto mayor al sueldo promedio es de " + cantPersonasSueldoNetMProm);
document.write("<br />La cantidad de personas con sueldo Bruto mayor al sueldo promedio es de " + cantPersonasSueldoBrutProm);
}
