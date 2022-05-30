var btnAgregarPalabra = document.getElementById("agregarPalabra");
btnAgregarPalabra.addEventListener("click", validarPalabra)
palabra = document.getElementById("palabraNueva");


palabras = JSON.parse(localStorage.getItem('myArray'));


function validarPalabra() {
    var letraValida = false;
    var caracterInvalido = 0;

    letras = Array.from(palabra.value)
    
    for (i = 0; i < letras.length; i++) {

        valorNum = letras[i].charCodeAt(0);
        if (valorNum > 64 && valorNum < 91 || valorNum > 96 && valorNum < 123) {
            letraValida = true;
        } else {
            caracterInvalido++;
        }
    }


    if (letraValida && caracterInvalido == 0) {
        palabraNueva();
    } else {
        swal("Solo se aceptan letras Mayúsculas, sin acentos y sin espacios!");
    }

}


function palabraNueva() {
    var existe = false;
    for (i = 0; i < palabras.length; i++) {
        if (palabras[i] == palabra.value.toUpperCase()) {
            swal("La palabra ingresada ya existe!");
            existe = true;
            i = palabras.length
        }
    }

    if (!existe) {
        palabras.push(palabra.value.toUpperCase())
        localStorage.setItem('myArray', JSON.stringify(palabras));

        swal(" Palabra agregada con exito baby! ");
        i = palabras.length;

        setTimeout(function () {
            location.href = "game.html"
        }, 2000);

    }

}