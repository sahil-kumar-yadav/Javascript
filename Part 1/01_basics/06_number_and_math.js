const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString()) // abh yeh string ban gya
console.log(balance.toString().length)
console.log(balance.toFixed(2)) // to precision value 

const num = 23.866

console.log(num)
console.log(num.toPrecision(3)) // 23.9 --> 3 value tak precise kr dega i.e 3 value tak round-off kar dega

const num1 = 100000000
console.log(num1.toLocaleString('en-IN')) // commas laga denge taki accha dikhe

// +++++++++++ Maths library +++++++++++++

console.log(Math.PI)
console.log(Math.abs(-2))
console.log(Math.round(2.43)) // 2
console.log(Math.round(2.63)) // 3
console.log(Math.ceil(2.53)) // 3 // upper value lega
console.log(Math.floor(2.93)) // 2 // lower value lega
console.log(Math.min(4,3,2,1)) // 1
console.log(Math.max(4,3,2,1)) // 1

console.log(Math.random()) // value always blw 0-1
console.log((Math.random()*10) + 1) // value always blw 0-1
console.log(Math.floor(Math.random()*10) + 1) // value always blw 0-1

const min = 10
const max = 20

console.log(Math.floor( Math.random() *(max - min + 1)) + min)