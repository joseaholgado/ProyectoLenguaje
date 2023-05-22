// código para manejar el modo dia y noche

/* añadir aquí lo siguiente:
  leer todas las variables guardadas en localStorage
  especialmente la variable --modoInicial

*/

var modo = leerModoActual();
if (modo=="dia") {
    ponerModoDia();    
} else {
    ponerModoNoche();
}


function leerModoActual() {    
    let modo = window.localStorage.getItem("--modoGuardado");
    if (!modo) {
        // devolverá modo DIA si no hay modo guardado
        /* 
        leer el --modoGuardado de nuestro CSS original
                */

        modo=document.documentElement.style.getPropertyValue("--modoGuardado");
        // modo = getComputedStyle(document.documentElement).getPropertyValue('--modoGuardado');


    };
    return modo;
}

function ponerModoDia() {

    // ponemos letra oscura sobre fondo blanco
    var nav = document.getElementById('barraNav');
    nav.style.backgroundColor = "white";
    let todo=document.getElementById("todo");
    todo.style.color="black";
    todo.style.backgroundColor="white";
    window.localStorage.setItem("--modoGuardado","dia");

    // ocultamos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="none";

    // mostramos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="block";
    
   //Cambiamos en nav
   
    

}


function ponerModoNoche() {

    // ponemos letra clara sobre fondo oscuro
    var nav = document.getElementById('barraNav');
    nav.style.backgroundColor = "black";
    let todo=document.getElementById("todo");
    todo.style.color="white";
    todo.style.backgroundColor="black";
    window.localStorage.setItem("--modoGuardado","noche");

    // mostramos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="block";

    // ocultamos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="none";
    
    
}
function aplicarCambios() {
    var color = document.getElementsByName('colorElegido')[0];
    var tam = document.getElementsByName('tamFuente')[0];

    var colorElegido = color.value;
    var tamElegido = tam[tam.selectedIndex].value;

    // Guardar los ajustes en localStorage
    localStorage.setItem('colorElegido', colorElegido);
    localStorage.setItem('tamElegido', tamElegido);

    // Aplicar los cambios
    document.documentElement.style.fontSize = parseFloat(tamElegido) + "rem";
    document.documentElement.style.setProperty("--colorNormal", colorElegido);
    document.getElementById('mensaje').innerHTML = "APLICADO";

    //aplicar raton
    var cam = document.getElementsByName('camRaton')[0];
    var puntero= cam[cam.selectedIndex].value;
    document.getElementById("todo").style.cursor = puntero;

    //Guardar los ajustes en localStorage
    localStorage.setItem('camRaton',puntero );
}


function Restaurar(){
    var colorElegido = localStorage.getItem('colorElegido');
    var tamElegido = localStorage.getItem('tamElegido');

    if (colorElegido && tamElegido) {
        document.documentElement.style.fontSize = parseFloat(tamElegido) + "rem";
        document.documentElement.style.setProperty("--colorNormal", colorElegido);
        document.getElementsByName('colorElegido')[0].value = colorElegido;
        document.getElementsByName('tamFuente')[0].value = tamElegido;
    }
    var camRatonElejido = localStorage.getItem('camRaton');
    document.getElementById("todo").style.cursor = camRatonElejido;
 
}

Restaurar();
