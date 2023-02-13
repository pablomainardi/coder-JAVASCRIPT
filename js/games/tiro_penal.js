
const btnIniciar = document.getElementById("btn-iniciar");

const btnReset = document.getElementById("btn-reset");


let humanScore = 0;

let cpuScore = 0;

let namePlayer = prompt("Ingresa tu nombre o apodo");



document.getElementById("name-player").innerHTML = namePlayer;
document.getElementById("cpu-score").innerHTML = cpuScore;
document.getElementById("human-score").innerHTML = humanScore;



function penalEjecutado() {

    let disparoDireccion = prompt("Elije la direccion donde quieres PATEAR con los numeros del 1 al 6!");
  
    let randomShoot = Math.ceil(Math.random() * (6 - 1) + 1);

    if (randomShoot == disparoDireccion) {
        document.getElementById("cpu-score").innerHTML = ++cpuScore;
        document.getElementById("cpu-dir").innerHTML = "Apunto al " + randomShoot;
        document.getElementById("human-dir").innerHTML = "Apunto al " + disparoDireccion;

    } else {
        document.getElementById("human-score").innerHTML = ++humanScore;
        document.getElementById("human-dir").innerHTML = "Apunto al " + disparoDireccion;
        document.getElementById("cpu-dir").innerHTML = "Apunto al " + randomShoot;


    }
    console.log(namePlayer+"---TIRO AL---"+disparoDireccion);
    console.log("CPU TIRO AL---"+randomShoot);
    console.log(namePlayer+"---SCORE---"+humanScore);
    console.log("CPU SCORE---"+cpuScore);
    console.log("---------------------");
}



for (i=0; i<5; i++) {
    let randomShoot = Math.ceil(Math.random() * (6 - 1) + 1);
console.log(randomShoot)}


btnIniciar.addEventListener("click", () => {
    penalEjecutado();
    
  
})

btnReset.addEventListener("click", () => {
    cpuScore = 0;
    humanScore = 0;
    document.getElementById("cpu-score").innerHTML = cpuScore;
    document.getElementById("human-score").innerHTML = humanScore;
    console.log("---------------------");
    console.log(namePlayer+"---SCORE---"+humanScore);
    console.log("CPU SCORE---"+cpuScore);
})


