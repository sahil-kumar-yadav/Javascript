// object with help of constructor

// const tinderUser = new Object() // singleton object 
const tinderUser = {} //non sigleton object

console.log(tinderUser) // same for both

tinderUser.id = "abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    details:{
        fullname:{
            fname:"Sahil",
            lname:"Yadav"
        }
    }
}

console.log(regularUser.details)
console.log(regularUser.details.fullname) // { fname: 'Sahil', lname: 'Yadav' }
console.log(regularUser.details?.fullnamee) // undefined

// dot lagte jao access karte jao

// combinig objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2} // object ky ander object aa jayega { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }  

// const obj3 = Object.assign(obj1,obj2) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } // problem - obj1 my bhi saari ki saari ki saari values ja rahi hai
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// Object.assign(destination,source1,source2,....)

// generally   Object.assign({},s1,s2,....)

// const obj3 = Object.assign({},obj1,obj2) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } //
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1) // { '1': 'a', '2': 'b' }

// latest method
const obj3 = {...obj1,...obj2}
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1) // { '1': 'a', '2': 'b' }

const users = [
    {
        id:1,
        email:"sa@mail.com"
    },
    {
        id:2,
        email:"sa@mail.com"
    },
    {
        id:3,
        email:"sa@mail.com"
    }
]

// users[1].email

console.log("++++++++++++++") 

// getting key and values from object 

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // return a array of keys [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // return array of values [ 'abc', 'sam', false ]
console.log(Object.entries(tinderUser)) // return array of key value pair [ [ 'id', 'abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ] 

// check any value in object  

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true
console.log(tinderUser.hasOwnProperty('isLogged')) // false