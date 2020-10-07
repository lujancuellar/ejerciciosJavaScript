
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
            console.log("Martes");
            break;
        case "3":
            console.log("Miercoles");
            break;
        case "4":
            console.log("Jueves");
            break;
        case "5":
            console.log("Viernes");
            break;
        case "6":
        case "7":
                console.log("Fin de semana");
            break;
         default:
                console.log("Error");
    }
<<<<<<< HEAD
    document.getElementById('resultado').innerHTML = 'dia';
}
=======
    //asignas el valor de la variable en el innerHMTL
    document.getElementById('resultado').innerHTML = nombreDelDia;
}
>>>>>>> e7def4fd134d942fb50e5fd30a7779770eecbfa6
