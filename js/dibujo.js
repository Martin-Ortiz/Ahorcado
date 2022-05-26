const ancho = 400,
    alto = 400;

var lienzo = document.getElementById("areaDibujo");
lienzo.width = 400;
lienzo.height = 400;

var contexto = lienzo.getContext("2d");

function dibujarLinea(xInicio, yInicio, xFinal, yFinal) {
    contexto.beginPath();
    contexto.lineWidth = 6;
    contexto.strokeStyle = "#0AA1DD ";
    contexto.moveTo(xInicio, yInicio);
    contexto.lineTo(xFinal, yFinal);
    contexto.stroke();
}

function dibujarCirculo(X, Y, r) {
    contexto.beginPath();
    contexto.arc(X, Y, r, 0, 2 * Math.PI);
    contexto.lineWidth = 5;
    contexto.stroke();
}

function dibujar(error) {
    switch (error) {
        case 1:
            base = dibujarLinea(10, 380, 390, 380)
            poste = dibujarLinea(70, 380, 70, 20)
            viga = dibujarLinea(68, 20, 310, 20)
            break;
        case 2:
            cuerda = dibujarLinea(310, 18, 310, 70)
            break;
        case 3:
            cabeza = dibujarCirculo(310, 105, 35)
            break;
        case 4:
            torzo = dibujarLinea(310, 140, 310, 250)
            break;
        case 5:
            piernaIzq = dibujarLinea(310, 248, 250, 300)
            break;
        case 6:
            piernaDer = dibujarLinea(310, 248, 370, 300)
            break;
        case 7:
            brazoIzq = dibujarLinea(310, 180, 250, 120)
            break;
        case 8:
            brazoDer = dibujarLinea(310, 180, 370, 120)
            break;
    }
}
