const name = "sahil"
const repocount = 50

// console.log(name+repocount+"value") // not used nowadays

// use of backticks 

console.log(`hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String('Sahil-kumar-yadav') // string ka constructor --> console my jake saare methods dekh skte hai
// isse hume bhut saare methods mill jayege or yeh return object karega

console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

// string methods
const newString = gameName.substring(0,2)
console.log(newString)

const nwString = gameName.slice(-4,2)
console.log("newstring ",nwString)

const str = "  string with space  "
console.log(str)
console.log(str.trim()) // remove starting and ending spaces

const url = "https://sahil.com/sahil%20yadav"

console.log(url.replace('%20','-'))
console.log(url) // isme change nahi hua hai

console.log(url.includes('sahil')) // check if present or not

console.log(gameName.split('-')) // convert to array

