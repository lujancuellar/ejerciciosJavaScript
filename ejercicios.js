
function DiaDeSemana(dia) {
    //creas una variable para guardar el nombre del dia
    let nombreDelDia = null;
    switch (dia) {
        case "1":
            //y guardas el valor en cada case (repetilo en los demas"
            nombreDelDia = "Lunes";
            console.log("Lunes");
            break;
        case "2":
            nombreDelDia = "Martes";
            console.log("Martes");
            break;
        case "3":
            nombreDelDia = "Miercoles";
            console.log("Miercoles");
            break;
        case "4":
            nombreDelDia = "Jueves";
            console.log("Jueves");
            break;
        case "5":
            nombreDelDia = "Viernes";
            console.log("Viernes");
            break;
        case "6":
        case "7":
            nombreDelDia = "Fin de semana";
                console.log("Fin de semana");
            break;
         default:
            nombreDelDia = "Error";
                console.log("Error");
    }
    //asignas el valor de la variable en el innerHMTL
    document.getElementById('resultado').innerHTML = nombreDelDia;
}

// segundo ejercicio. Pide la edad y si es mayor de 18 puede conducir.

let miEdad = null;
 function puedoConducir (edad) {
     if (edad >= 18) {
         miEdad = "Puedes conducir"
         console.log("Puedes conducir");
     } else {
         miEdad = "No puedes conducir"
         console.log("No puedes conducir");
     }
     document.getElementById('laEdad').innerHTML = miEdad;
 }

 //tercer ejercicio. Pide la nota y muestra la calificacion
let laNota = null;
 function miNota (nota) {
     switch (nota) {
         case "0":
         case "1":    
         case "2":
            laNota ="Muy deficiente";
            console.log("Muy deficiente");
          break;
        case "3":
        case "4":
            laNota ="Insuficiente";
            console.log("Insuficiente");
        break;
        case "5":
            laNota ="Suficiente";
            console.log("Suficiente");
        break;
        case "6":
            laNota ="Bien";
            console.log("Bien");
        break;
        case "7":
        case "8":
            laNota ="Notable";
            console.log("Notable");
        break;
        case "9":
        case "10":
            laNota ="Sobresaliente ";
            console.log("Sobresaliente");
        break;
        default:
            laNota ="No es una nota valida";
            console.log("No es una nota valida");
     }
     document.getElementById('Resultado_nota').innerHTML = laNota;
 }

