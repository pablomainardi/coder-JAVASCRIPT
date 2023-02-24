
// ESTABLECIENDO VARIABLES PARA COLOR DE FONDO **
const rootCss = document.querySelector(":root");
const btnCambiarColor = document.querySelector("#btncambiarcolor");
const btnResetColor = document.querySelector("#btnresetcolor");

let fuente1;
let fuente2;
let bg1;
let bg2;
let luzBox;


// FUNCION PARA APLICAR LOS COLORES SELECCIONADOS**

function aplicarColor() {

    fuente1 = document.querySelector("#fuente1").value;
    fuente2 = document.querySelector("#fuente2").value;
    bg1 = document.querySelector("#bg1").value;
    bg2 = document.querySelector("#bg2").value;
    luzBox = document.querySelector("#luzbox").value;

    rootCss.style.setProperty('--fuente1', fuente1);
    rootCss.style.setProperty('--fuente2', fuente2);
    rootCss.style.setProperty('--bg1', bg1);
    rootCss.style.setProperty('--bg2', bg2);
    rootCss.style.setProperty('--luzbox', luzBox);
}

/*
// INFO EN CONSOLA DE COLORES PREVIOS **
console.log(fuente1);
console.log(fuente2);
console.log(bg1);
console.log(bg2);
console.log(luzBox);
*/

// BOTON DE INICIAR EL CAMBIO DE COLOR **
btnCambiarColor.addEventListener("click", () => {
    aplicarColor();
    console.log("------------------------")
    console.log("Color de la fuente 1: " + fuente1);
    console.log("Color de la fuente 2: " + fuente2);
    console.log("Color del fondo 1: " + bg1);
    console.log("Color del fondo 2: " + bg2);
    console.log("Color de la luz led: " + luzBox);
    // console.log(luzBox);
})



// FUNCION PARA RESETEAR COLOR
function resetColor() {
    
    rootCss.style.setProperty('--fuente1', "#ffffff");
    document.querySelector("#fuente1").value = "#ffffff";
    
    rootCss.style.setProperty('--fuente2', "#959595");
    document.querySelector("#fuente2").value = "#959595";

    rootCss.style.setProperty('--bg1', "#000000");
    document.querySelector("#bg1").value = "#000000";

    rootCss.style.setProperty('--bg2', "#212121");
    document.querySelector("#bg2").value = "#212121";

    rootCss.style.setProperty('--luzbox', "#bbbbbb");
    document.querySelector("#luzbox").value = "#bbbbbb";
}


// BOTON RESET COLOR
btnResetColor.addEventListener("click", () => {
    resetColor();

})







