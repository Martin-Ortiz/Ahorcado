// El arreglo:
var palabras = ["HOLA", "ALURA", "ORACLE", "MEXICO", "TREN", "RETO"];

palabras.push("JUEZ");

palabras = JSON.parse(localStorage.getItem('myArray'));
localStorage.setItem('myArray', JSON.stringify(palabras));



