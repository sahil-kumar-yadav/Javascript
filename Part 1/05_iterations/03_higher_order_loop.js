// for of

// ["","",""]
// [{},{},{}]


const arr = [1,2,3,4,5]

for (const iterator of arr) {
    // console.log(iterator)
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(greet) // each charcter
}


// Maps

const map = new Map() // unique value
map.set('in','india')
map.set('fr','France')
map.set('cn','china')
map.set('in','india')

// console.log(map)

for (const [key,value] of map) {
    console.log(key,':-:',value)
}

const myObj = {
    'game1':'nfs',
    'game2':'gta'
}

// for (const [key,value] of myObj) {
//     // console.log(key,':-:',value) // not iteratable
// }

// for of not for object


