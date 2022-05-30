// Obtener elementos de la pagina
var tablero = document.getElementById("cajaLetras");

var contenedorError = document.getElementById("contenedorError");

var nuevoJuego = document.getElementById("nuevoJuego");
nuevoJuego.addEventListener("click", juegoNuevo)

var letraIngresada = document.getElementById("letraIngresada");
letraIngresada.addEventListener("input", validarLetraInput);

//obtener Arreglo de palabras del almacenamiento local
palabras = JSON.parse(localStorage.getItem('myArray'));

// Elige una palabra aleatoria del arreglo palabras
function seleccionarPalabra() {
    palabra = palabras[Math.floor(Math.random() * palabras.length)]
    return palabra;
}

// Crea el tablero de juego "Guiones para la palabra secreta"
function crearTablero() {
    seleccionarPalabra();
    numLetras = palabra.length;
    for (i = 0; i < numLetras; i++) {
        var letra = document.createElement("label");
        tablero.appendChild(letra)
    }
    // Retorna un arrray donde se agrgaran las letras "Array de labels"
    return arrayPalabra = tablero.children;
}

crearTablero();

//Funcion para escuchar evento onkeypress
window.onload = function () {
    document.onkeypress = validarLetra;
}

// Funcion para validar letra presionada
var error = 0;
var intentos = 8;
var juegoGanado = false;

//Se crea un array para las letra erroneas
var letrasError = new Array();

function validarLetra(evObject) {
    // Borrar letra ingresada
    letraIngresada.value = "";

    //existencia de letra correcta
    var existe;

    // Existencia de letra erronea
    var errorExiste;

    // preparacion de datos de entrada Woojuuuu! :-)
    var letraPresionada = String.fromCharCode(evObject.which);
    letraPresionada = letraPresionada.charCodeAt(0);

    //convertimos "palabra" en un array de letras 
    letras = Array.from(palabra)

    // array para comparar resultados
    var arrayNuevo = new Array()
    
    //comienza la validacion
    

    if (intentos > 0 && !juegoGanado) {
        
        if ((letraPresionada > 64 && letraPresionada < 91) || (letraPresionada > 96 && letraPresionada < 123)) {

            letraPresionada = String.fromCharCode(letraPresionada).toUpperCase();

            for (i = 0; i < letras.length; i++) {

                if (letraPresionada == letras[i]) {
                    arrayPalabra[i].textContent = letraPresionada
                    existe = true;
                }
            }

            // Se valora si existe la letra presionada o no y se dibuja parte del dibujo
            if (!existe) {

                for (j = 0; j < letrasError.length; j++) {
                    if (letraPresionada == letrasError[j]) {
                        errorExiste = true;
                    }
                }

                if (!errorExiste) {
                    error++;
                    letrasError.push(letraPresionada);
                    dibujar(error)
                    intentos--;
                    contenedorError.textContent=letrasError.join("")
                }
            }

            // Mensaje ganador
            for (i = 0; i < arrayPalabra.length; i++) {
                arrayNuevo.push(arrayPalabra[i].textContent)
            }

            if (JSON.stringify(letras) === JSON.stringify(arrayNuevo) && intentos > 0) {
                swal("Felicidades!", "Has descubierto la palabra secreta!", "success");
                juegoGanado=true;
            }

            //Mensaje perdedor
            if (intentos == 0) {
                swal("Has perdido!", "Respuesta: " + palabra, "error");
            }

        }
        
    }
    

}

/*--------Validacion del input text letra------*/
function validarLetraInput(evObject) {
    //existencia de letra correcta
    var existe;

    // Existencia de letra erronea
    var errorExiste;

    // preparacion de datos de entrada Woojuuuu! :-)
    var letraPresionada = letraIngresada.value;
    letraPresionada = letraPresionada.charCodeAt(0);

    //convertimos "palabra" en un array de letras 
    letras = Array.from(palabra)

    // array para comparar resultados
    var arrayNuevo = new Array()
    
    //comienza la validacion
    

    if (intentos > 0 && !juegoGanado) {
        
        if ((letraPresionada > 64 && letraPresionada < 91) || (letraPresionada > 96 && letraPresionada < 123)) {

            letraPresionada = String.fromCharCode(letraPresionada).toUpperCase();

            for (i = 0; i < letras.length; i++) {

                if (letraPresionada == letras[i]) {
                    arrayPalabra[i].textContent = letraPresionada
                    existe = true;
                }
            }

            // Se valora si existe la letra presionada o no y se dibuja parte del dibujo
            if (!existe) {

                for (j = 0; j < letrasError.length; j++) {
                    if (letraPresionada == letrasError[j]) {
                        errorExiste = true;
                    }
                }

                if (!errorExiste) {
                    error++;
                    letrasError.push(letraPresionada);
                    dibujar(error)
                    intentos--;
                    contenedorError.textContent=letrasError.join("")
                }
            }

            // Mensaje ganador
            for (i = 0; i < arrayPalabra.length; i++) {
                arrayNuevo.push(arrayPalabra[i].textContent)
            }

            if (JSON.stringify(letras) === JSON.stringify(arrayNuevo) && intentos > 0) {
                swal("Felicidades!", "Has descubierto la palabra secreta!", "success");
                juegoGanado=true;
            }

            //Mensaje perdedor
            if (intentos == 0) {
                swal("Has perdido!", "Respuesta: " + palabra, "error");
            }

        }
        
    }

    // Borrar letra ingresada
    letraIngresada.value = "";
    

}

function juegoNuevo(){
    location.reload()
}