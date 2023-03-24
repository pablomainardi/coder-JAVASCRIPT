btnHtml = document.querySelector("#btn-html");
btnCss = document.querySelector("#btn-css");
btnJs = document.querySelector("#btn-js");

codigoSel = document.querySelector("#codigosel");

let codigoSelActivado = false;

btnHtml.addEventListener("click", () => {
    if (codigoSelActivado) {
        codigoSelActivado = false;
        btnHtml.style.backgroundColor = "var(--bg1)";
        codigoSel.innerHTML = '';
    } else {
        codigoSelActivado = true;
        btnHtml.style.backgroundColor = "var(--bg2)";
        btnCss.style.backgroundColor = "var(--bg1)";
        btnJs.style.backgroundColor = "var(--bg1)";
        codigoSel.innerHTML = '<iframe src="../js/codigo/card-html.txt"></iframe>';
    }
})

btnCss.addEventListener("click", () => {
    if (codigoSelActivado) {
        codigoSelActivado = false;
        btnCss.style.backgroundColor = "var(--bg1)";
        codigoSel.innerHTML = '';
    } else {
        codigoSelActivado = true;
        btnHtml.style.backgroundColor = "var(--bg1)";
        btnCss.style.backgroundColor = "var(--bg2)";
        btnJs.style.backgroundColor = "var(--bg1)";
        codigoSel.innerHTML = '<iframe src="../js/codigo/card-css.txt"></iframe>';
    }
})

btnJs.addEventListener("click", () => {
    if (codigoSelActivado) {
        codigoSelActivado = false;
        btnJs.style.backgroundColor = "var(--bg1)";
        codigoSel.innerHTML = '';
    } else {
        codigoSelActivado = true;
        btnHtml.style.backgroundColor = "var(--bg1)";
        btnCss.style.backgroundColor = "var(--bg1)";
        btnJs.style.backgroundColor = "var(--bg2)";
        codigoSel.innerHTML = '<iframe src="../js/codigo/card-html.txt"></iframe>';
    }
})

// BOTONES DE NAVEGACION ENTRE PORTADA/ETAPA1/ETAPA2 **  
let carta1 = {};
let carta2 = {};
let carta3 = {};
let carta4 = {};
let carta5 = {};
let carta6 = {};

class Monstruos {
    constructor(nombre, vida, ataque, velocidad, defensa, clase, img) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.velocidad = velocidad;
        this.defensa = defensa;
        this.clase = clase;
        this.img = img
    }
}

carta1 = new Monstruos("Enrique", 10000, 50, 60, 40, "Ataque", '<img width="120px" src="./cardjsbattle/carta1.jpg" alt="imagen carta 1">');
carta2 = new Monstruos("Lidia", 8900, 70, 70, 50, "Defensa", '<img width="120px" src="./cardjsbattle/carta2.jpg" alt="imagen carta 2">');
carta3 = new Monstruos("Mario", 9500, 40, 50, 60, "Defensa", '<img width="120px" src="./cardjsbattle/carta3.jpg" alt="imagen carta 3">');
carta4 = new Monstruos("Eusevio", 9800, 60, 40, 50, "Ataque", '<img width="120px" src="./cardjsbattle/carta4.jpg" alt="imagen carta 4">');
carta5 = new Monstruos("Marcela", 10500, 70, 60, 70, "Defensa", '<img width="120px" src="./cardjsbattle/carta5.jpg" alt="imagen carta 5">');
carta6 = new Monstruos("Monica", 9300, 80, 50, 50, "Ataque", '<img width="120px" src="./cardjsbattle/carta6.jpg" alt="imagen carta 6">');

const mazo = [carta1, carta2, carta3, carta4, carta5, carta6];

const btnIrEtapa1 = document.getElementById("btn-portada-inicio");
const btnIrPortada = document.getElementById("btnaportada");
const btnIrEtapa2 = document.getElementById("irbatalla");
const btnVolverInicio = document.getElementById("volverinicio");
// FONDO PARA LA PORTADA **
const portada = document.getElementById("container-box");
// FONDO ETAPA 1 **
const etapa1 = document.getElementById("flex-1");
// FONDO ETAPA 2 **
const etapa2 = document.getElementById("flex-2");
//

const iniciarBatalla = document.querySelector("#iniciarbatalla");

const sonidoSeleccion = new Audio("../../games/cardjsbattle/sound2.wav");
const sonidoEtapas = new Audio("../../games/cardjsbattle/sound5.wav");
const sonidoPerdiste = new Audio("../../games/cardjsbattle/sound3.wav");
const sonidoGanaste = new Audio("../../games/cardjsbattle/sound.wav");
const sonidoRandom = new Audio("../../games/cardjsbattle/sound4.wav");

let miVidaTotal = document.querySelector("#miVidTotal");
let vidaTotalRival = document.querySelector("#vidTotalRival");

// SALTANDO ENTRE PORTADA/ETAPA1/ETAPA2 ****
// IR A ETAPA UNO - BTN INICIAR **
function irEtapa1() {
    btnIrEtapa1.style.display = "none";
    etapa1.style.display = "flex";
};

btnIrEtapa1.addEventListener("click", () => {
    irEtapa1();
    miCartaPresentacion();
    mostrarNombres();
    sonidoEtapas.play();
});

// VOLVER A PORTADA - BTN VOLVER A PORTADA **
function irPortada() {
    etapa1.style.display = "none";
    etapa2.style.display = "none";
    btnIrEtapa1.style.display = "flex";
}

btnIrPortada.addEventListener("click", () => {
    irPortada();
    sonidoEtapas.play();
});

// IR A ETAPA 2 - BTN IR A BATALLA **
function irEtapa2() {
    etapa1.style.display = "none";
    etapa2.style.display = "flex";
    btnIrEtapa1.style.display = "none";
    //miVidaTotal.innerHTML = miCarta.vida;
    //vidaTotalRival.innerHTML = cartaRival.vida;
    cartasElegida();
    misHabilidadesVivo(miCarta);
};

btnIrEtapa2.addEventListener("click", () => {
    miCartaPresentacion();
    irEtapa2();
    sonidoEtapas.play();
});

// VOLVER A INICIO - BTN VOLVERINICIO **
function volverInicio() {
    reseteo();
    iniciarBatalla.innerHTML = "- INICIAR BATALLA -"
    iniciarBatalla.style.backgroundColor = "inherit";
    divRival.innerHTML = '<img width="120px" src="./cardjsbattle/interrogacion.jpg" alt="carta random del rival"></img>'
    etapa2.style.display = "none";
    etapa1.style.display = "flex";
}

btnVolverInicio.addEventListener("click", () => {
    volverInicio();
    sonidoEtapas.play();
});


// CREACION DE OBJETOS - CARTAS ********

function reseteo() {
    cartaRival = undefined;
    carta1.vida = 10000;
    carta2.vida = 8900;
    carta3.vida = 9500;
    carta4.vida = 9800;
    carta5.vida = 10500;
    carta6.vida = 9300;
    document.querySelector("#ataTotalRival").innerHTML = "? ? ?";
    document.querySelector("#defTotalRival").innerHTML = "? ? ?";
    midLeft.innerHTML = "? ? ?"
    midRight.innerHTML = "? ? ?"
    iniciarBatalla.innerHTML = "INICIAR BATALLA"
    iniciarBatalla.style.backgroundColor = "#ddd";
}

//ETAPA 1 -- ** ELECCION DE CARTA******** */

const imgCarta1 = document.querySelector("#f1-i1-img1");
const imgCarta2 = document.querySelector("#f1-i1-img2");
const imgCarta3 = document.querySelector("#f1-i1-img3");
const imgCarta4 = document.querySelector("#f1-i1-img4");
const imgCarta5 = document.querySelector("#f1-i1-img5");
const imgCarta6 = document.querySelector("#f1-i1-img6");

const imgCartas = [imgCarta1, imgCarta2, imgCarta3, imgCarta4, imgCarta5, imgCarta6];

function mostrarNombres() {
    for (nombre of mazo) {
        console.log(nombre)
    }
}

// ETAPA 1 -- SELECCIONAR CARTA Y MOSTRAR HABILIDADES

function miCartaPresentacion() {
    let miCarta = Object.assign({}, carta1);
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta1.img;
    document.querySelector("#nombrecarta").innerHTML = carta1.nombre;
    mostrarHab(miCarta);
}

function mostrarHab(i) {
    document.querySelector("#skillVida").innerHTML = "VIDA............." + i.vida;
    document.querySelector("#skillAtaque").innerHTML = "ATAQUE..........." + i.ataque;
    document.querySelector("#skillVelocidad").innerHTML = "VELOCIDAD......." + i.velocidad;
    document.querySelector("#skillDefensa").innerHTML = "DEFENSA........." + i.defensa;
    document.querySelector("#skillClase").innerHTML = "CLASE........." + i.clase;
}

// VER COMO ACTIVAR OTRA VEZ BLUR CUANDO CLICKEA OTRA CARTA

imgCarta1.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta1.img;
    document.querySelector("#nombrecarta").innerHTML = carta1.nombre;
    miCarta = carta1;
    mostrarHab(miCarta);
    sonidoSeleccion.play();
})

imgCarta2.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta2.img;
    document.querySelector("#nombrecarta").innerHTML = carta2.nombre;
    miCarta = carta2;
    mostrarHab(miCarta);
    sonidoSeleccion.play();
})

imgCarta3.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta3.img;
    document.querySelector("#nombrecarta").innerHTML = carta3.nombre;
    miCarta = carta3;
    mostrarHab(miCarta);
    sonidoSeleccion.play();
})

imgCarta4.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta4.img;
    document.querySelector("#nombrecarta").innerHTML = carta4.nombre;
    miCarta = carta4;
    mostrarHab(miCarta);
    sonidoSeleccion.play();
})

imgCarta5.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta5.img;
    document.querySelector("#nombrecarta").innerHTML = carta5.nombre;
    miCarta = carta5;
    mostrarHab(miCarta);
    sonidoSeleccion.play();
})

imgCarta6.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta6.img;
    document.querySelector("#nombrecarta").innerHTML = carta6.nombre;
    miCarta = carta6;
    mostrarHab(miCarta);
    sonidoSeleccion.play();
})

// ETAPA 2 ********************************************

/*local vs visitante roundi/mg */

const divLocal = document.querySelector("#f2-i5-col1");
const divRival = document.querySelector("#f2-i5-col3");


// mi carta exhibida
function cartasElegida() {
    divLocal.innerHTML = miCarta.img;
    divLocal.innerHTML += miCarta.nombre;
    miVidaTotal.innerHTML = miCarta.vida
}

let indiceRandom = undefined;

function indiceCrearRandom() {
    indiceRandom = Math.floor((Math.random() * 6));
    cartaRival = Object.assign({}, mazo[indiceRandom]);
}

// seleccionando carta rival
function randomRivalSel() {
    reseteo();
    sonidoRandom.play();
    indiceCrearRandom();
    habilidadesVivoRival(cartaRival);
    divRival.innerHTML = cartaRival.img;
    divRival.innerHTML += cartaRival.nombre;
    vidaTotalRival.innerHTML = cartaRival.vida;
    iniciarBatalla.addEventListener("click", batallaIniciada);
}

// click en la imagen "?"
divRival.addEventListener("click", () => {
    randomRivalSel();
    console.log(cartaRival);
});

const cambiarRival = document.querySelector("#cambiarRival");

// click boton cambiar rival
cambiarRival.addEventListener("click", () => {
    randomRivalSel();
});

/*******PREPARAR BATALLA********/
// ***** miCarta ***** cartaRival ******
//let suCarta = Object.assign({}, cartaRival);

const btnAta1 = document.querySelector("#btn-ata-1");
const btnAta2 = document.querySelector("#btn-ata-2");
const btnAta3 = document.querySelector("#btn-ata-3");

const btnDef1 = document.querySelector("#btn-def-1");
const btnDef2 = document.querySelector("#btn-def-2");
const btnDef3 = document.querySelector("#btn-def-3");

const miAtaqueTotal = document.querySelector("#miAtaTotal");
const miDefensaTotal = document.querySelector("#miDefTotal");

// ATAQUE TOTAL Y DEFENSA TOTAL, DE LA ELECCION
let miAtaque = null;
let miDefensa = null;

let ataqueRival = null;
let defensaRival = null;

//mostrar Habilidades en vivo
function misHabilidadesVivo(i) {
    document.querySelector("#miSkillVida").innerHTML = "VIDA_______" + i.vida;
    document.querySelector("#miSkillAtaque").innerHTML = "ATAQUE_______" + i.ataque;
    document.querySelector("#miSkillVelocidad").innerHTML = "VELOCIDAD____" + i.velocidad;
    document.querySelector("#miSkillDefensa").innerHTML = "DEFENSA______" + i.defensa;
    document.querySelector("#miSkillClase").innerHTML = "CLASE_____" + i.clase;
}

function habilidadesVivoRival(i) {
    document.querySelector("#rivalSkillVida").innerHTML = "VIDA_______" + i.vida;
    document.querySelector("#rivalSkillAtaque").innerHTML = "ATAQUE_______" + i.ataque;
    document.querySelector("#rivalSkillVelocidad").innerHTML = "VELOCIDAD____" + i.velocidad;
    document.querySelector("#rivalSkillDefensa").innerHTML = "DEFENSA______" + i.defensa;
    document.querySelector("#rivalSkillClase").innerHTML = "CLASE_____" + i.clase;
}

let indiceRandomRival = undefined;

function indiceRandomRivalSel() {
    indiceRandomRival = Math.floor((Math.random() * 6) + 1);
}

function randomAtaqueRival() {
    indiceRandomRivalSel();
    switch (indiceRandomRival) {
        case 1:
            ataque1(cartaRival);
            break;
        case 2:
            ataque2(cartaRival);
            break;
        case 3:
            ataque3(cartaRival);
            break;
        case 4:
            defensa1(cartaRival);
            break;
        case 5:
            defensa2(cartaRival);
            break;
        case 6:
            defensa3(cartaRival);
            break;
    }
    console.log(indiceRandomRival);
    console.log(ataqueRival + " -- Ataque Rival");
    console.log(defensaRival + " -- Defensa Rival");
    console.log("--------vs--------")
    console.log(miAtaque + " -- Mi Ataque");
    console.log(miDefensa + " -- Mi Defensa");
    document.querySelector("#ataTotalRival").innerHTML = ataqueRival;
    document.querySelector("#defTotalRival").innerHTML = defensaRival;
}

function ataque1(paraQuien) {
    if (paraQuien === miCarta) {
        miAtaque = ((paraQuien.ataque * paraQuien.velocidad));
        miDefensa = paraQuien.defensa;
    } else {
        ataqueRival = ((paraQuien.ataque * paraQuien.velocidad));
        defensaRival = paraQuien.defensa;
    }
}

function ataque2(paraQuien) {
    if (paraQuien === miCarta) {
        miAtaque = ((paraQuien.ataque * (paraQuien.velocidad / 2)) + (paraQuien.defensa));
        miDefensa = ((paraQuien.defensa * (paraQuien.velocidad / 2)) + (paraQuien.ataque));
    } else {
        ataqueRival = ((paraQuien.ataque * (paraQuien.velocidad / 2)) + (paraQuien.defensa / 2));
        defensaRival = ((paraQuien.defensa * (paraQuien.velocidad / 2)) + (paraQuien.ataque / 2));
    }
}

function ataque3(paraQuien) {

    if (paraQuien === miCarta) {
        miAtaque = ((paraQuien.ataque * paraQuien.defensa));
        miDefensa = paraQuien.defensa;
    } else {
        ataqueRival = ((paraQuien.ataque * paraQuien.defensa));
        defensaRival = paraQuien.defensa;
    }
}

function defensa1(paraQuien) {
    if (paraQuien === miCarta) {
        miDefensa = ((paraQuien.defensa * paraQuien.velocidad));
        miAtaque = paraQuien.ataque;
    } else {
        defensaRival = ((paraQuien.defensa * paraQuien.velocidad));
        ataqueRival = paraQuien.ataque;
    }
}

function defensa2(paraQuien) {
    if (paraQuien === miCarta) {
        miDefensa = ((paraQuien.defensa * (paraQuien.velocidad / 2)) + (paraQuien.ataque / 2));
        miAtaque = ((paraQuien.ataque * (paraQuien.velocidad / 2)) + (paraQuien.defensa / 2));
    } else {
        defensaRival = ((paraQuien.defensa * (paraQuien.velocidad / 2)) + (paraQuien.ataque));
        ataqueRival = ((paraQuien.ataque * (paraQuien.velocidad / 2)) + (paraQuien.defensa));
    }
}

function defensa3(paraQuien) {
    if (paraQuien === miCarta) {
        miDefensa = ((paraQuien.defensa * paraQuien.ataque));
        miAtaque = paraQuien.ataque;
    } else {
        defensaRival = ((paraQuien.defensa * paraQuien.ataque));
        ataqueRival = paraQuien.ataque;
    }
}

//ATAQUE SELECCION **
btnAta1.addEventListener("click", () => {
    btnAta1.classList.add("boton-activado");
    btnAta2.classList.remove("boton-activado");
    btnAta3.classList.remove("boton-activado");
    btnDef1.classList.remove("boton-activado");
    btnDef2.classList.remove("boton-activado");
    btnDef3.classList.remove("boton-activado");
    ataque1(miCarta);
    sonidoSeleccion.play();
    miAtaqueTotal.innerHTML = miAtaque;
    miDefensaTotal.innerHTML = miDefensa;
})

btnAta2.addEventListener("click", () => {
    btnAta2.classList.add("boton-activado");
    btnAta1.classList.remove("boton-activado");
    btnAta3.classList.remove("boton-activado");
    btnDef1.classList.remove("boton-activado");
    btnDef2.classList.remove("boton-activado");
    btnDef3.classList.remove("boton-activado");
    ataque2(miCarta);
    sonidoSeleccion.play();
    miAtaqueTotal.innerHTML = miAtaque;
    miDefensaTotal.innerHTML = miDefensa;
})

btnAta3.addEventListener("click", () => {
    btnAta3.classList.add("boton-activado");
    btnAta2.classList.remove("boton-activado");
    btnAta1.classList.remove("boton-activado");
    btnDef1.classList.remove("boton-activado");
    btnDef2.classList.remove("boton-activado");
    btnDef3.classList.remove("boton-activado");
    ataque3(miCarta);
    sonidoSeleccion.play();
    miAtaqueTotal.innerHTML = miAtaque;
    miDefensaTotal.innerHTML = miDefensa;
})

//DEFENSA SELECCION **

btnDef1.addEventListener("click", () => {
    btnDef1.classList.add("boton-activado");
    btnDef2.classList.remove("boton-activado");
    btnDef3.classList.remove("boton-activado");
    btnAta1.classList.remove("boton-activado");
    btnAta2.classList.remove("boton-activado");
    btnAta3.classList.remove("boton-activado");
    defensa1(miCarta);
    sonidoSeleccion.play();
    miAtaqueTotal.innerHTML = miAtaque;
    miDefensaTotal.innerHTML = miDefensa;
})

btnDef2.addEventListener("click", () => {
    btnDef2.classList.add("boton-activado");
    btnDef1.classList.remove("boton-activado");
    btnDef3.classList.remove("boton-activado");
    btnAta1.classList.remove("boton-activado");
    btnAta2.classList.remove("boton-activado");
    btnAta3.classList.remove("boton-activado");
    defensa2(miCarta);
    sonidoSeleccion.play();
    miAtaqueTotal.innerHTML = miAtaque;
    miDefensaTotal.innerHTML = miDefensa;
})

btnDef3.addEventListener("click", () => {
    btnDef3.classList.add("boton-activado");
    btnDef2.classList.remove("boton-activado");
    btnDef1.classList.remove("boton-activado");
    btnAta1.classList.remove("boton-activado");
    btnAta2.classList.remove("boton-activado");
    btnAta3.classList.remove("boton-activado");
    defensa3(miCarta);
    sonidoSeleccion.play();
    miAtaqueTotal.innerHTML = miAtaque;
    miDefensaTotal.innerHTML = miDefensa;
})

// espacio entre imagen de carta y habilidades
const midRight = document.querySelector("#right-mid");
const midLeft = document.querySelector("#left-mid");
const midRight2 = document.querySelector("#right-mid-2");
const midLeft2 = document.querySelector("#left-mid-2");

function finBatalla() {
    if ((miCarta.vida < 0) || (cartaRival.vida < 0)) {
        iniciarBatalla.removeEventListener("click", batallaIniciada);
        if (miCarta.vida > cartaRival.vida) {
            iniciarBatalla.innerHTML = "- GANASTE -"
            iniciarBatalla.style.backgroundColor = "green";
        } else {
            iniciarBatalla.innerHTML = "- PERDISTE -"
            iniciarBatalla.style.backgroundColor = "red";
        }
    }
}

function batallaIniciada() {
    midLeft.innerHTML = "???";
    midRight.innerHTML = "???";
    finBatalla();
    setTimeout(resultado, 500);
}

let miAtaTotal = undefined;
let miDefTotal = undefined;
let rivalDefTotal = undefined;
let rivalAtaTotal = undefined;

function mostrarVida() {
    vidaTotalRival.innerHTML = cartaRival.vida;
    miVidaTotal.innerHTML = miCarta.vida;
}

function resultado() {
    randomAtaqueRival();

    if (miAtaque > defensaRival) {
        miAtaTotal = miAtaque - defensaRival;
        midLeft.innerHTML = "Mi ataque te quito " + miAtaTotal + " de vida";
        cartaRival.vida -= miAtaTotal;
        mostrarVida();
        finBatalla();
    }

    if (defensaRival > miAtaque) {
        rivalAtaTotal = defensaRival - miAtaque;
        midLeft2.innerHTML = " Mi Defensa te quito " + rivalAtaTotal + " de vida";
        miCarta.vida -= rivalAtaTotal;
        mostrarVida();
        finBatalla();
    }
    if (miDefensa > ataqueRival) {
        miDefTotal = miDefensa - ataqueRival;
        midRight.innerHTML = "y mi defensa te quito " + miDefTotal + " de vida";
        cartaRival.vida -= miDefTotal;
        mostrarVida();
        finBatalla();
    }
    if (ataqueRival > miDefensa) {
        rivalDefTotal = ataqueRival - miDefensa;
        midRight2.innerHTML = "y mi ataque te quito " + rivalDefTotal + " de vida";
        miCarta.vida -= rivalDefTotal;
        mostrarVida();
        finBatalla();
    }
}