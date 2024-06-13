

function myFun() {
    console.log("S")
    console.log("A")
    console.log("H")
    console.log("I")
    console.log("L")
}
myFun // reference
myFun(); // execution

// parameter
function addtwo(num1 ,num2){
    console.log(num1+num2)
}

function addtwo1(num1 ,num2){
  return (num1+num2)
}

// arguments
addtwo(3,4) // 7
addtwo(3,"4") // 34
addtwo(3,"a") // 3a

const result = addtwo1(3,5)

console.log("result ",result)

function loginUserMsg(username = "defualt user"){
    if (username === undefined) {
        console.log("please enter a username")
        return
    }
    if (!username) { // same thing
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

const res = loginUserMsg("sahil")
console.log(res)

const res1 = loginUserMsg()
console.log(res1)

console.log("++++++++++++++++")

// situation assume karo ki shoping application hai usme user cart my add kare he ja raha hai

// rest operator
// function calculateCartPrice(...num1){
//     return num1;
// }
function calculateCartPrice(val1,val2,...num1){
    // 2 values val1 , val2 my chlli gyi baki num1
    return num1;
}

console.log(calculateCartPrice(200,400,500,1000,2000))

// handing object in function

const user = {
    username:"Sahilkk",
    price:199
}

function handelObject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price} ${anyobj.prices}`)
}

handelObject(user)

handelObject({
    username:"msmss",
    price:399
})


//handling array in function

const myArr = [100,200,300,400]

function returnSecondValue(myArr){
    return myArr[1];
}

console.log(returnSecondValue(myArr))
console.log(returnSecondValue([10,20,30]))