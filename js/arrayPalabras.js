palabras = JSON.parse(localStorage.getItem('myArray'));

if(palabras==null){
    // El arreglo:
    var palabras = ["HOLA", "ALURA", "ORACLE", "MEXICO", "TREN", "RETO"];
    localStorage.setItem('myArray', JSON.stringify(palabras));
}




