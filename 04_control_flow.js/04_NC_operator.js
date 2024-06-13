// Nullish Coalescinfg Operator (??):  null undefined

// ternary operator is different

// sirf null or undefined ky liye bana hai
let val1;
val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 15 // 15
val1 = undefined ?? 15 ?? 25 // 15 first value

console.log(val1)

