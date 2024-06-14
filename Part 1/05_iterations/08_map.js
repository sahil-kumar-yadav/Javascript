const arr = [1,2,3,4,5,6,7,8,9,10]

// sabke ander 10 add karna hai

const newarr = arr.map( (num) => num + 10)
const newarr1 = arr.map( (num) => { return num + 10})

// console.log(newarr)

// chaining 

const chainArr = arr.map((num) => num * 10).map((num)=> num + 1)
                    .filter((item)=> item > 40)

console.log(chainArr)