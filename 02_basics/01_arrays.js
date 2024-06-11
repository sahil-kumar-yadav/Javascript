// array

// () - parenthisis
// [] - square braket
// {} - curly braces

const myArr = [1,2,3,4,true,"sahil"]

const arr = ["shaktiman","naajraj"]

const arr2 = new Array(1,2,3,4)
console.log(myArr[0])
console.log(myArr[5])

// Array methods 
myArr.push(6) // push 6 to myarr
console.log(myArr)
myArr.pop() // remove last value

myArr.unshift(9) // add 9 to startig to array and then shift array to right
myArr.shift() // shift array to left

console.log(myArr.includes("sahil")) // true

console.log(myArr.indexOf("sahil")) // 5 // -1 if not found

const arr3 = arr2.join() // array ky saare elements ko add kar diya
console.log(arr2)
console.log(arr3)
console.log(typeof arr3) // string

// slice and splice
console.log("++++++++++")
const ar = [0,1,2,3,4,5]
console.log("Original ",ar)

const newar = ar.slice(1,3)
console.log("slice ",newar)

const newar2 = ar.splice(1,2) // start and end location of include rest exclude // splice() method is used to modify the original array by removing, replacing, or adding elements.
console.log("splice ",newar2)

