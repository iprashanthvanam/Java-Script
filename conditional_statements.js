// JavaScript Conditional Statements: Detailed Explanation with Inline Comments

// Conditional statements control the flow of a program based on conditions.
// They allow execution of different code blocks depending on whether conditions evaluate to true or false.

// 1. if Statement
// Executes a block of code if a condition is true.
let age = 20;
if (age >= 18) { // Condition: checks if age is 18 or greater
    console.log("You are an adult."); // Output: You are an adult.
}

// 2. else Statement
// Executes a block of code if the 'if' condition is false.
let temperature = 15;
if (temperature > 25) {
    console.log("It's hot outside!");
} else { // Runs if temperature <= 25
    console.log("It's cool outside."); // Output: It's cool outside.
}

// 3. else if Statement
// Allows checking multiple conditions in sequence.
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) { // Checks if score is 80 or higher
    console.log("Grade: B"); // Output: Grade: B
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D or below");
}

// 4. Nested if Statements
// if statements inside other if statements for more complex logic.
let isStudent = true;
let hasID = false;
if (isStudent) { // Outer condition
    if (hasID) { // Inner condition
        console.log("Student with ID gets discount.");
    } else {
        console.log("Student needs ID for discount."); // Output: Student needs ID for discount.
    }
} else {
    console.log("Not a student, no discount.");
}

// 5. switch Statement
// Evaluates an expression and executes code based on matching cases.
// Useful for multiple discrete value comparisons.
let day = "Wednesday";
switch (day) { // Evaluate the value of 'day'
    case "Monday":
        console.log("Start of the workweek!");
        break; // Exit switch after matching case
    case "Wednesday":
        console.log("Midweek!"); // Output: Midweek!
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    default: // Runs if no case matches
        console.log("Another day.");
}
 
// switch with multiple cases for same outcome
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "pear": // Multiple cases can share the same code block
        console.log("Sweet fruit!"); // Output: Sweet fruit!
        break;
    case "banana":
        console.log("Soft fruit!");
        break;
    default:
        console.log("Unknown fruit.");
}

// 6. Ternary Operator
// A concise way to write simple if-else statements.
// Syntax: condition ? expressionIfTrue : expressionIfFalse
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: Welcome back!

// Nested ternary (use sparingly for readability)
let marks = 75;
let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : "D";
console.log(`Grade: ${grade}`); // Output: Grade: C

// 7. Logical Operators in Conditions
// Used to combine or modify conditions: && (AND), || (OR), ! (NOT)
let hasTicket = true;
let hasBoardingPass = false;
if (hasTicket && hasBoardingPass) { // Both must be true
    console.log("Board the plane.");
} else if (hasTicket || hasBoardingPass) { // At least one must be true
    console.log("Check in at counter."); // Output: Check in at counter.
} else {
    console.log("Cannot board.");
}

// Using NOT operator
let isClosed = false;
if (!isClosed) { // Negates the value of isClosed
    console.log("The store is open."); // Output: The store is open.
}

// 8. Truthy and Falsy Values
// JavaScript evaluates certain values as true or false in conditions.
// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
// Truthy values: Everything else (e.g., non-empty strings, non-zero numbers, objects)
let value = "";
if (value) {
    console.log("Value is truthy.");
} else {
    console.log("Value is falsy."); // Output: Value is falsy.
}

let number = 42;
if (number) {
    console.log("Number is truthy."); // Output: Number is truthy.
}

// 9. Short-Circuit Evaluation
// Logical operators stop evaluating as soon as the result is determined.
let user = null;
let username = user && user.name; // Short-circuits if user is falsy
console.log(username); // Output: null (doesn't try to access user.name)

let defaultName = "Guest";
let finalName = user || defaultName; // Uses defaultName if user is falsy
console.log(finalName); // Output: Guest

// 10. Best Practices
// - Use clear and readable conditions.
// - Prefer switch for multiple discrete values, if-else for ranges or complex logic.
// - Avoid deeply nested if statements; consider early returns or refactoring.
// - Use ternary operators for simple conditions, but avoid nesting for clarity.
// - Be mindful of truthy/falsy behavior to avoid unexpected results.

// Example: Refactored nested if with early return
function checkAccess(age, hasPermission) {
    if (age < 18) return "Access denied: Too young.";
    if (!hasPermission) return "Access denied: No permission.";
    return "Access granted.";
}
console.log(checkAccess(20, true)); // Output: Access granted.
console.log(checkAccess(16, true)); // Output: Access denied: Too young.
console.log(checkAccess(20, false)); // Output: Access denied: No permission.