

// when refering to current context we use this keyword

const user = {
    username :"Sahil",
    price:999,
    welcomeMessage: function(){
        console.log(111,`${this.username}, welcome to codeSolutions`)
        console.log(this)
    },
    
}

user.welcomeMessage()
user.username = "newUser" // context change kar diya
user.welcomeMessage()

console.log(this) // {} current context empty hota hai nodejs


// browser ky ander my jo global object hai vo hai window object



function fun(){
    let username = "sahil"
    // console.log(this)
    console.log(this.username) // undefined 
}

fun()

console.log("++++++++++++++")

const fun1 = () => {
    console.log("Arrow function")
}

fun1()

// () => {} arrow fucntion

// implcit return
const addtwo = (n1,n2) => (n1 + n2) ; // curly braces use hua to return keyword use karna padega

const add = (n1,n2) => ({user:"abc"}) ; // curly braces use hua to return keyword use karna padega



console.log(addtwo(1,2))
console.log(add(1,2))