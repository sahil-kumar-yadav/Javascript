// refrence - 1 jan 1970
// calculated in millisecond
// abhi nahi kaam kar raha console.log(Temporal.Now.timeZone())

let myDate = new Date()
console.log(myDate) // 2024-06-10T12:03:39.346Z
console.log(myDate.toString())
console.log(myDate.toDateString()) // Mon Jun 10 2024 17:32:48 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // 10/6/2024, 5:35:12 pm
console.log(myDate.toLocaleString()) // 10/6/2024
console.log(myDate.toLocaleDateString()) //10/6/2024
console.log(myDate.toLocaleTimeString()) // 5:35:31 pm
console.log(myDate.toJSON()) // 2024-06-10T12:03:39.346Z
console.log(myDate.toISOString()) // 2024-06-10T12:03:39.346Z

console.log(typeof myDate) // object

let mycreatedDate = new Date(2014,0,23) // Thu Jan 23 2014

console.log(mycreatedDate)
console.log(mycreatedDate.toDateString())

let mycreatedDatetime = new Date(2014,0,23,5,3) 
console.log(mycreatedDatetime.toLocaleString()) // 23/1/2014, 5:03:00 am


let mynewdate = new Date("2021-01-10") // yyyy-mm-dd
console.log(mynewdate.toLocaleDateString()) // 10/1/2021
let mynewdate1 = new Date("01-10-2010") // mm-dd-yyyy
console.log(mynewdate1.toLocaleDateString()) // 10/1/2010

console.log("+++++++++++");


let myTimeStamps = Date.now();  // quizes,polles design karege tabh use karge - kisne fastest answer kiya hai
let datenew = new Date("10-10-2024")
console.log(myTimeStamps)
console.log(datenew.getTime())

console.log(Math.floor(Date.now()/1000)) // secs my value chaheye to


// other date methods
let datenow = new Date()
console.log(datenow.getDate())
console.log(datenow.getMonth()) // ek piche millega // 0 sy start ho raha hai
console.log(datenow.getFullYear())

// `${datenew} and the time is `

const finaldate = datenow.toLocaleString('default',{
    weekday:"long",
})





