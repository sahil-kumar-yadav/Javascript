let marvel_heros = ["thor", "IronMan", "spiderman"]
let dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // pura array ek sath push kar dega [ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 

// console.log(marvel_heros)
// console.log(marvel_heros[3][1]) // flash

marvel_heros.concat(dc_heros) // a + b kar dega
console.log(marvel_heros[4])

let arr = ["s","a","h"]
let arr2 = ["f","g"]

const arr3 = arr.concat(arr2) // koi bhi method original array my change nahi karega // return karta hai new array
console.log(arr3) // [ 's', 'a', 'h', 'f', 'g' ]
console.log(arr)

const allhero = [...marvel_heros,...dc_heros] // spread operator 
console.log(allhero) // [ 'thor', 'IronMan', 'spiderman', 'superman', 'flash', 'batman' ]

const ar = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_ar = ar.flat(Infinity) //  Infinity -- 3 depth-

console.log(real_ar) // [     1, 2, 3, 4, 5,    6, 7, 6, 7, 4,    5  ]

console.log(Array.isArray("Sahil")) // false // puch rahe hai
console.log(Array.from("Sahil")) //[ 'S', 'a', 'h', 'i', 'l' ] // any datatype object,json convert kar rahe hai 

console.log(Array.from({name:"sahil"})) // it won't covert we have to tell him key or value to convert into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ]