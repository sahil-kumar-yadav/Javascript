let score = 33

let score1 = "33"
console.log(typeof score);
console.log(typeof(score));
console.log(typeof(score1));

let valueInNumber = Number(score)
console.log(valueInNumber)
score = "33a"
valueInNumber = Number(score)
console.log(valueInNumber)

score = null;
valueInNumber = Number(score)
console.log(valueInNumber)

console.log(typeof(valueInNumber))

// "33" => 33
// "33abc" => NaN
// true => 1 : false => 0
// 1 => ture
// "" => false
// "sahil" = true

let someNumber = 33
let srtingNumber = String(someNumber)
console.log("type of someNumber ",typeof srtingNumber);

// ********************** Operations ****************************
console.log("Operations ")

let value = 3
let negvalue = -value
console.log("negvalue",negvalue)


console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**2) // power
console.log(2%2)

let str1 = "sahil"
let str2 = " yadav"
let str3 = str1 + str2
console.log(str3)


console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32
// use parenthisis in real project

console.log(+true) // 1
console.log(+"") // 0

let num1,num2,num3
num1 = num2 = num3 = 2 + 2

let gamecounter = 100
++gamecounter; // prefix and postfix
console.log(gamecounter)

