const course = {
    coursename:"Js in Hindi",
    price:999,
    instructor:"Hitesh"
}

// course.instructor  -- one way


// object destructuring 

// kya value extract karni hia -- kaha sy karni hai
const {instructor} = course

// new variable
const {price:p} = course

console.log(instructor) // Hitesh
console.log(p) // 999

console.log("++++++++ api ++++++")

// apna kaam kisi or k sir py daal dena usi ko api bolte hai

// api sy value aati hai Json ki form my

// json  -- > javascript object notataion

// {
    // yeh he json hai -- iska koi naam nahi hai bss
// }

// {   // string - string
//     "name":"sahil",
//     "coursename":"Js in hindi",
//     "price":"free"
// }


// my github api --  https://api.github.com/users/yadavsk098

// kayi baar api array ki form my millegi

[
    {},
    {},
    {}
]

// https://randomuser.me/api/