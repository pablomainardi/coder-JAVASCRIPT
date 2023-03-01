
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
    etapa1.style.display = "block";   
    
};

btnIrEtapa1.addEventListener("click", () => {
    irEtapa1();
});
 // VOLVER A PORTADA - BTN VOLVER A PORTADA **
 function irPortada() {
    etapa1.style.display = "none";
    etapa2.style.display = "none";
    btnIrEtapa1.style.display = "block";
}

btnIrPortada.addEventListener("click", () => {
    irPortada();
});

// IR A ETAPA 2 - BTN IR A BATALLA **
function irEtapa2() {
    etapa1.style.display = "none"; 
    etapa2.style.display = "block";
   
};

btnIrEtapa2.addEventListener("click", () => {
    irEtapa2();
});

// VOLVER A INICIO - BTN VOLVERINICIO **
function volverInicio() {
    etapa2.style.display = "none";
    etapa1.style.display = "block";   
    
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
    //ataque();
    //defensa();
  }

  const carta1 = new Monstruos("Enrique",100,50,30,40,"Mago",'<img src="./cardjsbattle/carta1.jpg" alt="imagen carta 1">');
  const carta2 = new Monstruos("Lidia",80,70,70,20,"Guerrero",'<img src="./cardjsbattle/carta2.jpg" alt="imagen carta 2">');
  const carta3 = new Monstruos("Mario",120,40,50,60,"Guerrero",'<img src="./cardjsbattle/carta3.jpg" alt="imagen carta 3">');
  const carta4 = new Monstruos("Eusevio",90,60,40,50,"Mago",'<img src="./cardjsbattle/carta4.jpg" alt="imagen carta 4">');
  const carta5 = new Monstruos("Marcela",110,30,60,70,"Guerrero",'<img src="./cardjsbattle/carta5.jpg" alt="imagen carta 5">');
  const carta6 = new Monstruos("Monica",70,80,20,30,"Mago",'<img src="./cardjsbattle/carta6.jpg" alt="imagen carta 6">');
 

   const cartas = [carta1, carta2, carta3, carta4, carta5, carta6];

//ETAPA 1 -- ** ELECCION DE CARTA******** */

const imgCarta1 = document.querySelector("#f1-i1-img1");
const imgCarta2 = document.querySelector("#f1-i1-img2");
const imgCarta3 = document.querySelector("#f1-i1-img3");
const imgCarta4 = document.querySelector("#f1-i1-img4");
const imgCarta5 = document.querySelector("#f1-i1-img5");
const imgCarta6 = document.querySelector("#f1-i1-img6");

const imgCartas = [imgCarta1,imgCarta2,imgCarta3,imgCarta4,imgCarta5,imgCarta6];






// ETAPA 1 -- SELECCIONAR CARTA Y MOSTRAR HABILIDADES

let cartaSeleccionada = null;

let cartaActiva = cartaSeleccionada;


function mostrarHab(cartaSeleccionada) {
    document.querySelector("#skillVida").innerHTML = "VIDA............" + cartaSeleccionada.vida;
    document.querySelector("#skillAtaque").innerHTML = "ATAQUE..........." + cartaSeleccionada.ataque;
    document.querySelector("#skillVelocidad").innerHTML = "VELOCIDAD......." + cartaSeleccionada.velocidad;
    document.querySelector("#skillDefensa").innerHTML = "DEFENSA........."+ cartaSeleccionada.defensa;
    document.querySelector("#skillClase").innerHTML = "CLASE........." + cartaSeleccionada.clase;
}



// VER COMO ACTIVAR OTRA VEZ BLUR CUANDO CLICKEA OTRA CARTA

imgCarta1.addEventListener("click", ()=>{
   document.querySelector("#f1-i4-imgcarta").innerHTML = carta1.img;
    document.querySelector("#nombrecarta").innerHTML = carta1.nombre;
    cartaSeleccionada = carta1;
    mostrarHab(cartaSeleccionada);
    
})
imgCarta2.addEventListener("click", ()=>{
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta2.img;
    document.querySelector("#nombrecarta").innerHTML = carta2.nombre;
    cartaSeleccionada = carta2;
    mostrarHab(cartaSeleccionada);
    
})
imgCarta3.addEventListener("click", ()=>{
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta3.img;
    document.querySelector("#nombrecarta").innerHTML = carta3.nombre;
    cartaSeleccionada = carta3;
    mostrarHab(cartaSeleccionada);
    
})
imgCarta4.addEventListener("click", ()=>{
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta4.img;
    document.querySelector("#nombrecarta").innerHTML = carta4.nombre;
    cartaSeleccionada = carta4;
    mostrarHab(cartaSeleccionada);
    
})
imgCarta5.addEventListener("click", ()=>{
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta5.img;
    document.querySelector("#nombrecarta").innerHTML = carta5.nombre;
    cartaSeleccionada = carta5;
    mostrarHab(cartaSeleccionada);
    
})
imgCarta6.addEventListener("click", ()=>{
    document.querySelector("#f1-i4-imgcarta").innerHTML = carta6.img;
    document.querySelector("#nombrecarta").innerHTML = carta6.nombre;
    cartaSeleccionada = carta6;
    mostrarHab(cartaSeleccionada);
    
    
})





// ETAPA 2 
