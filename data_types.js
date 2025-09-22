// JavaScript Data Types: Detailed Explanation with Inline Comments

// JavaScript is a dynamically typed language, meaning variables can hold any data type without explicit type declaration.
// Data types are divided into two categories: Primitive and Non-Primitive (Reference) types.

// 1. Primitive Data Types
// Primitive types are immutable (cannot be changed) and are stored by value.

// 1.1 Undefined
// Represents a variable that has been declared but not assigned a value.
let undefinedVar; // No value assigned
console.log(typeof undefinedVar); // Output: undefined
console.log(undefinedVar); // Output: undefined

// 1.2 Null
// Represents the intentional absence of any object value.
// Note: typeof null returns 'object' due to a historical JavaScript quirk.
let nullVar = null;
console.log(typeof nullVar); // Output: object (quirk)
console.log(nullVar); // Output: null

// 1.3 Number
// Represents both integer and floating-point numbers.
// Includes special values: Infinity, -Infinity, and NaN (Not a Number).
let intNum = 42; // Integer
let floatNum = 3.14; // Floating-point
let specialNum = Infinity; // Special number value
let notANumber = NaN; // Result of invalid math operations
console.log(typeof intNum); // Output: number
console.log(intNum, floatNum, specialNum, notANumber); // Output: 42 3.14 Infinity NaN
console.log(typeof NaN); // Output: number (NaN is a number type)

// 1.4 BigInt
// Represents integers with arbitrary precision (for numbers larger than Number.MAX_SAFE_INTEGER).
let bigIntNum = 123456789012345678901234567890n; // BigInt literal (note the 'n')
console.log(typeof bigIntNum); // Output: bigint
console.log(bigIntNum); // Output: 123456789012345678901234567890n

// 1.5 String
// Represents a sequence of characters, enclosed in single quotes (''), double quotes (""), or backticks (``).
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, ${doubleQuote}!`; // Template literals allow expressions
console.log(typeof singleQuote); // Output: string
console.log(singleQuote, doubleQuote, templateLiteral); // Output: Hello World Hello, World!

// 1.6 Boolean
// Represents true or false values.
let isTrue = true;
let isFalse = false;
console.log(typeof isTrue); // Output: boolean
console.log(isTrue, isFalse); // Output: true false

// 1.7 Symbol
// Represents a unique and immutable identifier, often used as object property keys.
let sym1 = Symbol('id'); // Symbol with description 'id'
let sym2 = Symbol('id'); // Different symbol, even with the same description
console.log(typeof sym1); // Output: symbol
console.log(sym1 === sym2); // Output: false (Symbols are unique)

// 2. Non-Primitive (Reference) Data Types
// Reference types are mutable and stored by reference (changes affect all references).

// 2.1 Object
// Represents a collection of key-value pairs.
let person = {
    name: "Alice",
    age: 25,
    isStudent: false
};
console.log(typeof person); // Output: object
console.log(person); // Output: { name: 'Alice', age: 25, isStudent: false }
// Modifying object property
person.age = 26;
console.log(person.age); // Output: 26

// 2.2 Array
// A special type of object used to store ordered lists.
// typeof returns 'object', so use Array.isArray() to check for arrays.
let numbers = [1, 2, 3, 4];
console.log(typeof numbers); // Output: object
console.log(Array.isArray(numbers)); // Output: true
console.log(numbers); // Output: [1, 2, 3, 4]
// Modifying array
numbers.push(5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// 2.3 Function
// A special type of object that can be invoked (called).
// Functions are first-class citizens in JavaScript (can be assigned, passed, etc.).
let greet = function (name) {
    return `Hello, ${name}!`;
};
console.log(typeof greet); // Output: function
console.log(greet("Bob")); // Output: Hello, Bob!

// 3. Special Notes on Data Types
// 3.1 Type Coercion
// JavaScript automatically converts types in certain operations.
let numString = "5";
let result = numString + 10; // String concatenation due to coercion
console.log(typeof result, result); // Output: string 510
let explicitNum = Number(numString) + 10; // Explicit conversion
console.log(typeof explicitNum, explicitNum); // Output: number 15

// 3.2 Checking for Equality
// Use === (strict equality) to avoid type coercion issues.
console.log(5 == "5"); // Output: true (loose equality, coerces types)
console.log(5 === "5"); // Output: false (strict equality, no coercion)

// 3.3 NaN and isNaN
// NaN represents invalid number results, and isNaN() checks for it.
let invalid = 0 / 0;
console.log(invalid); // Output: NaN
console.log(isNaN(invalid)); // Output: true
console.log(Number.isNaN("text")); // Output: false (Number.isNaN is stricter)

// 3.4 Dynamic Typing
// Variables can change types dynamically.
let dynamicVar = 42; // Number
console.log(typeof dynamicVar); // Output: number
dynamicVar = "Now I'm a string";
console.log(typeof dynamicVar); // Output: string

// 4. Summary of Data Types
// Primitive: undefined, null, number, bigint, string, boolean, symbol
// Non-Primitive: object, array, function
console.log("Primitive Types:", typeof undefinedVar, typeof nullVar, typeof intNum, typeof bigIntNum, typeof singleQuote, typeof isTrue, typeof sym1);
console.log("Non-Primitive Types:", typeof person, typeof numbers, typeof greet);