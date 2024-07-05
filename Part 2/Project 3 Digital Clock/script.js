
const time = document.querySelector('#time')
const date = document.querySelector('#date')

let dateobj;

setInterval(function () {
    dateobj = new Date();
    time.innerHTML = dateobj.toLocaleTimeString()
    date.innerHTML = dateobj.toLocaleDateString()
}, 1000)


function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12; // Convert to 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.querySelector('.hour');
    const minHand = document.querySelector('.min');
    const secondHand = document.querySelector('.second');

    const hourDeg = (360 / 12) * hours - 180 ;
    const minDeg = (360 / 60) * minutes  - 180 ;
    const secondDeg = (360 / 60) * seconds - 180 ;

    minHand.style.transform = `rotate(${minDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    

}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial update
