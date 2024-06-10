// console.log(2>1)
// console.log(2>=1)
// console.log(2>=1)
// console.log(2 ==1)
// console.log(2 !=1)

console.log("2">1) // ture
console.log("02">1) // ture

console.log(null > 0) // false 
console.log(null == 0) // false
console.log(null >= 0) // true

// comparison >= , <= and equality check a == b dono different chiz hai

// strict check

console.log("2" == 2) // true
console.log("2" === 2) // false --> compare both datatype as well as value

// Primitive

// 7 types : String ,Number,Boolen , null ,undefined,Symbol,Bigint

// Reference (non primitive)

// Array , Objects , Functions

// in javascript no need to give data type

const score = 100
const score1 = 100.100

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id == id2) // false

const heros = ["shaktiman","naagraj","doga"]

const myObj = {
    name:"sahil",
    age:10
}

const myfunction = function(){
    console.log("function called");
}
