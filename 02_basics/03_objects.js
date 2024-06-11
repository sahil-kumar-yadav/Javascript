// singleton - literal ki trah declare karte hai to singleton nahi banta

// two way to declare objects // constructor method and literal

// Object.create   -- constructor method

// object literals

// key and value

const mySym = Symbol("key1")
// access karne ky 2 tarike hai - .operator or [ ] sy
const myObj = {
    name: "sahil",
    age: 19,
    city: "Jaipur",
    email: "Sahil@google.com",
    isLoggedIn: false,
    lastLogin: ["monday", "saturday"],
    "full name": "Sahil yadav",
    mySymbol: "key1",
    [mySym]: "mykey" // uper vale symbol ko refer kar rahe hai

}

console.log(myObj.email) // Sahil@google.com
console.log(myObj["email"]) // same Sahil@google.com

// console.log(myObj.full name) // error , we can't access with this
console.log(myObj["full name"]) // correct way

console.log(typeof myObj.mySymbol) // string 
console.log(myObj[mySym])
console.log(typeof myObj[mySym])

myObj.email = "ks@email.com" // correct
// Object.freeze(myObj) // after this no changes will occur
myObj.email = "test@email.com" // correct
console.log(myObj)


console.log("++++++++++++++")

// functions ko bhi varible ki trh treat kar skte hai

myObj.greeting = function () {
    console.log("Hello User")
}

console.log(myObj.greeting) // [Function (anonymous)] yeh print karega
console.log(myObj.greeting()) // Hello User /n undefined -- print karega

myObj.greeting2 = function () {
    console.log(`Hello ${this.name}`)
}

console.log(myObj.greeting2()) // Hello User /n undefined -- print karega