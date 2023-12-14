const pn = document.querySelector(".yourpost-now");
const mode = document.querySelector(".resized-image");
const body = document.querySelector(".body");
const txt = document.getElementsByTagName("a");

function post(){
    if(pn){
    pn.classList.toggle("yourpost-now-play");
    }else{
        pn.classList.toggle("yourpost-now");
    }
}

function darknight(){
    if (mode.src.includes("day-mode.png")){
        mode.src = "dark-mode.png"
    }else{
        mode.src = "day-mode.png"
    }
}

function darknight2(){
    if (body) {
        body.classList.toggle("body-dark")
        txt.innerHTML = ("a1")
    }else{
        body.classList.toggle("body")
    }
}

