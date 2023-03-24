// API DE GEOLOCACION
let ipVisitante = document.querySelector("#location-ip");
let cityVisitante = document.querySelector("#location-country");
let countryVisitante = document.querySelector("#location-city");
let mapaVisitante = document.querySelector("#location-map");
let latitudVis = undefined;
let longitudVis = undefined;


fetch("http://ipwho.is/")
    .then(res => res.json())
    .then(data => {
        console.log(data);

        ipVisitante.textContent = data.ip;
        countryVisitante.textContent = data.country;
        cityVisitante.textContent = data.city;
        latitudVis = data.latitude;
        longitudVis = data.longitude;
        mapaVisitante.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13144.619493449756!2d' + longitudVis + '!3d' + latitudVis + '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDMyJzU5LjYiUyA1OMKwMjgnNTcuOSJX!5e0!3m2!1ses-419!2sar!4v1679682252495!5m2!1ses-419!2sar" width="400" height="300" style="border-radius: 25px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    })
    .catch(error => console.error(error))

// CUADRO DE ELECCION DE COLORES
const btnPersonalizar = document.querySelector("#btn-personalizar");
const cuadroColor = document.querySelector("#cuadrocolor");
let cuadroActivo = false;

btnPersonalizar.addEventListener("click", () => {
    if (cuadroActivo) {
        cuadroColor.style.display = "none";
        cuadroActivo = false;
    } else {
        cuadroColor.style.display = "block";
        cuadroActivo = true;
    }
})

// ESTABLECIENDO VARIABLES PARA COLOR DE FONDO **
const rootCss = document.querySelector(":root");
const btnCambiarColor = document.querySelector("#btncambiarcolor");
const btnResetColor = document.querySelector("#btnresetcolor");

let fuente1;
let fuente2;
let bg1;
let bg2;
let luzBox;

colorGuardado();



function colorGuardado() {
    fuente1 = JSON.parse(localStorage.getItem("fuente1"));
    fuente2 = JSON.parse(localStorage.getItem("fuente2"));
    bg1 = JSON.parse(localStorage.getItem("bg1"));
    bg2 = JSON.parse(localStorage.getItem("bg2"));
    luzBox = JSON.parse(localStorage.getItem("luzBox"));
    aplicarColor();
}

// FUNCION PARA APLICAR LOS COLORES SELECCIONADOS**

function colorSel() {

    fuente1 = document.querySelector("#fuente1").value;
    fuente2 = document.querySelector("#fuente2").value;
    bg1 = document.querySelector("#bg1").value;
    bg2 = document.querySelector("#bg2").value;
    luzBox = document.querySelector("#luzbox").value;

    localStorage.setItem("fuente1", JSON.stringify(fuente1));
    localStorage.setItem("fuente2", JSON.stringify(fuente2));
    localStorage.setItem("bg1", JSON.stringify(bg1));
    localStorage.setItem("bg2", JSON.stringify(bg2));
    localStorage.setItem("luzBox", JSON.stringify(luzBox));

}

function aplicarColor() {
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
    colorSel();
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

    rootCss.style.setProperty('--fuente1', "#28A43d");
    document.querySelector("#fuente1").value = "#28A43d";

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
    colorSel();

})



