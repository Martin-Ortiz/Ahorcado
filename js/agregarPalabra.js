var btnAgregarPalabra = document.getElementById("agregarPalabra");
btnAgregarPalabra.addEventListener("click", palabraNueva)
palabra = document.getElementById("palabraNueva");


palabras = JSON.parse(localStorage.getItem('myArray'));


function palabraNueva() {
    var existe = false;
    for (i = 0; i < palabras.length; i++) {
        if (palabras[i] == palabra.value.toUpperCase()) {
            swal("La palabra ingresada ya existe!");
            existe = true;
            i = palabras.length
        } else if (palabra.value == "") {
            swal("Debes de ingresar al menos una letra!");
            existe=true;    
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
        }, 3000);

    }

}