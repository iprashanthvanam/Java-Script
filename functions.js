// // fucntions we can write in 3 ways

// // way 1
// function add(){
// var a=1;
// var b=1;
// console.log(a+b);
// document.write(a+b);
// }

// add();


// // way 2 ES6

// const minus = () => {
// var a=2;
// var b=2;
// console.log(a-b);
// document.write(a+b);
// }
// minus();



// // Define an arrow function to add two numbers
// const addNumbers = () => {
//     // Use let instead of var for block-scoped variables
//     let a = 90; // First number
//     let b = 78; // Second number
//     const sum = a * b; // Calculate sum
//     console.log(sum); // Output to console: 145
    
//     // Check if running in a browser environment before using document
//     if (typeof document !== "undefined") {
//         document.write(sum); // Write to HTML document: 145
//     } else {
//         console.log("document.write is not available in this environment (e.g., Node.js)");
//     }
    
//     return sum; // Return the result for potential reuse
// };

// // Invoke the function to execute it
// addNumbers();






// JavaScript Functions: Detailed Explanation with Inline Comments

// Functions are reusable blocks of code that perform specific tasks.
// They can take inputs (parameters), process them, and return outputs.

// 1. Function Declaration
// Defined using the 'function' keyword, hoisted (can be called before declaration).
function greet(name) { // Function with a parameter 'name'
    return `Hello, ${name}!`; // Return statement sends back a value
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Function hoisting example
console.log(sayHi("Bob")); // Output: Hi, Bob! (Works due to hoisting)
function sayHi(name) {
    return `Hi, ${name}!`;
}

// 2. Function Expression
// A function assigned to a variable, not hoisted (cannot be called before definition).
const multiply = function(a, b) { // Anonymous function assigned to a variable
    return a * b;
};
console.log(multiply(3, 4)); // Output: 12
// console.log(multiply(2, 3)); // Error if called before definition

// 3. Arrow Functions (Introduced in ES6)
// Concise syntax, no own 'this' binding, not hoisted.
const add = (a, b) => a + b; // Single-line arrow function with implicit return
console.log(add(5, 6)); // Output: 11

// Arrow function with block body
const greetFormal = (name) => {
    const message = `Greetings, ${name}!`;
    return message;
};
console.log(greetFormal("Charlie")); // Output: Greetings, Charlie!

// Single parameter arrow function (no parentheses needed)
const square = num => num * num;
console.log(square(4)); // Output: 16

// 4. Parameters and Arguments
// Functions can have default parameters, rest parameters, and destructuring.

// Default Parameters
function welcome(user = "Guest") { // Default value if no argument is passed
    return `Welcome, ${user}!`;
}
console.log(welcome()); // Output: Welcome, Guest!
console.log(welcome("Dave")); // Output: Welcome, Dave!

// Rest Parameters (collects remaining arguments into an array)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5)); // Output: 5
console.log(sum()); // Output: 0

// Destructuring Parameters
function introduce({ name, age }) { // Destructure object parameter
    return `${name} is ${age} years old.`;
}
const person = { name: "Eve", age: 30 };
console.log(introduce(person)); // Output: Eve is 30 years old.

// 5. Return Statements
// Functions return 'undefined' by default if no return statement is provided.
function noReturn() {
    console.log("No return value");
}
console.log(noReturn()); // Output: No return value, undefined

// Early return for control flow
function checkAge(age) {
    if (age < 18) return "Minor"; // Early return
    return "Adult";
}
console.log(checkAge(15)); // Output: Minor
console.log(checkAge(20)); // Output: Adult

// 6. Closures
// A function that retains access to its outer scope's variables even after the outer function finishes.
function createCounter() {
    let count = 0; // Private variable
    return function() { // Inner function with access to count
        return ++count;
    };
}
const counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
const counter2 = createCounter(); // New closure with separate count
console.log(counter2()); // Output: 1

// 7. Immediately Invoked Function Expression (IIFE)
// A function that runs immediately after definition, often used for initialization.
(function() {
    console.log("IIFE executed!");
})(); // Output: IIFE executed!

// IIFE with parameters
const result = ((x, y) => x * y)(3, 4);
console.log(result); // Output: 12

// 8. Callback Functions
// Functions passed as arguments to other functions, often for asynchronous operations.
function processData(data, callback) {
    console.log("Processing:", data);
    callback(data);
}
function handleResult(result) {
    console.log("Handled:", result);
}
processData("Test Data", handleResult); // Output: Processing: Test Data, Handled: Test Data

// 9. Higher-Order Functions
// Functions that take other functions as arguments or return functions.
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// 10. Anonymous Functions
// Functions without a name, often used in expressions or as callbacks.
setTimeout(function() {
    console.log("Delayed by 1 second");
}, 1000); // Output: Delayed by 1 second (after 1s delay)

// 11. Function Scope and 'this' Keyword
// 'this' depends on how the function is called (not the same in arrow functions).
function showThis() {
    console.log(this); // Depends on context (e.g., global object in non-strict mode)
}
showThis(); // Output: global object (e.g., window in browsers)

// Arrow functions inherit 'this' from the surrounding scope
const obj = {
    name: "Test Object",
    regularFunc: function() {
        console.log(this.name);
    },
    arrowFunc: () => {
        console.log(this.name); // 'this' is from outer scope, likely undefined
    }
};
obj.regularFunc(); // Output: Test Object
obj.arrowFunc(); // Output: undefined (arrow function doesn't bind 'this')

// 12. Best Practices
// - Use arrow functions for concise callbacks or when 'this' binding is not needed.
// - Use descriptive function names for clarity.
// - Avoid relying on hoisting for function declarations.
// - Use default parameters instead of manual checks.
// - Leverage closures for data privacy.

const exampleBestPractice = (user = "Guest") => `Welcome, ${user}!`;
console.log(exampleBestPractice("Frank")); // Output: Welcome, Frank!
console.log(exampleBestPractice()); // Output: Welcome, Guest!

