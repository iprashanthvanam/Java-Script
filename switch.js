// JavaScript Control Flow Statements: Detailed Explanation with Inline Comments

// Control flow statements dictate the execution order of code, including conditionals, loops, and jumps.
// This covers loops, break, continue, return, and try-catch, with conditionals used in context.

// 1. for Loop
// Executes a block of code a specified number of times, with an initialization, condition, and update.
for (let i = 0; i < 5; i++) { // Initialize i, check condition, increment i
    console.log(`Iteration ${i}`); // Output: Iteration 0, 1, 2, 3, 4
}

// for loop with array iteration
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit: ${fruits[i]}`); // Output: Fruit: apple, Fruit: banana, Fruit: orange
}

// 2. while Loop
// Executes a block of code as long as a condition is true.
let count = 0;
while (count < 3) { // Continues until count < 3 is false
    console.log(`Count: ${count}`); // Output: Count: 0, Count: 1, Count: 2
    count++; // Increment to avoid infinite loop
}

// 3. do-while Loop
// Executes a block at least once, then repeats while the condition is true.
let num = 0;
do {
    console.log(`Number: ${num}`); // Output: Number: 0, Number: 1
    num++;
} while (num < 2); // Condition checked after each iteration

// 4. for...in Loop
// Iterates over enumerable properties of an object (e.g., object keys).
const person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Output: name: Alice, age: 25, city: New York
}

// for...in with array (not recommended, but possible)
const arr = ["a", "b", "c"];
for (let index in arr) {
    console.log(`Index ${index}: ${arr[index]}`); // Output: Index 0: a, Index 1: b, Index 2: c
}

// 5. for...of Loop
// Iterates over iterable objects (e.g., arrays, strings, maps), accessing values directly.
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(`Color: ${color}`); // Output: Color: red, Color: green, Color: blue
}

// for...of with string
const text = "Hi";
for (let char of text) {
    console.log(`Character: ${char}`); // Output: Character: H, Character: i
}

// 6. break Statement
// Exits a loop or switch statement immediately.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Stops loop when i is 5
    }
    console.log(`Value: ${i}`); // Output: Value: 0, 1, 2, 3, 4
}

// break in nested loops (only breaks the innermost loop)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) break; // Breaks inner loop
        console.log(`i: ${i}, j: ${j}`); // Output: i: 1, j: 1, i: 2, j: 1, i: 3, j: 1
    }
}

// 7. continue Statement
// Skips the current iteration and proceeds to the next one.
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skips iteration when i is 2
    }
    console.log(`Number: ${i}`); // Output: Number: 0, Number: 1, Number: 3, Number: 4
}

// 8. return Statement
// Exits a function and optionally returns a value, stopping further execution in the function.
function findFirstEven(numbers) {
    for (let num of numbers) {
        if (num % 2 === 0) {
            return num; // Exits function with first even number
        }
    }
    return null; // Returns null if no even number is found
}
const numbers = [1, 3, 4, 6, 8];
console.log(findFirstEven(numbers)); // Output: 4

// 9. try...catch for Error Handling
// Handles exceptions (errors) to prevent program crashes.
try {
    let result = undefinedVar; // Accessing undeclared variable
    console.log(result); // Won't run due to error
} catch (error) {
    console.log(`Error caught: ${error.message}`); // Output: Error caught: undefinedVar is not defined
} finally {
    console.log("This runs regardless of error."); // Output: This runs regardless of error.
}

// Throwing custom errors
try {
    let input = -5;
    if (input < 0) {
        throw new Error("Negative numbers are not allowed!"); // Custom error
    }
    console.log("Input is valid.");
} catch (error) {
    console.log(`Custom error: ${error.message}`); // Output: Custom error: Negative numbers are not allowed!
}

// 10. Combining Conditionals with Loops
// Conditionals (if, switch) are often used within loops for complex control flow.
const scores = [85, 92, 78, 95, 88];
for (let score of scores) {
    if (score >= 90) {
        console.log(`${score}: A`); // Output: 92: A, 95: A
    } else if (score >= 80) {
        console.log(`${score}: B`); // Output: 85: B, 88: B
    } else {
        console.log(`${score}: C`); // Output: 78: C
    }
}

// 11. Labeled Statements
// Labels allow break or continue to target specific loops in nested structures.
outerLoop: for (let i = 1; i <= 3; i++) {
    innerLoop: for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outerLoop; // Breaks out of both loops
        }
        console.log(`i: ${i}, j: ${j}`); // Output: i: 1, j: 1, i: 1, j: 2, i: 1, j: 3
    }
}

// 12. Best Practices
// - Use for...of for arrays and iterables, for...in for objects.
// - Avoid infinite loops by ensuring loop conditions will eventually be false.
// - Use break and continue sparingly to maintain readability.
// - Handle errors with try...catch in critical sections.
// - Combine conditionals and loops logically for clear control flow.

// Example: Processing array with control flow
function processNumbers(nums) {
    let sum = 0;
    try {
        for (let num of nums) {
            if (typeof num !== "number") {
                throw new Error("Non-number found in array!");
            }
            if (num < 0) continue; // Skip negative numbers
            if (num > 100) break; // Stop if number exceeds 100
            sum += num;
        }
        return sum;
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return null;
    }
}
console.log(processNumbers([10, 20, -5, 30])); // Output: 60
console.log(processNumbers([10, "invalid", 30])); // Output: Error: Non-number found in array!, null




// JavaScript switch Statement: Detailed Explanation with Inline Comments

// The switch statement evaluates an expression and executes code associated with a matching case.
// It's ideal for comparing a single value against multiple discrete options, often more readable than multiple if-else statements.

// 1. Basic switch Syntax
// Syntax: switch (expression) { case value: code; break; ... default: code; }
let day = "Monday";
switch (day) { // Evaluate the value of 'day'
    case "Monday": // Matches if day === "Monday"
        console.log("Start of the workweek!");
        break; // Exits switch to prevent fall-through
    case "Wednesday":
        console.log("Midweek!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    default: // Executes if no case matches
        console.log("Another day.");
}
// Output: Start of the workweek!

// 2. Multiple Cases for Same Code
// Multiple case values can share the same code block.
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "pear": // Both apple and pear trigger the same code
    case "peach":
        console.log("Sweet fruit!"); // Output: Sweet fruit!
        break;
    case "banana":
        console.log("Soft fruit!");
        break;
    default:
        console.log("Unknown fruit.");
}

// 3. Fall-Through Behavior
// Without 'break', execution continues to the next case (intentional or bug).
let number = 2;
switch (number) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two"); // Output: Two
        // No break, so it falls through to case 3
    case 3:
        console.log("Two or Three"); // Output: Two or Three
        break;
    default:
        console.log("Other number");
}

// 4. switch with Expressions
// Case values can be expressions, and the switch expression can be computed.
let score = 85;
switch (true) { // Use true to evaluate expressions in cases
    case score >= 90:
        console.log("Grade: A");
        break;
    case score >= 80:
        console.log("Grade: B"); // Output: Grade: B
        break;
    case score >= 70:
        console.log("Grade: C");
        break;
    default:
        console.log("Grade: D or below");
}

// 5. switch with Different Data Types
// switch uses strict equality (===), so types matter.
let input = "1"; // String, not number
switch (input) {
    case 1: // Number 1
        console.log("Number 1");
        break;
    case "1": // String "1"
        console.log("String 1"); // Output: String 1
        break;
    default:
        console.log("Other input");
}

// 6. Nested switch Statements
// switch statements can be nested for complex logic (use cautiously for readability).
let category = "clothing";
let item = "shirt";
switch (category) {
    case "clothing":
        switch (item) { // Nested switch
            case "shirt":
                console.log("Men's shirt selected."); // Output: Men's shirt selected.
                break;
            case "pants":
                console.log("Men's pants selected.");
                break;
            default:
                console.log("Unknown clothing item.");
        }
        break;
    case "electronics":
        console.log("Electronics category.");
        break;
    default:
        console.log("Unknown category.");
}

// 7. switch with Default Case
// Default case handles unmatched values, acting like an else clause.
let color = "purple";
switch (color) {
    case "red":
        console.log("Color is red.");
        break;
    case "blue":
        console.log("Color is blue.");
        break;
    default:
        console.log("Color not recognized."); // Output: Color not recognized.
}

// 8. Using switch in a Function
// switch is often used in functions to return values based on input.
function getDayType(dayNumber) {
    switch (dayNumber) {
        case 0:
        case 6:
            return "Weekend"; // Multiple cases for weekend
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Weekday";
        default:
            return "Invalid day number";
    }
}
console.log(getDayType(0)); // Output: Weekend
console.log(getDayType(3)); // Output: Weekday
console.log(getDayType(7)); // Output: Invalid day number

// 9. switch with Objects or Complex Values
// switch can work with objects if compared correctly (e.g., using a property).
let user = { role: "admin" };
switch (user.role) {
    case "admin":
        console.log("Full access granted."); // Output: Full access granted.
        break;
    case "editor":
        console.log("Edit access granted.");
        break;
    default:
        console.log("Limited access.");
}

// 10. Best Practices
// - Always include 'break' unless fall-through is intentional.
// - Use default case to handle unexpected inputs.
// - Prefer switch for discrete value comparisons; use if-else for ranges or complex conditions.
// - Ensure case values match the type of the switch expression (strict equality ===).
// - Keep switch statements concise to maintain readability.

// Example: Practical use of switch for menu selection
function handleMenuOption(option) {
    switch (option.toLowerCase()) {
        case "a":
            return "Action: Add item";
        case "d":
            return "Action: Delete item";
        case "u":
            return "Action: Update item";
        default:
            return "Invalid option";
    }
}
console.log(handleMenuOption("A")); // Output: Action: Add item
console.log(handleMenuOption("x")); // Output: Invalid option