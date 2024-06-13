// if statement


const condition = true

if (condition) {
    
}

// comparison operator
// <,>,>=,<=,==,===(value + datatype), !=,!==

const temprature = 41

if(temprature < 50){
    console.log("temprature less than 50")
}
else{
    console.log("temprature greater than 50")
}


const score = 200

if (score > 100) {
    const power = "fly" // block scope
}

// console.log(power) // error

const balance = 400

if (balance > 500) console.log("balance greater than 500")


// if else if
// const condition1 = condition2 = condition3 = false // only cond 1 will be assigned false 

const condition1 = false
const condition2 = false
const condition3 = false
if (condition1) {
    console.log("if")
}
else if (condition2) {
    console.log("else if 1")
}
else if (condition3) {
    console.log("else if 2")
}


const loggedIn = false
const debitCard = true

if(loggedIn && debitCard && ture) {
    // not executed
}

if(loggedIn || (debitCard && ture)) {
    // may be executed
}