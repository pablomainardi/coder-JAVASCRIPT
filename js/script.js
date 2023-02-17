/*

let nombre = prompt("OcioJS te da la bienvenida!, cual es tu nombre?");

function respuestaConocimiento() {
    let tieneConocimiento = prompt('Hola ' + nombre + ', te invitamos a aprender jugando!. Tienes conocimientos en HTML, CSS o JS ?')
    if (tieneConocimiento == "si" || tieneConocimiento == "SI" || tieneConocimiento == "Si") {
        alert("Buenisimo! puedes visitar nuestra seccion de codigo y personalizacion!");
    } else {
          alert("No hay problema! Igualmente puedes jugar a estos juegos que fueron hechos con esas tecnologias");
        }
}

respuestaConocimiento();

*/

let cataVerde = document.getElementById("botonverde");
let cataNegro = document.getElementById("botonnegro");
let catafondo = document.getElementById("fondo");
let catatablas = document.getElementById("tablas");

cataVerde.addEventListener("click", () => {
    catafondo.style.backgroundColor = "green";
    catafondo.style.borderColor = "green"
})

cataNegro.addEventListener("click", () => {
    catafondo.style.backgroundColor = "black";
    catafondo.style.borderColor = "black"
})
