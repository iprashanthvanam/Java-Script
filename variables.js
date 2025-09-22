// comments control + /

// JavaScript Variables: Detailed Explanation with Inline Comments

// 1. Variable Declarations: var, let, and const
// Variables in JavaScript are used to store data. They can be declared using var, let, or const.

// var: Older way to declare variables, function-scoped, can be redeclared and reassigned
var myVar = 10; // Declaring and initializing a variable with var
var myVar = 20; // Redeclaration is allowed with var (not recommended)
myVar = 30; // Reassignment is allowed
console.log(myVar); // Output: 30

// let: Block-scoped, cannot be redeclared in the same scope, but can be reassigned
let myLet = "Hello"; // Declaring and initializing with let
// let myLet = "World"; // Error: Cannot redeclare myLet in the same scope
myLet = "World"; // Reassignment is allowed
console.log(myLet); // Output: World

// const: Block-scoped, cannot be redeclared or reassigned, must be initialized at declaration
const myConst = 100; // Declaring and initializing with const
// const myConst = 200; // Error: Cannot redeclare myConst
// myConst = 300; // Error: Cannot reassign a const variable
console.log(myConst); // Output: 100

// Note: const with objects/arrays allows modification of their properties/elements
const myArray = [1, 2, 3];
myArray.push(4); // Modifying the array is allowed
console.log(myArray); // Output: [1, 2, 3, 4]
// myArray = [5, 6, 7]; // Error: Cannot reassign the array itself

// 2. Variable Scope
// Variables have different scopes based on how they are declared: global, function, or block scope.

// Global Scope: Variables declared outside any function or block are global
var globalVar = "I'm global";
let globalLet = "I'm also global";
console.log(globalVar, globalLet); // Output: I'm global I'm also global

// Function Scope: Variables declared with var inside a function are function-scoped
function testFunctionScope() {
    var functionVar = "I'm function-scoped";
    console.log(functionVar); // Output: I'm function-scoped
}
testFunctionScope();
// console.log(functionVar); // Error: functionVar is not defined (outside function scope)

// Block Scope: Variables declared with let or const inside a block {} are block-scoped
if (true) {
    let blockLet = "I'm block-scoped";
    const blockConst = "I'm also block-scoped";
    console.log(blockLet, blockConst); // Output: I'm block-scoped I'm also block-scoped
}
// console.log(blockLet); // Error: blockLet is not defined (outside block scope)

// 3. Hoisting
// Variable declarations (not initializations) with var are hoisted to the top of their scope
console.log(hoistedVar); // Output: undefined (declaration is hoisted, not initialization)
var hoistedVar = "Now I'm initialized";

// let and const are also hoisted but not initialized (Temporal Dead Zone)
try {
    console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
    let hoistedLet = "This won't run";
} catch (e) {
    console.log("Error with let hoisting:", e.message);
}

// 4. Data Types
// JavaScript is dynamically typed; variables can hold any data type
let dynamicVar; // Undefined
console.log(typeof dynamicVar); // Output: undefined

dynamicVar = 42; // Number
console.log(typeof dynamicVar); // Output: number

dynamicVar = "JavaScript"; // String
console.log(typeof dynamicVar); // Output: string

dynamicVar = true; // Boolean
console.log(typeof dynamicVar); // Output: boolean

dynamicVar = { name: "John", age: 30 }; // Object
console.log(typeof dynamicVar); // Output: object

dynamicVar = [1, 2, 3]; // Array (typeof returns 'object')
console.log(typeof dynamicVar); // Output: object
console.log(Array.isArray(dynamicVar)); // Output: true (to check if it's an array)

dynamicVar = null; // Null
console.log(typeof dynamicVar); // Output: object (historical JavaScript quirk)

dynamicVar = function () { return "I'm a function"; }; // Function
console.log(typeof dynamicVar); // Output: function
console.log(dynamicVar()); // Output: I'm a function

// 5. Variable Naming Rules
// - Must start with a letter, underscore (_), or dollar sign ($)
// - Can contain letters, digits, underscores, or dollar signs
// - Case-sensitive
// - Cannot use reserved words (e.g., let, const, var, function)
let $validName = "Valid";
let _alsoValid = "Also valid";
console.log($validName, _alsoValid); // Output: Valid Also valid




// 7. Best Practices
// - Use let or const instead of var for better scope control
// - Use const by default unless reassignment is needed
// - Always declare variables before use
// - Use meaningful variable names
const userName = "Alice"; // Descriptive name
let userAge = 25; // Can be reassigned if needed
console.log(`User: ${userName}, Age: ${userAge}`); // Output: User: Alice, Age: 25