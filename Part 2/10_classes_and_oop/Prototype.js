let myName = "Sahil         "
let myFriend = "arun"

// console.log(myName.length)
// console.log(myName.trim().length) // 5

// console.log(myName.trueLength());


let arr = [1,2,3]

let heroPower = {
    thor:"hammer",
    spiderman:"sling"

}

// top level py he insert kar di
Object.prototype.sahil = function(){
    console.log("Sahil is present in all object")
}

Array.prototype.sayHello = function(){
    console.log("Hello from Sahil")
}


heroPower.sahil();
arr.sahil();


arr.sayHello(); // sirf isko power di hai
// heroPower.sayHello(); // sirf array my inject kiya hai to error dega

// inheritance 

const User = {
    name:"kumar",
    eamil:"cjd@gmail.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:"Js assignment",
    fullTime:true,
    __proto__:TeachingSupport
}


Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let another = "sahil       ";

String.prototype.trueLength =  function(){
    console.log(this)
    console.log(`True length is ${this.trim().length}`)
}

another.trueLength();


