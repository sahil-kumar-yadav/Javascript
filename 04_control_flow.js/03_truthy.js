const user1 = "user1"
const user2 = ""

if (user1) {
    console.log("user is present") // this will be executed
} else {
    console.log("user is not present")
}

if (user2) {
    console.log("user is present")
} else {
    console.log("user is not present") // this will be executed
}

// falsy values 

// false, 0, -0 , "", 0n, null , undefined , NaN 

// truthy value

// "0" , 'false', " "(space) , [] , {} , function(){} 

// check 

const arr = []

if(arr.length === 0) {
    // array is empty
}

const obj = {}

if(Object.keys(obj).length === 0){
    console.log("Object is empty")
}