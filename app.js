let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomize = document.querySelector(".randomize");



function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";"
}




function setRandomGradient() {
    //color1.value = randomRGB();
    //color2.value = randomRGB();
    body.style.background = 
    "linear-gradient(to right, " 
    + randomRGB()
    + ", " 
    + randomRGB()
    + ")";

    css.textContent = body.style.background + ";"
}
 

//body.style.background= randomRGB();


color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)

randomize.addEventListener('click', setRandomGradient)