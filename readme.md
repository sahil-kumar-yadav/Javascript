# JavaScript interview questions along with explanations and examples 

### 1. **What are the different data types in JavaScript?**
   - JavaScript has several data types:
     - **Primitive Types:** `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`.
     - **Reference Types:** `Object`, `Array`, `Function`.

### 2. **What is a closure in JavaScript?**
   - A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
   ```javascript
   function outerFunction() {
       let outerVariable = 'I am from outer scope';
       return function innerFunction() {
           console.log(outerVariable);
       };
   }
   const innerFunc = outerFunction();
   innerFunc(); // Output: "I am from outer scope"
   ```

### 3. **Explain the concept of `this` in JavaScript.**
   - The value of `this` depends on how a function is called. In a method, `this` refers to the owner object; in a function, it refers to the global object (or `undefined` in strict mode).
   ```javascript
   const obj = {
       name: 'JavaScript',
       showName: function() {
           console.log(this.name);
       }
   };
   obj.showName(); // Output: "JavaScript"
   ```

### 4. **What is the difference between `==` and `===`?**
   - `==` checks for value equality with type coercion, while `===` checks for both value and type equality.
   ```javascript
   console.log(0 == '0');  // true
   console.log(0 === '0'); // false
   ```

### 5. **What are promises, and how do they work?**
   - A promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
   ```javascript
   const myPromise = new Promise((resolve, reject) => {
       const success = true;
       if (success) {
           resolve('Operation successful!');
       } else {
           reject('Operation failed!');
       }
   });

   myPromise.then(result => console.log(result)).catch(error => console.error(error));
   ```

### 6. **What are arrow functions, and how do they differ from regular functions?**
   - Arrow functions provide a shorter syntax and do not have their own `this`.
   ```javascript
   const regularFunction = function() {
       console.log(this);
   };
   const arrowFunction = () => {
       console.log(this);
   };
   regularFunction(); // `this` refers to the global object or undefined
   arrowFunction();   // `this` refers to the enclosing lexical context
   ```

### 7. **What is event delegation?**
   - Event delegation is a technique that allows you to attach a single event listener to a parent element to manage events for multiple child elements.
   ```javascript
   document.getElementById('parent').addEventListener('click', function(event) {
       if (event.target.matches('.child')) {
           console.log('Child clicked!');
       }
   });
   ```

### 8. **What is the purpose of the `bind` method?**
   - The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value.
   ```javascript
   const obj = { name: 'JavaScript' };
   function greet() {
       console.log(`Hello, ${this.name}`);
   }
   const greetBound = greet.bind(obj);
   greetBound(); // Output: "Hello, JavaScript"
   ```

### 9. **What are higher-order functions?**
   - Higher-order functions are functions that can take other functions as arguments or return them as output.
   ```javascript
   function higherOrderFunction(fn) {
       return function() {
           fn();
           console.log('Higher-order function executed');
       };
   }
   higherOrderFunction(() => console.log('Inner function executed'))();
   ```

### 10. **What is the purpose of `async` and `await`?**
   - `async` and `await` are used to work with promises in a cleaner way, allowing you to write asynchronous code that looks synchronous.
   ```javascript
   async function fetchData() {
       const response = await fetch('https://api.example.com/data');
       const data = await response.json();
       console.log(data);
   }
   fetchData();
   ```

### 11. **What is the event loop in JavaScript?**
   - The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by offloading operations to the system and then returning to handle events when they complete.

### 12. **Explain the difference between `var`, `let`, and `const`.**
   - `var` is function-scoped and hoisted; `let` and `const` are block-scoped. `const` cannot be reassigned.
   ```javascript
   var a = 10;
   let b = 20;
   const c = 30;
   a = 15; // valid
   b = 25; // valid
   // c = 35; // TypeError: Assignment to constant variable
   ```

### 13. **What are template literals in JavaScript?**
   - Template literals are string literals allowing embedded expressions, denoted by backticks (`` ` ``).
   ```javascript
   const name = 'JavaScript';
   const greeting = `Hello, ${name}!`;
   console.log(greeting); // Output: "Hello, JavaScript!"
   ```

### 14. **What is a JavaScript module?**
   - A JavaScript module is a self-contained piece of code that can export and import functionalities using `export` and `import` statements.
   ```javascript
   // math.js
   export function add(a, b) {
       return a + b;
   }

   // main.js
   import { add } from './math.js';
   console.log(add(5, 10)); // Output: 15
   ```

### 15. **What is the `spread` operator?**
   - The spread operator (`...`) allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected.
   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = [4, 5, 6];
   const combined = [...arr1, ...arr2];
   console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
   ```

### 16. **Explain the concept of prototypes in JavaScript.**
   - Prototypes are a way to add properties and methods to objects. Every JavaScript object has a prototype that it inherits from.
   ```javascript
   function Person(name) {
       this.name = name;
   }
   Person.prototype.greet = function() {
       console.log(`Hello, ${this.name}`);
   };

   const john = new Person('John');
   john.greet(); // Output: "Hello, John"
   ```

### 17. **What is the difference between `slice` and `splice`?**
   - `slice` creates a shallow copy of a portion of an array, while `splice` changes the contents of an array by removing or replacing existing elements.
   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const sliced = arr.slice(1, 3); // Output: [2, 3]
   arr.splice(1, 2); // Removes 2 elements starting from index 1
   console.log(arr); // Output: [1, 4, 5]
   ```

### 18. **What are the different ways to create an object in JavaScript?**
   - Objects can be created using:
     - Object literals: `const obj = { key: 'value' };`
     - Constructor functions: `function Obj() { this.key = 'value'; }`
     - `Object.create()`: `const obj = Object.create(proto);`
     - Classes: 
     ```javascript
     class MyClass {
         constructor() {
             this.key = 'value';
         }
     }
     const obj = new MyClass();
     ```

### 19. **What is the `setTimeout` function?**
   - `setTimeout` is a built-in JavaScript function that executes a specified function after a set amount of time.
   ```javascript
   setTimeout(() => {
       console.log('Executed after 2 seconds');
   }, 2000);
   ```

### 20. **What is JSON, and how do you use it in JavaScript?**
   - JSON (JavaScript Object Notation) is a lightweight data interchange format. You can use `JSON.stringify()` to convert an object to a JSON string and `JSON.parse()` to convert a JSON string back to an object.
   ```javascript
   const obj = { name: 'JavaScript', type: 'Language' };
   const jsonString = JSON.stringify(obj); // Convert to JSON string
   const parsedObj = JSON.parse(jsonString); // Convert back to object
   ```

These questions cover a broad range of JavaScript concepts and should be helpful for preparing for interviews!Sure! Here are 20 frequently asked JavaScript interview questions along with explanations and examples where necessary:

### 1. **What are the different data types in JavaScript?**
   - JavaScript has several data types:
     - **Primitive Types:** `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`.
     - **Reference Types:** `Object`, `Array`, `Function`.

### 2. **What is a closure in JavaScript?**
   - A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
   ```javascript
   function outerFunction() {
       let outerVariable = 'I am from outer scope';
       return function innerFunction() {
           console.log(outerVariable);
       };
   }
   const innerFunc = outerFunction();
   innerFunc(); // Output: "I am from outer scope"
   ```

### 3. **Explain the concept of `this` in JavaScript.**
   - The value of `this` depends on how a function is called. In a method, `this` refers to the owner object; in a function, it refers to the global object (or `undefined` in strict mode).
   ```javascript
   const obj = {
       name: 'JavaScript',
       showName: function() {
           console.log(this.name);
       }
   };
   obj.showName(); // Output: "JavaScript"
   ```

### 4. **What is the difference between `==` and `===`?**
   - `==` checks for value equality with type coercion, while `===` checks for both value and type equality.
   ```javascript
   console.log(0 == '0');  // true
   console.log(0 === '0'); // false
   ```

### 5. **What are promises, and how do they work?**
   - A promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
   ```javascript
   const myPromise = new Promise((resolve, reject) => {
       const success = true;
       if (success) {
           resolve('Operation successful!');
       } else {
           reject('Operation failed!');
       }
   });

   myPromise.then(result => console.log(result)).catch(error => console.error(error));
   ```

### 6. **What are arrow functions, and how do they differ from regular functions?**
   - Arrow functions provide a shorter syntax and do not have their own `this`.
   ```javascript
   const regularFunction = function() {
       console.log(this);
   };
   const arrowFunction = () => {
       console.log(this);
   };
   regularFunction(); // `this` refers to the global object or undefined
   arrowFunction();   // `this` refers to the enclosing lexical context
   ```

### 7. **What is event delegation?**
   - Event delegation is a technique that allows you to attach a single event listener to a parent element to manage events for multiple child elements.
   ```javascript
   document.getElementById('parent').addEventListener('click', function(event) {
       if (event.target.matches('.child')) {
           console.log('Child clicked!');
       }
   });
   ```

### 8. **What is the purpose of the `bind` method?**
   - The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value.
   ```javascript
   const obj = { name: 'JavaScript' };
   function greet() {
       console.log(`Hello, ${this.name}`);
   }
   const greetBound = greet.bind(obj);
   greetBound(); // Output: "Hello, JavaScript"
   ```

### 9. **What are higher-order functions?**
   - Higher-order functions are functions that can take other functions as arguments or return them as output.
   ```javascript
   function higherOrderFunction(fn) {
       return function() {
           fn();
           console.log('Higher-order function executed');
       };
   }
   higherOrderFunction(() => console.log('Inner function executed'))();
   ```

### 10. **What is the purpose of `async` and `await`?**
   - `async` and `await` are used to work with promises in a cleaner way, allowing you to write asynchronous code that looks synchronous.
   ```javascript
   async function fetchData() {
       const response = await fetch('https://api.example.com/data');
       const data = await response.json();
       console.log(data);
   }
   fetchData();
   ```

### 11. **What is the event loop in JavaScript?**
   - The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by offloading operations to the system and then returning to handle events when they complete.

### 12. **Explain the difference between `var`, `let`, and `const`.**
   - `var` is function-scoped and hoisted; `let` and `const` are block-scoped. `const` cannot be reassigned.
   ```javascript
   var a = 10;
   let b = 20;
   const c = 30;
   a = 15; // valid
   b = 25; // valid
   // c = 35; // TypeError: Assignment to constant variable
   ```

### 13. **What are template literals in JavaScript?**
   - Template literals are string literals allowing embedded expressions, denoted by backticks (`` ` ``).
   ```javascript
   const name = 'JavaScript';
   const greeting = `Hello, ${name}!`;
   console.log(greeting); // Output: "Hello, JavaScript!"
   ```

### 14. **What is a JavaScript module?**
   - A JavaScript module is a self-contained piece of code that can export and import functionalities using `export` and `import` statements.
   ```javascript
   // math.js
   export function add(a, b) {
       return a + b;
   }

   // main.js
   import { add } from './math.js';
   console.log(add(5, 10)); // Output: 15
   ```

### 15. **What is the `spread` operator?**
   - The spread operator (`...`) allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected.
   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = [4, 5, 6];
   const combined = [...arr1, ...arr2];
   console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
   ```

### 16. **Explain the concept of prototypes in JavaScript.**
   - Prototypes are a way to add properties and methods to objects. Every JavaScript object has a prototype that it inherits from.
   ```javascript
   function Person(name) {
       this.name = name;
   }
   Person.prototype.greet = function() {
       console.log(`Hello, ${this.name}`);
   };

   const john = new Person('John');
   john.greet(); // Output: "Hello, John"
   ```

### 17. **What is the difference between `slice` and `splice`?**
   - `slice` creates a shallow copy of a portion of an array, while `splice` changes the contents of an array by removing or replacing existing elements.
   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const sliced = arr.slice(1, 3); // Output: [2, 3]
   arr.splice(1, 2); // Removes 2 elements starting from index 1
   console.log(arr); // Output: [1, 4, 5]
   ```

### 18. **What are the different ways to create an object in JavaScript?**
   - Objects can be created using:
     - Object literals: `const obj = { key: 'value' };`
     - Constructor functions: `function Obj() { this.key = 'value'; }`
     - `Object.create()`: `const obj = Object.create(proto);`
     - Classes: 
     ```javascript
     class MyClass {
         constructor() {
             this.key = 'value';
         }
     }
     const obj = new MyClass();
     ```

### 19. **What is the `setTimeout` function?**
   - `setTimeout` is a built-in JavaScript function that executes a specified function after a set amount of time.
   ```javascript
   setTimeout(() => {
       console.log('Executed after 2 seconds');
   }, 2000);
   ```

### 20. **What is JSON, and how do you use it in JavaScript?**
   - JSON (JavaScript Object Notation) is a lightweight data interchange format. You can use `JSON.stringify()` to convert an object to a JSON string and `JSON.parse()` to convert a JSON string back to an object.
   ```javascript
   const obj = { name: 'JavaScript', type: 'Language' };
   const jsonString = JSON.stringify(obj); // Convert to JSON string
   const parsedObj = JSON.parse(jsonString); // Convert back to object
   ```

### 21. **What is the difference between `undefined` and `null`?**
   - `undefined` indicates a variable has been declared but not assigned a value, while `null` is an assignment value that represents no value.
   ```javascript
   let a;
   console.log(a); // Output: undefined
   let b = null;
   console.log(b); // Output: null
   ```

### 22. **What is the purpose of the `Array.prototype.map()` method?**
   - `map()` creates a new array populated with the results of calling a provided function on every element in the calling array.
   ```javascript
   const numbers = [1, 2, 3];
   const doubled = numbers.map(num => num * 2);
   console.log(doubled); // Output: [2, 4, 6]
   ```

### 23. **What is the purpose of the `Array.prototype.filter()` method?**
   - `filter()` creates a new array with all elements that pass the test implemented by the provided function.
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const evens = numbers.filter(num => num % 2 === 0);
   console.log(evens); // Output: [2, 4]
   ```

### 24. **What are IIFEs (Immediately Invoked Function Expressions)?**
   - IIFEs are functions that run as soon as they are defined, used to create a new scope and avoid polluting the global scope.
   ```javascript
   (function() {
       console.log('This is an IIFE');
   })(); // Output: "This is an IIFE"
   ```

### 25. **Explain the `this` binding rules.**
   - In non-strict mode, `this` is bound to the global object when called as a function. In strict mode, `this` is `undefined`. In object methods, `this` refers to the object. In event handlers, it refers to the element that triggered the event.

### 26. **What is the difference between `for...of` and `for...in` loops?**
   - `for...in` iterates over the keys of an object, while `for...of` iterates over the values of iterable objects (like arrays).
   ```javascript
   const arr = [10, 20, 30];
   for (const value of arr) {
       console.log(value); // Output: 10, 20, 30
   }

   const obj = { a: 1, b: 2 };
   for (const key in obj) {
       console.log(key); // Output: "a", "b"
   }
   ```

### 27. **What are the different ways to handle errors in JavaScript?**
   - Errors can be handled using `try...catch` blocks, throwing custom errors, or using `.catch()` with promises.
   ```javascript
   try {
       throw new Error('Something went wrong');
   } catch (error) {
       console.log(error.message); // Output: "Something went wrong"
   }
   ```

### 28. **What is the `Object.keys()` method?**
   - `Object.keys()` returns an array of a given object's own property names.
   ```javascript
   const obj = { a: 1, b: 2 };
   const keys = Object.keys(obj);
   console.log(keys); // Output: ["a", "b"]
   ```

### 29. **What is `debouncing` in JavaScript?**
   - Debouncing is a technique used to limit the rate at which a function is executed. It ensures that a function is only called after a specified delay following the last invocation.
   ```javascript
   function debounce(func, delay) {
       let timeout;
       return function(...args) {
           clearTimeout(timeout);
           timeout = setTimeout(() => func.apply(this, args), delay);
       };
   }
   ```

### 30. **What is `throttling` in JavaScript?**
   - Throttling is a technique used to ensure that a function is not called more than once in a specified time period.
   ```javascript
   function throttle(func, limit) {
       let lastFunc;
       let lastRan;
       return function() {
           const context = this;
           const args = arguments;
           if (!lastRan) {
               func.apply(context, args);
               lastRan = Date.now();
           } else {
               clearTimeout(lastFunc);
               lastFunc = setTimeout(function() {
                   if ((Date.now() - lastRan) >= limit) {
                       func.apply(context, args);
                       lastRan = Date.now();
                   }
               }, limit - (Date.now() - lastRan));
           }
       };
   }
   ```

### 31. **What is the `instanceof` operator?**
   - The `instanceof` operator tests whether an object is an instance of a specific constructor or class.
   ```javascript
   class Animal {}
   const dog = new Animal();
   console.log(dog instanceof Animal); // Output: true
   ```

### 32. **What are `set` and `map` in JavaScript?**
   - `Set` is a collection of unique values, while `Map` is a collection of key-value pairs.
   ```javascript
   const mySet = new Set([1, 2, 3, 2]);
   console.log(mySet); // Output: Set { 1, 2, 3 }

   const myMap = new Map();
   myMap.set('a', 1);
   myMap.set('b', 2);
   console.log(myMap.get('a')); // Output: 1
   ```

### 33. **What is the `Array.prototype.reduce()` method?**
   - `reduce()` executes a reducer function on each element of the array, resulting in a single output value.
   ```javascript
   const numbers = [1, 2, 3, 4];
   const sum = numbers.reduce((acc, num) => acc + num, 0);
   console.log(sum); // Output: 10
   ```

### 34. **What are the differences between `slice()` and `splice()`?**
   - `slice()` returns a shallow copy of a portion of an array without modifying the original array, while `splice()` modifies the original array by adding or removing elements.
   ```javascript
   const arr = [1, 2, 3, 4];
   const sliced = arr.slice(1, 3); // Output: [2, 3]
   arr.splice(1, 2); // Removes elements at index 1 and 2
   console.log(arr); // Output: [1, 4]
   ```

### 35. **What is the `localStorage` and `sessionStorage` in JavaScript?**
   - Both are part of the Web Storage API. `localStorage` stores data with no expiration time, while `sessionStorage` stores data for the duration of the page session.
   ```javascript
   localStorage.setItem('key', 'value'); // Stored indefinitely
   sessionStorage.setItem('sessionKey', 'sessionValue'); // Stored for the session
   ```

### 36. **What is `function hoisting`?**
   - Function declarations are hoisted, meaning they can be called before their definition in the code. Function expressions, however, are not hoisted.
   ```javascript
   console.log(myFunction()); // Output: "Hello!"
   function myFunction() {
       return 'Hello!';
   }
   ```

### 37. **What are the `Map` and `WeakMap` in JavaScript?**
   - `Map` is a collection of key-value pairs where keys can be any type, while `WeakMap` only accepts objects as keys and does not prevent garbage collection if there are no other references to the key object.
   ```javascript
   const myMap = new Map();
   myMap.set('a', 1);
   console.log(myMap.get('a')); // Output: 1

   const obj = {};
   const weakMap = new WeakMap();
   weakMap.set(obj, 'value');
   ```

### 38. **What is `JSON.stringify()` and `JSON.parse()`?**
   - `JSON.stringify()` converts a JavaScript object into a JSON string, while `JSON.parse()` converts a JSON string back into a JavaScript object.
   ```javascript
   const obj = { name: 'Alice' };
   const jsonString = JSON.stringify(obj); // '{"name":"Alice"}'
   const parsedObj = JSON.parse(jsonString); // { name: 'Alice' }
   ```

### 39. **What is the purpose of the `const` keyword?**
   - The `const` keyword is used to declare block-scoped variables that cannot be reassigned after their initial assignment.
   ```javascript
   const x = 10;
   // x = 20; // TypeError: Assignment to constant variable
   ```

### 40. **Explain the difference between synchronous and asynchronous programming in JavaScript.**
   - Synchronous code runs sequentially, blocking the execution until the current operation is completed. Asynchronous code allows operations to run in the background, enabling other code to execute without waiting.
   ```javascript
   console.log('Start'); // Synchronous
   setTimeout(() => {
       console.log('Asynchronous operation'); // Asynchronous
   }, 1000);
   console.log('End');

### 41. **What is a callback function?**
   - A callback function is a function passed into another function as an argument to be executed later.
   ```javascript
   function greeting(name, callback) {
       console.log(`Hello, ${name}`);
       callback();
   }
   greeting('Alice', () => console.log('Nice to meet you!'));
   ```

### 42. **What are the different ways to create an array in JavaScript?**
   - Arrays can be created using array literals, the `Array` constructor, or by using `Array.of()`.
   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = new Array(4, 5, 6);
   const arr3 = Array.of(7, 8, 9);
   ```

### 43. **What is the difference between shallow copy and deep copy?**
   - A shallow copy duplicates an object but references the original nested objects, while a deep copy duplicates everything, including nested objects.
   ```javascript
   const original = { a: 1, b: { c: 2 } };
   const shallowCopy = { ...original };
   const deepCopy = JSON.parse(JSON.stringify(original));

   shallowCopy.b.c = 3; // Modifies original object
   console.log(original.b.c); // Output: 3
   console.log(deepCopy.b.c); // Output: 2
   ```

### 44. **What are `async` functions?**
   - `async` functions are functions that always return a promise. They allow the use of `await` within them.
   ```javascript
   async function fetchData() {
       return 'Data fetched';
   }
   fetchData().then(console.log); // Output: "Data fetched"
   ```

### 45. **What is the purpose of `Object.assign()`?**
   - `Object.assign()` is used to copy values from one or more source objects to a target object.
   ```javascript
   const target = { a: 1 };
   const source = { b: 2, c: 3 };
   const result = Object.assign(target, source);
   console.log(result); // Output: { a: 1, b: 2, c: 3 }
   ```

### 46. **What is the purpose of the `with` statement?**
   - The `with` statement extends the scope chain for a statement, allowing you to write less code, but it's generally discouraged due to performance and readability issues.
   ```javascript
   const obj = { a: 1, b: 2 };
   with (obj) {
       console.log(a + b); // Output: 3
   }
   ```

### 47. **What are the differences between a function declaration and a function expression?**
   - Function declarations are hoisted and can be called before they appear in the code. Function expressions are not hoisted and can only be called after they are defined.
   ```javascript
   greet(); // Output: "Hello"
   function greet() {
       console.log("Hello");
   }

   // greet2(); // Error: greet2 is not a function
   const greet2 = function() {
       console.log("Hello again");
   };
   ```

### 48. **What is a prototype chain?**
   - The prototype chain is the mechanism by which JavaScript objects inherit properties and methods from other objects. It allows for property lookup up the chain of prototypes.
   ```javascript
   function Animal() {}
   Animal.prototype.speak = function() {
       console.log("Animal speaks");
   };
   function Dog() {}
   Dog.prototype = Object.create(Animal.prototype);
   const dog = new Dog();
   dog.speak(); // Output: "Animal speaks"
   ```

### 49. **What are `async iterators`?**
   - Async iterators allow you to iterate over data asynchronously, useful for working with streams of data or handling large datasets that take time to fetch.
   ```javascript
   async function* asyncGenerator() {
       for (let i = 0; i < 3; i++) {
           await new Promise(resolve => setTimeout(resolve, 1000));
           yield i;
       }
   }

   (async () => {
       for await (const value of asyncGenerator()) {
           console.log(value); // Output: 0, 1, 2 (each after 1 second)
       }
   })();
   ```

### 50. **What is the `nullish coalescing operator` (`??`)?**
   - The nullish coalescing operator returns the right-hand operand when the left-hand operand is `null` or `undefined`.
   ```javascript
   const value = null;
   const defaultValue = value ?? 'Default';
   console.log(defaultValue); // Output: "Default"
   ```

### 51. **What is a `Symbol` in JavaScript?**
   - A `Symbol` is a unique and immutable primitive value that can be used as a key for object properties, ensuring that property names are unique.
   ```javascript
   const sym = Symbol('description');
   const obj = {
       [sym]: 'value'
   };
   console.log(obj[sym]); // Output: "value"
   ```

### 52. **What is a `WeakSet`?**
   - A `WeakSet` is similar to a `Set`, but it only holds weak references to its objects, allowing them to be garbage collected if no other references exist.
   ```javascript
   const weakSet = new WeakSet();
   const obj = {};
   weakSet.add(obj);
   console.log(weakSet.has(obj)); // Output: true
   ```

### 53. **What is the `for await...of` loop?**
   - The `for await...of` loop is used to iterate over asynchronous iterable objects, allowing you to await each iteration.
   ```javascript
   async function* asyncGenerator() {
       yield 'Hello';
       yield 'World';
   }

   (async () => {
       for await (const value of asyncGenerator()) {
           console.log(value); // Output: "Hello", "World"
       }
   })();
   ```

### 54. **What is the purpose of `Object.freeze()`?**
   - `Object.freeze()` makes an object immutable, preventing the addition, removal, or modification of its properties.
   ```javascript
   const obj = { a: 1 };
   Object.freeze(obj);
   obj.a = 2; // This will not change the property
   console.log(obj.a); // Output: 1
   ```

### 55. **What are `generator functions`?**
   - Generator functions allow you to define an iterative algorithm by using the `function*` syntax and `yield` keyword. They can pause execution and resume later.
   ```javascript
   function* generator() {
       yield 1;
       yield 2;
       yield 3;
   }

   const gen = generator();
   console.log(gen.next().value); // Output: 1
   console.log(gen.next().value); // Output: 2
   ```

### 56. **What is the `Rest` parameter?**
   - The Rest parameter syntax (`...`) allows a function to accept an indefinite number of arguments as an array.
   ```javascript
   function sum(...numbers) {
       return numbers.reduce((acc, num) => acc + num, 0);
   }
   console.log(sum(1, 2, 3)); // Output: 6
   ```

### 57. **What is the `Set` data structure in JavaScript?**
   - A `Set` is a collection of values where each value must be unique. It can hold any type of data, including objects.
   ```javascript
   const mySet = new Set([1, 2, 3, 2]);
   console.log(mySet.size); // Output: 3
   ```

### 58. **What is `Object.prototype.toString()`?**
   - `Object.prototype.toString()` returns a string representation of an object, often used to identify the type of an object.
   ```javascript
   console.log(Object.prototype.toString.call([])); // Output: "[object Array]"
   console.log(Object.prototype.toString.call({})); // Output: "[object Object]"
   ```

### 59. **What is a `Proxy` in JavaScript?**
   - A `Proxy` is an object that wraps another object and allows you to intercept and redefine fundamental operations for that object, such as property lookup and assignment.
   ```javascript
   const target = {};
   const handler = {
       get: (obj, prop) => {
           return prop in obj ? obj[prop] : 'Property not found';
       }
   };
   const proxy = new Proxy(target, handler);
   console.log(proxy.someProperty); // Output: "Property not found"
   ```

### 60. **What is `fetch` API in JavaScript?**
   - The `fetch` API provides a modern way to make network requests. It returns a promise that resolves to the response of the request.
   ```javascript
   fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('Error:', error));
   ```

### 61. **What is the difference between `==` and `===`?**
   - `==` is the equality operator that performs type coercion, while `===` is the strict equality operator that does not perform type coercion.
   ```javascript
   console.log(0 == '0'); // Output: true
   console.log(0 === '0'); // Output: false
   ```

### 62. **What is the `bind` method?**
   - The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value.
   ```javascript
   function greet() {
       console.log(`Hello, ${this.name}`);
   }
   const obj = { name: 'Alice' };
   const boundGreet = greet.bind(obj);
   boundGreet(); // Output: "Hello, Alice"
   ```

### 63. **What are template literals?**
   - Template literals are string literals that allow embedded expressions, multi-line strings, and interpolation using backticks (`` ` ``).
   ```javascript
   const name = 'Alice';
   const greeting = `Hello, ${name}!`;
   console.log(greeting); // Output: "Hello, Alice!"
   ```

### 64. **What is event delegation?**
   - Event delegation is a technique that allows you to attach a single event listener to a parent element to manage events for multiple child elements, improving performance.
   ```javascript
   document.getElementById('parent').addEventListener('click', function(event) {
       if (event.target.matches('.child')) {
           console.log('Child clicked:', event.target);
       }
   });
   ```

### 65. **What is the difference between a `Queue` and a `Stack`?**
   - A `Queue` is a First In First Out (FIFO) data structure, while a `Stack` is a Last In First Out (LIFO) data structure.
   ```javascript
   // Queue example
   const queue = [];
   queue.push(1); // Enqueue
   queue.push(2);
   console.log(queue.shift()); // Dequeue: Output: 1

   // Stack example
   const stack = [];
   stack.push(1); // Push
   stack.push(2);
   console.log(stack.pop()); // Pop: Output: 2
   ```

### 66. **What are `default` function parameters?**
   - Default parameters allow named parameters to be initialized with default values if no value or `undefined` is passed.
   ```javascript
   function multiply(a, b = 1) {
       return a * b;
   }
   console.log(multiply(5)); // Output: 5
   ```

### 67. **What is destructuring in JavaScript?**
   - Destructuring allows unpacking values from arrays or properties from objects into distinct variables.
   ```javascript
   const arr = [1, 2, 3];
   const [a, b] = arr; // a = 1, b = 2

   const obj = { x: 10, y: 20 };
   const { x, y } = obj; // x = 10, y = 20
   ```

### 68. **What is a `Map` and how does it differ from an object?**
   - A `Map` is a collection of key-value pairs where keys can be of any type. Unlike objects, `Map` maintains the insertion order of keys and allows any value as a key.
   ```javascript
   const map = new Map();
   map.set('key', 'value');
   map.set(1, 'number');
   console.log(map.get('key')); // Output: "value"
   ```

### 69. **What is `async/await`?**
   - `async/await` is a syntax for working with promises that makes asynchronous code look and behave like synchronous code.
   ```javascript
   async function fetchData() {
       const response = await fetch('https://api.example.com/data');
       const data = await response.json();
       return data;
   }
   ```

### 70. **What is the purpose of `Array.prototype.every()`?**
   - The `every()` method tests whether all elements in the array pass the test implemented by the provided function.
   ```javascript
   const numbers = [1, 2, 3, 4];
   const allEven = numbers.every(num => num % 2 === 0);
   console.log(allEven); // Output: false
   ```

### 71. **What is the `setTimeout` function?**
   - `setTimeout` is a built-in function that executes a specified function after a defined period (in milliseconds).
   ```javascript
   setTimeout(() => {
       console.log('Executed after 1 second');
   }, 1000);
   ```

### 72. **What is the `setInterval` function?**
   - `setInterval` is a built-in function that repeatedly executes a specified function at defined intervals (in milliseconds).
   ```javascript
   const intervalId = setInterval(() => {
       console.log('Executed every 1 second');
   }, 1000);
   // To stop the interval: clearInterval(intervalId);
   ```

### 73. **What is a higher-order function?**
   - A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result.
   ```javascript
   function higherOrderFunction(callback) {
       callback();
   }
   higherOrderFunction(() => console.log('I am a callback!'));
   ```

### 74. **What is the `slice()` method?**
   - The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from the original array.
   ```javascript
   const arr = [1, 2, 3, 4];
   const newArr = arr.slice(1, 3); // Output: [2, 3]
   ```

### 75. **What is the `map` method?**
   - The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.
   ```javascript
   const nums = [1, 2, 3];
   const squares = nums.map(num => num * num);
   console.log(squares); // Output: [1, 4, 9]
   ```

### 76. **What is a closure in JavaScript?**
   - A closure is a function that remembers its outer variables and can access them even when the function is executed outside its immediate lexical scope.
   ```javascript
   function outer() {
       let count = 0;
       return function inner() {
           count++;
           console.log(count);
       };
   }
   const increment = outer();
   increment(); // Output: 1
   increment(); // Output: 2
   ```

### 77. **What is the `filter` method?**
   - The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
   ```javascript
   const nums = [1, 2, 3, 4];
   const evens = nums.filter(num => num % 2 === 0);
   console.log(evens); // Output: [2, 4]
   ```

### 78. **What is the `reduce` method?**
   - The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.
   ```javascript
   const nums = [1, 2, 3, 4];
   const sum = nums.reduce((acc, num) => acc + num, 0);
   console.log(sum); // Output: 10
   ```

### 79. **What is the purpose of `Array.prototype.find()`?**
   - The `find()` method returns the value of the first element in the array that satisfies the provided testing function.
   ```javascript
   const nums = [5, 12, 8, 130, 44];
   const found = nums.find(num => num > 10);
   console.log(found); // Output: 12
   ```

### 80. **What is `strict mode`?**
   - Strict mode is a way to opt into a restricted variant of JavaScript, which helps catch common coding errors and "unsafe" actions (e.g., assigning to undeclared variables).
   ```javascript
   'use strict';
   // Example of error in strict mode
   // undeclaredVariable = 10; // Throws ReferenceError
   ```

### 81. **What is the `typeof` operator?**
   - The `typeof` operator returns a string indicating the type of the unevaluated operand.
   ```javascript
   console.log(typeof 'hello'); // Output: "string"
   console.log(typeof 42);       // Output: "number"
   console.log(typeof true);     // Output: "boolean"
   console.log(typeof {});       // Output: "object"
   ```

### 82. **What is the difference between `slice()` and `splice()`?**
   - `slice()` returns a shallow copy of a portion of an array, while `splice()` changes the contents of an array by removing or replacing existing elements.
   ```javascript
   const arr = [1, 2, 3, 4];
   const sliced = arr.slice(1, 3); // Output: [2, 3]
   arr.splice(1, 2);                // Removes 2 elements starting from index 1
   console.log(arr);                // Output: [1, 4]
   ```

### 83. **What is the `Promise.all()` method?**
   - `Promise.all()` takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved or when the iterable is empty.
   ```javascript
   const promise1 = Promise.resolve(3);
   const promise2 = 42;
   const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

   Promise.all([promise1, promise2, promise3])
       .then((values) => {
           console.log(values); // Output: [3, 42, "foo"]
       });
   ```

### 84. **What are `module.exports` and `require()` in Node.js?**
   - `module.exports` is used to export functions or variables from a module, while `require()` is used to import them in another module.
   ```javascript
   // In math.js
   module.exports.add = (a, b) => a + b;

   // In another file
   const math = require('./math');
   console.log(math.add(2, 3)); // Output: 5
   ```

### 85. **What is event bubbling?**
   - Event bubbling is a type of event propagation where the event starts from the target element and bubbles up to its ancestors in the DOM.
   ```javascript
   document.getElementById('child').addEventListener('click', () => {
       console.log('Child clicked');
   });

   document.getElementById('parent').addEventListener('click', () => {
       console.log('Parent clicked');
   });
   ```

### 86. **What is `localStorage`?**
   - `localStorage` is a Web Storage API that allows you to store data persistently in the user's browser, with no expiration time.
   ```javascript
   localStorage.setItem('key', 'value');
   console.log(localStorage.getItem('key')); // Output: "value"
   ```

### 87. **What is the `navigator` object?**
   - The `navigator` object contains information about the web browser and operating system, including user agent, platform, and language.
   ```javascript
   console.log(navigator.userAgent); // Outputs the user agent string
   ```

### 88. **What are service workers?**
   - Service workers are scripts that run in the background, separate from the web page, and enable features like push notifications and offline capabilities.
   ```javascript
   if ('serviceWorker' in navigator) {
       navigator.serviceWorker.register('/service-worker.js')
           .then(reg => console.log('Service Worker registered', reg))
           .catch(err => console.error('Service Worker registration failed', err));
   }
   ```

### 89. **What is `defer` and `async` in script tags?**
   - `defer` tells the browser to download the script in the background while the HTML is being parsed and execute it after the parsing is complete. `async` allows the script to be downloaded in the background and executed as soon as it is ready, without waiting for the HTML to finish parsing.
   ```html
   <script src="script.js" defer></script>
   <script src="script.js" async></script>
   ```

### 90. **What is the `Array.prototype.concat()` method?**
   - The `concat()` method is used to merge two or more arrays without changing the existing arrays.
   ```javascript
   const array1 = [1, 2];
   const array2 = [3, 4];
   const combined = array1.concat(array2);
   console.log(combined); // Output: [1, 2, 3, 4]
   ```

### 91. **What is the `Math` object?**
   - The `Math` object provides methods and properties for mathematical constants and functions.
   ```javascript
   console.log(Math.PI);        // Output: 3.141592653589793
   console.log(Math.sqrt(16));  // Output: 4
   console.log(Math.random());   // Output: A random number between 0 and 1
   ```

### 92. **What is `undefined`?**
   - `undefined` is a primitive value that indicates a variable has been declared but has not yet been assigned a value.
   ```javascript
   let x;
   console.log(x); // Output: undefined
   ```

### 93. **What is the `console` object?**
   - The `console` object provides access to the browser's debugging console, allowing for logging and debugging.
   ```javascript
   console.log('Hello, world!'); // Output: "Hello, world!"
   console.error('This is an error!'); // Output: "This is an error!"
   ```

### 94. **What is an `Immediately Invoked Function Expression (IIFE)`?**
   - An IIFE is a function that is executed immediately after its definition, often used to create a new scope.
   ```javascript
   (function() {
       console.log('IIFE executed');
   })(); // Output: "IIFE executed"
   ```

### 95. **What is the `window` object?**
   - The `window` object represents the browser window and serves as the global object in the browser environment, containing methods and properties for controlling the window.
   ```javascript
   console.log(window.innerWidth); // Outputs the width of the window
   ```

### 96. **What is the purpose of `try...catch`?**
   - `try...catch` is used to handle exceptions in JavaScript, allowing you to catch errors and execute fallback code without crashing the program.
   ```javascript
   try {
       throw new Error('Oops!');
   } catch (error) {
       console.log(error.message); // Output: "Oops!"
   }
   ```

### 97. **What are `getter` and `setter` functions?**
   - Getters and setters are methods that provide controlled access to an object's properties. Getters return property values, while setters modify property values.
   ```javascript
   const person = {
       firstName: 'John',
       lastName: 'Doe',
       get fullName() {
           return `${this.firstName} ${this.lastName}`;
       },
       set fullName(name) {
           [this.firstName, this.lastName] = name.split(' ');
       }
   };
   console.log(person.fullName); // Output: "John Doe"
   person.fullName = 'Jane Smith';
   console.log(person.firstName); // Output: "Jane"
   ```

### 98. **What is the `EventTarget` interface?**
   - The `EventTarget` interface is a core interface in the DOM that represents an object that can receive events and may have listeners for them.
   ```javascript
   const button = document.getElementById('myButton');
   button.addEventListener('click', () => {
       console.log('Button clicked!');
   });
   ```

### 99. **What is the `Set` object?**
   - The `Set` object lets you store unique values of any type, whether primitive values or references to objects.
   ```javascript
   const uniqueNumbers = new Set([1, 2, 2, 3]);
   console.log(uniqueNumbers); // Output: Set { 1, 2, 3 }
   ```

### 100. **What is the `target` property in event handling?**
   - The `target` property of the event object references the element that triggered the event, allowing you to determine where the event originated.
   ```javascript
   document.getElementById('myElement').addEventListener('click', function(event) {
       console.log(event.target); // Outputs the clicked element
   });
   ```
