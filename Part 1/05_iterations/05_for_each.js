
const coding = ["js","ruby","cpp","python"]

// kuch loops array ki bydefault property hoti hai
// jese for each, map 


// coding.forEach(callbackfunction)

// coding.forEach(function print(item) {}) // since function is callback function so no name


coding.forEach(function (item) {
    // console.log(item)
})

// using arrow function
coding.forEach( (item) =>{
    console.log(item)
})

// for each has other parameters also

coding.forEach( (item,index,arr) =>{
    console.log(item,index,arr)
} )

// another but not mostly used


function primtMe(item){
    console.log(item)
}
coding.forEach(primtMe)

console.log("++++++++++++")
// for each on array of objet

const myObj = [
    {
        shortName:"js",
        fullName:"javascript"
    },
    {
        shortName:"py",
        fullName:"python"
    },
    {
        shortName:"ts",
        fullName:"typescript"
    }
]

myObj.forEach((item)=>{
    console.log(item.shortName,"-",item.fullName)
})