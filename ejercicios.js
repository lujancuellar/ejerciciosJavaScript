
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

 //Crea una función que reciba dos valores y muestre cual es el mayor.

 function cualEsMayor (valor1, valor2) {
     if (valor1 > valor2) {
         console.log(valor1 + "es mayor.");
     } else if (valor1 < valor2) {
         console.log(valor2 + "es mayor.");
     } else {
         console.log("Son iguales");
     }
 }


 //Crea una función que reciba dos cadenas de texto y retorne la concatenación de las mismas. Preguntar si esta funcion funciona para frases o solo para palabras
 //fallido. Trate de poner dos input pero no salio bien.
let con1 = null;
let con2 = null;
 function concatenacion (texto1, texto2) {
     return texto1 + texto2;
     document.getElementById("texto_contatenado1").innerHTML = con1;
     document.getElementById("texto_contatenado2").innerHTML = con2;
 }
 //fallido. Trate de poner dos input pero no salio bien.

 //Crea una funcion que reciba monto de producto y medio de pago. Preguntar como se ponen dos input relacionados a la misma funcion.

 function descuento(monto, medioDePago){
    if(monto <200){
        return monto;
    }else{
        if(monto>=200 && monto<=400){
            switch(medioDePago){
                case 'E':
                    monto = monto * 0.7;
                    break;
                case 'D':
                    monto = monto * 0.8;
                    break;
                case 'C':
                    monto = monto *0.9;
                    break;
                default:
                    console.log("Error");
            }

            return monto;
        }else{
            monto = monto * 0.6;
            return monto;
        }
    }
}

//Dibuje un arbol con asteriscos.

function dibujarArbol (altura) {
  console.log(altura)
  let Arbol = "";
  Arbol += "<p>";
  for(let i=0; i<altura; i++) {
      for(let j=0; j<=i; j++) {
         Arbol +="*";
              }
    Arbol += "</p>";
  }


  document.getElementById('Arbol').innerHTML = Arbol;
}

//Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma: (fallido)
function dibujarNumero (num) {
    console.log(num)
    let numero = "";
    numero += "<p>";
    for(let i=0; i<num; i++) {
        for(let j=0; j<=i; j++) {
           numero += num;
                }
      numero += "</p>";
    }
  
  
    document.getElementById('elNum').innerHTML = numero;
  }

  //Crear una funcion que reciba dos valores y retorno el producto de los mismos.

  function producto (num1, num2) {
      return num1 * num2;
  }

