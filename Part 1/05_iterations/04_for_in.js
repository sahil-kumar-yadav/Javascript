const obj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"Swift by apple"
}

for (const key in obj) {
//    console.log(key) //only keys
    console.log(key,"-",obj[key])
}

// for in on array

const arr = ["hello",1,2,3,4,5,"abc"]

for (const key in arr) {
    console.log(arr[key])
}

// on map

const map = new Map() // unique value
map.set('in','india')
map.set('fr','France')
map.set('cn','china')
map.set('in','india')

// for (const key in map) {
//     // console.log(key) // nothing will be printed // map is not iterable 
// }


