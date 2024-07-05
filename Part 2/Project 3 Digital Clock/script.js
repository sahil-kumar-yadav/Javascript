
const time = document.querySelector('#time')
const date = document.querySelector('#date')

let dateobj;

setInterval(function () {
    dateobj = new Date();
    time.innerHTML = dateobj.toLocaleTimeString()
    date.innerHTML = dateobj.toLocaleDateString()
}, 1000)

