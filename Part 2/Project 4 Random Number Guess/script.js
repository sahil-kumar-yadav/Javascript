const userInput = document.querySelector('#userInput')
const submitGuess = document.querySelector('#submitGuess')
const showguess = document.querySelector('.showGuess')
const result = document.querySelector('.result')
const showHint = document.querySelector('.showHint')
const restart = document.querySelector('#restart')

let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber);
let gameON = true
let win = false;
let count = 1;

restart.addEventListener('click',function(e){
    e.preventDefault();
    gameRestart();
    if(gameON){
        restart.setAttribute("disabled", "");
    }
})

submitGuess.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log(userInput.value);
    let guess = userInput.value;
    if (gameON) {
        checkValid(guess);
    }
    

})

function checkValid(guess) {
    
    if (count <= 3) {
        if(guess >  100 && guess <1){
            showHint("Enter a valid Number between 0 to 100");
            userInput.value = ""
            count--;
        }
        else if (randomNumber == guess) {
            win = true;
            showMsg("You Won !!");
            showResult();
            gameRestart();

        }
        else {
            userInput.value = ""
            showHintMsg(guess);
            appendGuess(guess);
        }
        count++;
    }
    else {
        win = false;
        showMsg("Game over");
        showResult();
        gameRestart();

    }
}

function showResult() {
    if(win){
        result.innerHTML = 'You Won '
    }
    else{
        result.innerHTML = 'You Lose '
    }
    result.innerHTML += `Correct Number was ${randomNumber}`
}

function gameRestart() {
    restart.removeAttribute("disabled", "");
    randomNumber = parseInt(Math.random() * 100 + 1)
    count = 1;
    userInput.value = ""
    result.innerHTML = ""
    showHint.innerHTML = "Enter the number to play"
    showguess.innerHTML = ""
    gameON = true;
    
    win = false;
}

function appendGuess(guess) {
    showguess.innerHTML += `${guess} `
}

function showMsg(msg) {
    alert(msg)
}

function showHintMsg(guess) {
    if (randomNumber < guess) {
        showHint.innerHTML = "You Guess is Too Big ";
    }
    else {
        showHint.innerHTML = "You Guess is Too Small ";
    }
}