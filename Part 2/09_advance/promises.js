// promise is a object

// jayadatar operation my hum promises consume he karte hai

// making promises

const promiseOne = new Promise(function (resolve, reject) {
    // DO any async task
    // DB calls , cryptography ,newtwork

    setTimeout(function () {
        console.log("Async task is completed")
        resolve() // then ko connect kar diya // isko console sy uper rakhege to bhi same he result aayega
    }, 1000);
})


// promise consume
promiseOne.then(function () {
    console.log("Promise Consumed");
})


//without storing in variable

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2")
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved")
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("promise Three")
        resolve({
            uername: "abc",
            email: "abc@mail.com"
        })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true;
        let error = false;
        if (!error) {
            resolve({
                username: "newabc",
                email: "newabc@mail.com"
            })
        }
        else {
            reject("ERROR: Something went wrong!")
        }
    }, 1000)
})


// promiseFour.then((user)=>{
//     console.log(user);
// }).catch(function(error){
//     console.log(error)
// })

promiseFour
.then(function(user){
    return user.username; // can't hold promese.then in a variable and extract username
}).then(function(username){
    console.log(username)
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    // yeh humesa exicute hoga
    console.log("The promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function () {
        // let error = true;
        let error = false;
        if (!error) {
            resolve({
                username: "javascript",
            })
        }
        else {
            reject("ERROR: JS went wrong!")
        }
    }, 1000)
})

async function consumePromiseFive(){

    // async function error handel nahi karta islye try catch block my rakhna padta hai
    try {
        const repsonse = await promiseFive
        console.log(repsonse) // jo bhi humara response resolve hoke aayega
    } catch (error) {
        console.log(error) // error jo rejection sy aa raha hai
    }
}

consumePromiseFive();

// https://jsonplaceholder.typicode.com/users

console.log("+++++++++++++++++++++++++++")
async function getAllUsers(){
    try {
        const repsonse = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await repsonse.json(); // await lagana jaruari hai because convert hone my bhi time lagta hai
        console.log(data);
    } catch (error) {
        console.log("E : ",error)
    }
}

// getAllUsers();

// .then.catch format my likhna hai 


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(){
    
// })
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error) => {
    console.log("dataerror: ",error)
})







