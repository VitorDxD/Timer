let hText = document.getElementById("h");
let minText = document.getElementById("min");
let sText = document.getElementById("s");
let milText = document.getElementById("mil");

let btnIniciar = document.getElementById("iniciar");
let btnParar = document.getElementById("parar");
let btnResetar = document.getElementById("resetar");

let h = 00;
let min = 00;
let s = 00;
let mil = 00;

var interval;

function intervalo(){
    btnIniciar.style.display = "none";
    btnParar.style.display = "inline";
    interval = setInterval(iniciar, 10);
}

function iniciar(){
    
    mil++

    if (mil < 9){
        milText.innerHTML = "0" + mil;
    }
    if (mil > 9){
        milText.innerHTML = mil;
    }
    if (mil > 99){
        s++;
        sText.innerHTML = "0" + s;
        mil = 00;
        milText.innerHTML = "00";
    }
    if (s > 9){
        sText.innerHTML = s;
    }
    if (s > 59){
        min++;
        minText.innerHTML = "0" + min;
        s = 00;
        sText.innerHTML = "00";
    }
    if (min > 9){
        minText.innerHTML = min
    }
    if (min > 59){
        h++;
        hText.innerHTML = "0" + h;
        min = 00;
        minText.innerHTML = "00";
    }
}

function parar(){
    btnParar.style.display = "none";
    btnIniciar.style.display = "inline";
    clearInterval(interval);
}

function resetar(){
    btnParar.style.display = "none";
    btnIniciar.style.display = "inline";
    clearInterval(interval);
    hText.innerHTML = "00";
    minText.innerHTML = "00";
    sText.innerHTML = "00";
    milText.innerHTML = "00";
}