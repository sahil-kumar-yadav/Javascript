const arr = [1,2,3,4]


// intialize
// accumulator , current value
const total = arr.reduce(function (acc,currvalue){
    console.log(`acc: ${acc} and currvalue:${currvalue}`)
    return acc + currvalue;

},0)

console.log(total)


const total1 = arr.reduce( (acc,currvalue) =>   acc + currvalue,0)

console.log(total1)

const shoppingCart = [
    {
        item:"js",
        price:2999
    },
    {
        item:"cpp",
        price:999
    },
    {
        item:"python",
        price:299
    },
    {
        item:"cpp",
        price:99
    },
]


const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceToPay)