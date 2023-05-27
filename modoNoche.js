
console.log("Variables almacenadas en localStorage:");
for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    console.log(key + ": " + value);
}


// Leer todas las variables guardadas en localStorage, especialmente la variable --modoInicial
var modo = leerModoActual();
console.log("Modo actual: " + modo);
if (modo == "dia") {
    ponerModoDia();
} else {
    ponerModoNoche();
}

// Función para mostrar una alerta con información del alumno
function mostrarAlerta() {
    alert("Nombre del alumno: Jose Antonio Holgado Bonet\nCurso: 1DAW\nTema elegido de Proyecto Final de Curso");
}

// Función para leer el modo actual desde localStorage
function leerModoActual() {
    let modo = window.localStorage.getItem("--modoGuardado");
    if (!modo) {
        // Si no hay modo guardado, leemos el valor de --modoGuardado del CSS original
        modo = document.documentElement.style.getPropertyValue("--modoGuardado");
    }
    return modo;
}

// Función para aplicar el modo "Día"
function ponerModoDia() {
    // Ponemos letra oscura sobre fondo blanco
    console.log("Aplicando modo 'Día'");
    var nav = document.getElementById('barraNav');
    nav.style.backgroundColor = "white";
    let todo = document.getElementById("todo");
    todo.style.color = "black";
    todo.style.backgroundColor = "white";
    window.localStorage.setItem("--modoGuardado", "dia");

    // Ocultamos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "none";

    // Mostramos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "block";
}

// Función para aplicar el modo "Noche"
function ponerModoNoche() {
    // Ponemos letra clara sobre fondo oscuro
    console.log("Aplicando modo 'Noche'");
    var nav = document.getElementById('barraNav');
    nav.style.backgroundColor = "black";
    let todo = document.getElementById("todo");
    todo.style.color = "white";
    todo.style.backgroundColor = "black";
    window.localStorage.setItem("--modoGuardado", "noche");

    // Mostramos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "block";

    // Ocultamos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "none";
}

// Función para aplicar los cambios seleccionados por el usuario
function aplicarCambios() {
    console.log("Aplicando cambios seleccionados");
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

    // Aplicar el cambio de cursor
    var cam = document.getElementsByName('camRaton')[0];
    var puntero = cam[cam.selectedIndex].value;
    document.getElementById("todo").style.cursor = puntero;

    // Guardar los ajustes en localStorage
    localStorage.setItem('camRaton', puntero);
}

// Función para manejar el nombre del usuario
function miNombre() {
    console.log("Ejecutando función miNombre");

    var nombre2 = document.getElementById('fname').value;

    var nombreUsuarioDiv = document.getElementById('nombre-usuario');
    if (nombre2 !== "") {
        nombreUsuarioDiv.textContent = nombre2;
        localStorage.setItem("nombre-usuario", nombre2);
    } else {
        nombreGuardado = "Sin identificar";
        nombreUsuarioDiv.textContent = nombreGuardado;
        localStorage.setItem("nombre-usuario", nombreGuardado);
    }
   
}

// Función para restaurar los ajustes guardados en localStorage
function Restaurar() {
    console.log("Restaurando ajustes guardados");
    var colorElegido = localStorage.getItem('colorElegido');
    var tamElegido = localStorage.getItem('tamElegido');
    var camRatonElejido = localStorage.getItem('camRaton');
    var nombreGuardado = localStorage.getItem("nombre-usuario");

    // Restaurar el cursor
    document.getElementById("todo").style.cursor = camRatonElejido;

    var nombreUsuarioDiv = document.getElementById('nombre-usuario');

    if (nombreGuardado !== null) {
        nombreUsuarioDiv.textContent = nombreGuardado;
    } else {
        nombreGuardado = "Sin identificar";
        nombreUsuarioDiv.textContent = nombreGuardado;
        localStorage.setItem("nombre-usuario", nombreGuardado);
    }
   

    if (colorElegido && tamElegido) {
        // Restaurar los ajustes de fuente y color
        document.documentElement.style.fontSize = parseFloat(tamElegido) + "rem";
        document.documentElement.style.setProperty("--colorNormal", colorElegido);
    }
   
}

// Restaurar los ajustes al cargar la página
Restaurar();

function cerrarSesion() {
    console.log("Cerrando sesión");
    var confirmar = confirm('¿Estás seguro de que quieres cerrar la sesión?');
    if (confirmar) {
        var continuar = confirm('¿Deseas continuar?');
        localStorage.removeItem("nombre-usuario");
        window.location.href = "./index.html";
        return continuar;
    } else {
        return false;
    }
};
