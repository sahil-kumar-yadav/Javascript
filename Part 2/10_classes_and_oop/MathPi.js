// Object.getOwnPropertyDescriptor(Math)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter)

const chai = {
    name: "ginger chai",
    price: 120,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nahi bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//  }

Object.defineProperty(chai,"name",{
    writable:false,
    // enumerable:false // dikhegi he nahi
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// chai.name = "tea"
console.log(chai) // { name: 'ginger chai', price: 120, isAvailable: true }

for (let [key,value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`)
    }
}


// use case jese kisi object py loop laga rahe hai or kuch property py loop nahi karna chate to enumrable false kar denge