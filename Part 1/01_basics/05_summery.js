// Stack (Primitivie) Heap(Non-Primitive)

let myname = "Name"
let name1 = myname // copy is given

console.log(myname,name1)

myname = "sahil"

console.log(myname,name1)

let user1 = {
    name:"Abhisek"
}

let user2 = user1;

console.log(user1.name)

user2.name = "newName"

console.log(user1.name) // because no ref is created 