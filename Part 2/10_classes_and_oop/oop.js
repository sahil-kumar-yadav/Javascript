// object literal --> literally ek object banana 

const user = {
    username : "sahil",
    loginCount: 8,
    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(username) // ReferenceError: username is not defined
        console.log(this.username)
        console.log(this) // pura object hai iske pass
    }
}

console.log(user.username)
console.log(user.getUserDetails())
console.log(this) // nodejs my empty hai but browser my empty nahi hoga
// console.log({username})

// monday - monday hai but konse week ka monday hai  --> this (current context)


// - Constructor function

// const promiseOne = new Promise();
// const date = new Date();


function User(username,loginCount,isLoggedIn){
    this.username = username;// this.username --> function context
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    

    this.greeting = function(){
        console.log("welcome ",this.username)
    }
    return this; // pura object he pass
}

// const userOne = User("Sahi",12,true)
// const userTwo = User("Kumar",11,false) // old instance py he rewrite karta hai

// that's why we use new keyword

const userOne = new User("Sahi",12,true) // new instance using new keyword
const userTwo = new User("Kumar",11,false)

console.log('++++++++++++++')
console.log(userOne)
console.log(userTwo)

// instance of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

