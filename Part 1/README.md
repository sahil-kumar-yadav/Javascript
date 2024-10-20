# Javascript (Documentation MDN(mozilla) / [tc39.es(orginal)](https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects))

# Javascript - Object and Event (80%)

### 1. Setting Up the Environment

**Node.js**: A JavaScript runtime environment that allows you to run JavaScript outside the browser. Previously, to see or learn JavaScript, we had to create an `index.js` file and run it in the browser console. Now, with Node.js, we can execute JavaScript directly, similar to how C++ or Python environments work. Deno.js is also an option, developed by the same founder.

- nodejs -> javascript runtime environment. phele hume javascript ko dekhne/sikhne ky liye index.js file banani padti thi or fir console my dekhna padta tha but abh hum bina browser ky javascript ko run kar skte hai nodejs ki help sy jese cpp or python ky liye bhi unka environment aata aata hai vese he javascript ky liye nodejs/denojs environment hai (dono same he founder ky hai)

# lec - 2 Save and work on GitHub

- **GitHub Codespaces**: An online development environment that provides a virtual machine for coding directly in your browser. It allows for seamless collaboration and version control.

- hum github codespace bhi use kar skte hai --> usme hume virtual machine mill jayegi vaha py pura kaam hum online kar skte hai

### 3. Variables and Scope: Let const var (keywords) (00:27:14)  

- **Keywords**:
  - `const`: Value cannot be changed once defined.
  - `let`: Value can be changed, scoped to the nearest block.
  - `var`: Older keyword, function-scoped; generally avoided in modern JavaScript.
    - const -> ek baar jo value define kardi usko change nahi kiya ja skta
    - let/var --> dono change ho skte hai (mostly var nahi use karte - purane time py use karte thy )

- **Undefined, Undeclared, and Null**:
  - **Undefined**: Declared but not assigned (e.g., `let abc;`).
  - **Undeclared**: Variable that hasn’t been defined at all.
  - **Null**: A specific datatype representing an intentional absence of any object value.

    - undefined -> sirf declare karke chod diya (let abc;) value assign nahi ki define nahi kiya
    - undeclared -> variable he nahi banaya
    - null -> datatype

### 4. Data Types and ECMAScript Standards (00:43:54)

- Use `"use strict";` to enable strict mode, enforcing a more secure coding standard.
- "use strict"; // treat all JS code as newer version
- **Refer to**: `02_datatypes.js` for practical examples.

### 5. Data Type Conversion (01:01:55)

### 6. Comparison of Data Types (01:29:46)

- Note: `null` is technically an object type in JavaScript.
- Non-primitive data types include functions and objects.

### 7. Memory Management (01:56:40)

- Understand the difference between stack and heap memory allocation.

## Advanced Topics

### 8. Numbers and Mathematics (02:29:17)

### 9. Date and Time Handling (02:52:34)

### 10. Arrays in JavaScript (03:10:47)

- **Shallow Copy**: Copies references to the original elements.
- **Deep Copy**: Creates a completely new copy with its own references.
  - shallow copy --> same reference
  - deep copy -> not same refrences


### 11. Object Destructuring and JSON API (04:21:13)

- **Object Destructuring**: --> {} use karke direct object ki property use karna without dot operator 
- **JSON**:- Javascript object notation
- api sy aata hai - basically object without name or object jesa he dikhta hai
- **Useful APIs**:
  - GitHub API: `https://api.github.com/users/username`
  - Random User API: `https://randomuser.me/api/`
- **JSON Formatter Tool**: Use a tree format for better understanding.
  - got to json formator tool --> tree form choose karo acche sy smj aayega


### 12. Functions and Parameters (04:34:46)

### 13. Scope in JavaScript (05:05:14)

- **Global Scope**: `var` declarations are globally accessible regardless of block.
- **Block Scope**: `let` and `const` are limited to their enclosing block.
  - var --> global scope isko {} sy fark nahi padta
  - let , const ka block scope hai , yeh scope tak he valid rahta hai


### 14. Scope Levels and Hoisting (05:14:51)
- **Closure property**:  --> In case of nested functions inner functions can access the property of/ varible of outer function i.e child function can access property of parent

### 15. The `this` Keyword and Arrow Functions (05:29:47)

- `this` refers to the current execution context.
- In a browser, the global object is the `window` object.
- when refering to current context we use this keyword
- browser ky ander my jo global object hai vo hai window object


### 16. Immediately Invoked Function Expressions (IIFE) (05:48:16)
- Use semicolons to separate multiple IIFEs.
- **Named IIFE**: `functionName()()`
- **Unnamed IIFE**: Arrow function `() => {}`
  - 1 sy jayada IIFE likhne ky ly semicolone lagna bhut jaruri hai
  - named iife -> function with name in ()()
  - Unnamed iife -> arrow function in ()()

### 17. JavaScript Execution (05:55:33)

- Review how JavaScript executes behind the scenes.

### 18. Control Flow (06:21:45)
- Control flow statements prevent the execution of all code in certain conditions.
- har baar hum pura code execute nahi karna chate , hume chaheye control thats why we use control and flow statement
- if break statement is not there all below code will be executed except defult

- **Falsy Values**: `false`, `0`, `-0`, `""`, `0n`, `null`, `undefined`, `NaN`
- **Truthy Values**: `"0"`, `'false'`, `" "`, `[]`, `{}`, `function() {}`
