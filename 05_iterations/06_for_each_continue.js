const coding = ["js","ruby","cpp","python"]

const  values = coding.forEach( (item) =>{
    return item; // doesnot work here
})

// console.log(values) // undefined


const arr = [1,2,3,4,5,6,7,8,9,10]

// filter bhi apne ander callback he leta hai
// filter values return karta hai

let newarr = arr.filter( (num) => num > 4)
console.log(newarr)

let newarr1 = arr.filter( (num) => { // when we use this curly braces
    return num > 4 ; // most frequently done mistake
})
console.log(newarr1)


// filter using for each 
const newnums = []

arr.forEach((item) => {
    if(item>4){
        newnums.push(item)
    }
});

console.log(newnums)