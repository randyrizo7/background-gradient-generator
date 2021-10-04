let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomize = document.querySelector(".randomize");
let randomizeAnimation = document.querySelector(".transition-colors");

let interval;



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
    if (interval) {
        clearInterval(interval)
    };
    body.style.background = 
    "linear-gradient(to right, " 
    + randomRGB()
    + ", " 
    + randomRGB()
    + ")";

    css.textContent = body.style.background + ";"
}

function randomGradientAnimator() {
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

function randomAnimator(){
    interval = setInterval(randomGradientAnimator, 1000);
    body.classList.toggle("gradient")
}



color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)

randomize.addEventListener('click', setRandomGradient)

randomizeAnimation.addEventListener('click', randomAnimator)