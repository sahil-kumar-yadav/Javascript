# Javascript (Documentation MDN(mozilla) / [tc39.es(orginal)](https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects))

# Javascript - Object and Event (80%)
# lec - 1 Setting up environment

- nodejs -> javascript runtime environment. phele hume javascript ko dekhne/sikhne ky liye index.js file banani padti thi or fir console my dekhna padta tha but abh hum bina browser ky javascript ko run kar skte hai nodejs ki help sy jese cpp or python ky liye bhi unka environment aata aata hai vese he javascript ky liye nodejs/denojs environment hai (dono same he founder ky hai)

# lec - 2 Save and work on GitHub

- hum github codespace bhi use kar skte hai --> usme hume virtual machine mill jayegi vaha py pura kaam hum online kar skte hai

# 00:27:14  -  Let const var (keywords)

- const -> ek baar jo value define kardi usko change nahi kiya ja skta
- let/var --> dono change ho skte hai (mostly var nahi use karte - purane time py use karte thy )
# undefined / undeclared / NULL
- undefined -> sirf declare karke chod diya (let abc;) value assign nahi ki define nahi kiya
- undeclared -> variable he nahi banaya
- null -> datatype

# 00:43:54  -  Datatypes and ECMA standards

- "use strict"; // treat all JS code as newer version
- refere file 02_datatypes.js 

# 01:01:55  -  Datatype conversion

# 01:29:46  -  comparison of datatypes

- null ka datatype object hai
- non primitive ka data type function hota hai

# 01:56:40  -  stack and heap memory


# 02:29:17 -  Number and maths

# 02:52:34  -  date and time

# 03:10:47  -  Array in javascript

- shallow copy --> same reference
- deep copy -> not same refrences


# 04:21:13  -  Objects destructuring and JSON API
- object destructuring --> {} use karke direct object ki property use karna without dot operator 
- JSON - Javascript object notation
- api sy aata hai - basicall object without name or object jesa he dikhta hai
- my github api --> https://api.github.com/users/username
- random user api - https://randomuser.me/api/
- got to json formator tool --> tree form choose karo acche sy smj aayega


# 04:34:46  -  Functions and parameters

# 05:05:14  -  Global and local scope

- var --> global scope isko {} sy fark nahi padta
- let , const ka block scope hai , yeh scope tak he valid rahta hai

# 05:14:51  -   Scope level and mini hoisting

- clouser property --> In case of nested functions inner functions can access the property of/ varible of outer function i.e child function can access property of parent

# 05:29:47 -  this and arrow function

- when refering to current context we use this keyword
- browser ky ander my jo global object hai vo hai window object

# 05:48:16  -  Immediately invoked function
- 1 sy jayada IIFE likhne ky ly semicolone lagna bhut jaruri hai
- named iife -> function with name in ()()
- Unnamed iife -> arrow function in ()()

# 05:55:33 -  How does javascript works behind the scene

- review it once


# 06:21:45  - Control flow in javascript
- har baar hum pura code execute nahi karna chate , hume chaheye control thats why we use control and flow statement
-  if break statement is not there all below code will be executed except defult


# falsy values 

- false, 0, -0 , "", 0n, null , undefined , NaN 

# truthy value

 - "0" , 'false', " "(space) , [] , {} , function(){} 



