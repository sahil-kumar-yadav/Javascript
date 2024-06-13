// Immediately Invoked Function Expressions (IIFE)
// why use - global scope ky pollution sy problem hoti hai islye use karte hai

(function fun(){
    // named IIFE
    console.log(`DB connected`)
})(); // context rokne ky liye semicolon lagna bhut jaruri hai varna niche vala function execute nahi hoga

(function fun(){
    console.log(`DB connected two`)
})(); // semicolon is important

((name) => {
    // unamed IIFE
    console.log(`DB connected three, ${name}`)
})('parameter'); // semicolon is important




// ()() iife
// (function defination)()