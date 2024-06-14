

// {} // scope

var c = 300 // gadbad hai
// let c = 32 // sahi hai 
let a = 400
if (true) {
    let a = 10
    console.log("Inner A ",a) // 10
    const b = 20
    var c = 30 // yeh bekar hai , isko use mat karo
    // c = 30 // yeh bhi var he hai
}

// console.log(a) // 400 and  if a is not defined globally ReferenceError: a is not defined
// console.log(b) // ReferenceError: b is not defined
console.log(c)


console.log("++++++++++++")


function one(){
    const username = "sahil"

    function two(){ // clouser property inner function can access property of outer function
        const website = "youtube"
        console.log(username)
    }

    // console.log(website) // out of scop 

    two()
}

one()

if(true){
    const name = "sahil"

    if(name === "sahil" ){
        const website = "bingo"
        console.log(name + website)
    }
    // console.log(website) // out of scope
}

// ++++++++++ interesting +++++++++++
console.log("+++++++++++++")

console.log(addone(5)) // here also 6 i.e before function declaration

function addone(num){
    return num + 1;
}

console.log(addone(5)) // 6


console.log(addTwo(5)) // error

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5)) // 5 + 2 = 7