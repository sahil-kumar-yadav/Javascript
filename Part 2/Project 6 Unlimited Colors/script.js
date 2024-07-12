
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const body = document.querySelector("body")


// generate a random color

const randomColor = function () {
    const hex = "012345679ABCDEF"
    let color = "#";
    for (let i = 0; i < 6 ; i++) {
        let randomNumber = Math.floor(Math.random()*15);
        color += hex[randomNumber];
    }
    return color;
}

// console.log(randomColor());

const changeBackground = function(){
    body.style.background = `${randomColor()}`;
    // body.style.background = "green"
}
let ref;
start.addEventListener('click',function(){
    if(!ref)
        ref = setInterval(changeBackground,1000);
})

stop.addEventListener('click',function(){
    clearInterval(ref);
    ref = null;
})

