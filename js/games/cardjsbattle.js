
// BOTONES DE NAVEGACION ENTRE PORTADA/ETAPA1/ETAPA2 **  

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



// SALTANDO ENTRE PORTADA/ETAPA1/ETAPA2 ****
// IR A ETAPA UNO - BTN INICIAR **
function irEtapa1() {
    btnIrEtapa1.style.display = "none";
    etapa1.style.display = "flex";
};

btnIrEtapa1.addEventListener("click", () => {
    irEtapa1();
    mostrarNombres();
});
// VOLVER A PORTADA - BTN VOLVER A PORTADA **
function irPortada() {
    etapa1.style.display = "none";
    etapa2.style.display = "none";
    btnIrEtapa1.style.display = "flex";
}

btnIrPortada.addEventListener("click", () => {
    irPortada();
});

// IR A ETAPA 2 - BTN IR A BATALLA **
function irEtapa2() {
    etapa1.style.display = "none";
    etapa2.style.display = "flex";
    btnIrEtapa1.style.display = "none";
    cartasElegida();
    cartaRivalInicial();
    misHabilidadesVivo(miCarta);
    HabilidadesVivoRival(cartaRival);
    

};

btnIrEtapa2.addEventListener("click", () => {
    irEtapa2();


});

// VOLVER A INICIO - BTN VOLVERINICIO **
function volverInicio() {
    etapa2.style.display = "none";
    etapa1.style.display = "flex";

}

btnVolverInicio.addEventListener("click", () => {
    volverInicio();
});



// CREACION DE OBJETOS - CARTAS ********
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


};
//defensa();


const carta1 = new Monstruos("Enrique", 100, 50, 30, 40, "Mago", '<img src="./cardjsbattle/carta1.jpg" alt="imagen carta 1">');
const carta2 = new Monstruos("Lidia", 80, 70, 70, 20, "Guerrero", '<img src="./cardjsbattle/carta2.jpg" alt="imagen carta 2">');
const carta3 = new Monstruos("Mario", 120, 40, 50, 60, "Guerrero", '<img src="./cardjsbattle/carta3.jpg" alt="imagen carta 3">');
const carta4 = new Monstruos("Eusevio", 90, 60, 40, 50, "Mago", '<img src="./cardjsbattle/carta4.jpg" alt="imagen carta 4">');
const carta5 = new Monstruos("Marcela", 110, 30, 60, 70, "Guerrero", '<img src="./cardjsbattle/carta5.jpg" alt="imagen carta 5">');
const carta6 = new Monstruos("Monica", 70, 80, 20, 30, "Mago", '<img src="./cardjsbattle/carta6.jpg" alt="imagen carta 6">');


const mazo = [carta1, carta2, carta3, carta4, carta5, carta6];

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

let cartaSeleccionada = carta1;
let miCarta = Object.assign({}, cartaSeleccionada);
let cartaRival = Object.assign({}, cartaSeleccionada);



miCartaPresentacion();

function miCartaPresentacion() {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta1.img;
    document.querySelector("#nombrecarta").innerHTML = carta1.nombre;
    miCarta = carta1;
    mostrarHab(miCarta);

}

function mostrarHab(i) {
    document.querySelector("#skillVida").innerHTML = "VIDA............" + i.vida;
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
})

imgCarta2.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta2.img;
    document.querySelector("#nombrecarta").innerHTML = carta2.nombre;
    miCarta = carta2;
    mostrarHab(miCarta);
})

imgCarta3.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta3.img;
    document.querySelector("#nombrecarta").innerHTML = carta3.nombre;
    miCarta = carta3;
    mostrarHab(miCarta);
})

imgCarta4.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta4.img;
    document.querySelector("#nombrecarta").innerHTML = carta4.nombre;
    miCarta = carta4;
    mostrarHab(miCarta);
})

imgCarta5.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta5.img;
    document.querySelector("#nombrecarta").innerHTML = carta5.nombre;
    miCarta = carta5;
    mostrarHab(miCarta);
})

imgCarta6.addEventListener("click", () => {
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta6.img;
    document.querySelector("#nombrecarta").innerHTML = carta6.nombre;
    miCarta = carta6;
    mostrarHab(miCarta);
})



// ETAPA 2 ********************************************

/*local vs visitante roundi/mg */
let indiceRandom;
const divLocal = document.querySelector("#f2-i5-col1");
const divRival = document.querySelector("#f2-i5-col3");





// mi carta exhibida
function cartasElegida() {
    divLocal.innerHTML = miCarta.img;
    divLocal.innerHTML += miCarta.nombre;
}
// imagen de carta rival a descubrir
function cartaRivalInicial() {
    document.querySelector("#f2-i5-col3").innerHTML += "CLICK Para conocer a tu rival";
}
// seleccionando carta rival
divRival.addEventListener("click", () => {
    indiceRandom = Math.floor(Math.random() * 6);
    divRival.innerHTML = mazo[indiceRandom].img;
    divRival.innerHTML += mazo[indiceRandom].nombre;
    cartaRival = mazo[indiceRandom]
    HabilidadesVivoRival(cartaRival);
})


/*******PREPARAR BATALLA********/
// ***** miCarta ***** cartaRival ******
//let suCarta = Object.assign({}, cartaRival);

const btnAta1 = document.querySelector("#btn-ata-1");
const btnAta2 = document.querySelector("#btn-ata-2");
const btnAta3 = document.querySelector("#btn-ata-3");

const btnDef1 = document.querySelector("#btn-def-1");
const btnDef2 = document.querySelector("#btn-def-2");
const btnDef3 = document.querySelector("#btn-def-3");

let miAtaque = null;
let miDefensa = null;

let ataqueRival = null;
let defensaRival = null;

//mostrar habilidades en vivo
function misHabilidadesVivo(i) {
    document.querySelector("#miSkillVida").innerHTML = "VIDA............" + i.vida;
    document.querySelector("#miSkillAtaque").innerHTML = "ATAQUE..........." + i.ataque;
    document.querySelector("#miSkillVelocidad").innerHTML = "VELOCIDAD......." + i.velocidad;
    document.querySelector("#miSkillDefensa").innerHTML = "DEFENSA........." + i.defensa;
    document.querySelector("#miSkillClase").innerHTML = "CLASE........." + i.clase;
}

function HabilidadesVivoRival(i) {
    document.querySelector("#rivalSkillVida").innerHTML = "VIDA............" + i.vida;
    document.querySelector("#rivalSkillAtaque").innerHTML = "ATAQUE..........." + i.ataque;
    document.querySelector("#rivalSkillVelocidad").innerHTML = "VELOCIDAD......." + i.velocidad;
    document.querySelector("#rivalSkillDefensa").innerHTML = "DEFENSA........." + i.defensa;
    document.querySelector("#rivalSkillClase").innerHTML = "CLASE........." + i.clase;
}
/*
function rivalHabilidadesVivo(i) {
    document.querySelector("#miSkillVida").innerHTML = "VIDA............" + i.vida;
    document.querySelector("#miSkillAtaque").innerHTML = "ATAQUE..........." + i.ataque;
    document.querySelector("#miSkillVelocidad").innerHTML = "VELOCIDAD......." + i.velocidad;
    document.querySelector("#miSkillDefensa").innerHTML = "DEFENSA........." + i.defensa;
    document.querySelector("#miSkillClase").innerHTML = "CLASE........." + i.clase;
}

*/

//randomAtaqueRival();
//randomDefensaRival();

function ataque1(paraQuien) {
    miAtaque = (paraQuien.ataque + paraQuien.velocidad);
    miDefensa = paraQuien.defensa
    
    
}

function ataque2(paraQuien) {
    miAtaque = (paraQuien.ataque + (paraQuien.velocidad / 2));
    miDefensa = (paraQuien.defensa + (paraQuien.velocidad / 2));
    
}

function ataque3(paraQuien) {
    miAtaque = (paraQuien.ataque + paraQuien.velocidad + (paraQuien.defensa / 2));
    miDefensa = paraQuien.defensa / 2
}

function defensa1(paraQuien) {
    miDefensa = paraQuien.defensa + paraQuien.velocidad;
    miAtaque = paraQuien.ataque;
}

function defensa2(paraQuien) {
    miDefensa = (paraQuien.defensa + (paraQuien.velocidad / 2))
    miAtaque = (paraQuien.ataque + (paraQuien.velocidad / 2));
}

function defensa3(paraQuien) {
    miDefensa = (paraQuien.defensa + paraQuien.velocidad + (paraQuien.ataque / 2));
    miAtaque = paraQuien.ataque / 2;
}

//ATAQUE SELECCION **
btnAta1.addEventListener("click", () => {
    btnAta1.classList.add("boton-activado");
    btnAta2.classList.remove("boton-activado");
    btnAta3.classList.remove("boton-activado");
    ataque1(miCarta);
    
})

btnAta2.addEventListener("click", () => {
    btnAta2.classList.add("boton-activado");
    btnAta1.classList.remove("boton-activado");
    btnAta3.classList.remove("boton-activado");
    ataque2(miCarta);
    
    
})

btnAta3.addEventListener("click", () => {
    btnAta3.classList.add("boton-activado");
    btnAta2.classList.remove("boton-activado");
    btnAta1.classList.remove("boton-activado");
    ataque3(miCarta);
    
    
})

//DEFENSA SELECCION **

btnDef1.addEventListener("click", () => {
    btnDef1.classList.add("boton-activado");
    btnDef2.classList.remove("boton-activado");
    btnDef3.classList.remove("boton-activado");
    defensa1(miCarta);
    
    
})

btnDef2.addEventListener("click", () => {
    btnDef2.classList.add("boton-activado");
    btnDef1.classList.remove("boton-activado");
    btnDef3.classList.remove("boton-activado");
    defensa2(miCarta);
    
    
})

btnDef3.addEventListener("click", () => {
    btnDef3.classList.add("boton-activado");
    btnDef2.classList.remove("boton-activado");
    btnDef1.classList.remove("boton-activado");
    defensa3(miCarta);
    
    
})


// COMANZAR / INICIAR BATALLA
const iniciarBatalla = document.querySelector("#iniciarbatalla");

let miAtaRes;
let miDefRes;
let txtFinal = document.querySelector("#txtfinal");

function resultado() {

    miAtaRes = miCarta.ataque - cartaRival.defensa;
    miDefRes = miCarta.defensa - cartaRival.ataque;


   
        cartaRival.vida - miAtaRes;
        HabilidadesVivoRival(cartaRival);
        if (miAtaRes > 0){
        txtFinal.innerHTML = "GOLPE EFECTIVO "

    }else{
        miCarta.vida - miAtaRes
    }

    
    if (miDefRes > 0) {
        cartaRival.vida - miDefRes;
        HabilidadesVivoRival(cartaRival);
        txtFinal.innerHTML = "LE GANASTE A " + cartaRival;
}else{
    miCarta.vida - miAtaRes
}
}





iniciarBatalla.addEventListener("click", () => {

    resultado();

})

//DIVIDIR EN FUNCIONES



