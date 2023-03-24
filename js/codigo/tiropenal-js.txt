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
        codigoSel.innerHTML = '<iframe src="../js/codigo/tiropenal-html.txt"></iframe>';
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
        codigoSel.innerHTML = '<iframe src="../js/codigo/tiropenal-css.txt"></iframe>';
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
        codigoSel.innerHTML = '<iframe src="../js/codigo/tiropenal-html.txt"></iframe>';
    }
})

const penalPortada = document.querySelector("#penalportada");

const penalContainer = document.querySelector("#penalcontainer");

const btnEntrar = document.querySelector("#btnentrar");

const btnPenalVolver = document.querySelector("#btn-penal-volver");

let namePlayer = undefined;
let numNameHuman = undefined;

btnEntrar.addEventListener("click", () => {
    namePlayer = document.querySelector("#ingresanombre").value;
    numNameHuman = namePlayer;
    penalPortada.style.display = "none";
    penalContainer.style.display = "flex";
    tablero();
})

btnPenalVolver.addEventListener("click", () => {
    namePlayer = undefined;
    numNameHuman = undefined
    penalPortada.style.display = "block";
    penalContainer.style.display = "none";
})

const btnEasy = document.getElementById("btn-easy");

const btnHard = document.getElementById("btn-hard");

const btnReset = document.getElementById("btn-reset");

let dificultadSi = false;

let humanScore = 0;

let cpuScore = 0;

// SELECCION DE LADOS DEL ARCO **
let lado1 = document.getElementById("arco-lado-1");
let lado2 = document.getElementById("arco-lado-2");
let lado3 = document.getElementById("arco-lado-3");
let lado4 = document.getElementById("arco-lado-4");
let lado5 = document.getElementById("arco-lado-5");
let lado6 = document.getElementById("arco-lado-6");

// SELECCION Y ARMADO DEL SCORE ** 
function tablero() {
    document.getElementById("name-player").innerHTML = namePlayer.toUpperCase();
    document.getElementById("numNameH").innerHTML = numNameHuman.toUpperCase();
    document.getElementById("cpu-score").innerHTML = cpuScore;
    document.getElementById("human-score").innerHTML = humanScore;
}

// ARMADO DE HISTORIAL DE LADOS ELEGIDOS **
numH = [];
numC = [];
function numeroH() {
    if (numH.length >= 30) {
        numH.splice(0, 30)
    }
}
function numeroC() {
    if (numC.length >= 30) {
        numC.splice(0, 30);
    }
}

// VERIFICACION DE MODO HARD/EASY Y EJECUCION DE PENAL **
function iniciaTanda(direc) {
    if (dificultadSi) {
        modoHardPenalEjecutado(direc);
    } else {
        penalEjecutado(direc);
    }
}

// MODO HARD - EJECUCION DE PENAL **
function modoHardPenalEjecutado(direc) {
    randomEasy6 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    if (randomEasy6 >= 4) {
        document.getElementById("cpu-score").innerHTML = ++cpuScore;
        document.getElementById("cpu-dir").innerHTML = "Atajada!";
        document.getElementById("human-dir").innerHTML = ":-(";

    } else {
        document.getElementById("human-score").innerHTML = ++humanScore;
        document.getElementById("cpu-dir").innerHTML = ":-(";
        document.getElementById("human-dir").innerHTML = "Gool!";
    }

    console.log(namePlayer + "---SCORE---" + humanScore);
    console.log("CPU SCORE---" + cpuScore);
    console.log("---------------------");
    numH.unshift(direc);
    numC.unshift(randomEasy6);
    numeroC();
    numeroH();
    document.getElementById("numHuman").innerHTML = numH;
    document.getElementById("numCpu").innerHTML = numC;
}

// MODO EASY - EJECUCION DE PENAL **
function penalEjecutado(direc) {
    randomEasy6 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    if (randomEasy6 == direc) {
        document.getElementById("cpu-score").innerHTML = ++cpuScore;
        document.getElementById("cpu-dir").innerHTML = "Apunto al " + randomEasy6;
        document.getElementById("human-dir").innerHTML = "Apunto al " + direc;

    } else {
        document.getElementById("human-score").innerHTML = ++humanScore;
        document.getElementById("human-dir").innerHTML = "Apunto al " + direc;
        document.getElementById("cpu-dir").innerHTML = "Apunto al " + randomEasy6;
    }

    console.log(namePlayer + "---TIRO AL---" + direc);
    console.log("CPU TIRO AL---" + randomEasy6);
    console.log(namePlayer + "---SCORE---" + humanScore);
    console.log("CPU SCORE---" + cpuScore);
    console.log("---------------------");
    numH.unshift(direc);
    numC.unshift(randomEasy6);
    numeroC();
    numeroH();
    document.getElementById("numHuman").innerHTML = numH;
    document.getElementById("numCpu").innerHTML = numC;
}

// BOTONES EASY / RESET / HARD **
btnEasy.addEventListener("click", () => {
    btnEasy.style.background = "#3a6";
    btnHard.style.background = "#555";
    dificultadSi = false;
})

btnHard.addEventListener("click", () => {
    btnHard.style.background = "#a36";
    btnEasy.style.background = "#555";
    dificultadSi = true;
})

btnReset.addEventListener("click", () => {
    cpuScore = 0;
    humanScore = 0;
    document.getElementById("cpu-score").innerHTML = cpuScore;
    document.getElementById("human-score").innerHTML = humanScore;
    console.log("---------------------");
    console.log(namePlayer + "---SCORE---" + humanScore);
    console.log("CPU SCORE---" + cpuScore);
    numC.splice(0, numC.length);
    numH.splice(0, numH.length);
    document.getElementById("numHuman").innerHTML = numH;
    document.getElementById("numCpu").innerHTML = numC;
})

// ELECCION DE LADO Y PASO DE PARAMETRO PARA ELECCION DE MODO Y LUEGO LA EJECUCION DEL PENAL **
lado1.addEventListener("click", () => {
    iniciaTanda(1);

})
lado2.addEventListener("click", () => {
    iniciaTanda(2);

})
lado3.addEventListener("click", () => {
    iniciaTanda(3);

})
lado4.addEventListener("click", () => {
    iniciaTanda(4);

})
lado5.addEventListener("click", () => {
    iniciaTanda(5);

})
lado6.addEventListener("click", () => {
    iniciaTanda(6);

})