// JavaScript Arrays and Array Methods: Detailed Explanation with Inline Comments

// Arrays are ordered, indexed collections used to store multiple values.
// They are objects in JavaScript, with built-in methods for manipulation.

// 1. Creating and Basic Manipulation
// Arrays can be created using literals or the Array constructor.
let fruits = ["apple", "banana", "orange"]; // Array literal
let numbers = new Array(1, 2, 3); // Array constructor
console.log(fruits); // Output: ['apple', 'banana', 'orange']
console.log(numbers); // Output: [1, 2, 3]

// Basic manipulation with push, pop, shift, unshift
fruits.push("grape"); // Add to end
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
fruits.pop(); // Remove from end
console.log(fruits); // Output: ['apple', 'banana', 'orange']
fruits.unshift("kiwi"); // Add to start
console.log(fruits); // Output: ['kiwi', 'apple', 'banana', 'orange']
fruits.shift(); // Remove from start
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// 2. Array Methods

// forEach: Executes a function for each array element (no return value).
fruits.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`); // Output: Index 0: apple, Index 1: banana, Index 2: orange
});

// map: Creates a new array with results of calling a function on each element.
let upperFruits = fruits.map(item => item.toUpperCase());
console.log(upperFruits); // Output: ['APPLE', 'BANANA', 'ORANGE']
console.log(fruits); // Output: ['apple', 'banana', 'orange'] (original unchanged)

// filter: Creates a new array with elements that pass a test.
let longFruits = fruits.filter(item => item.length > 5);
console.log(longFruits); // Output: ['banana', 'orange']

// reduce: Reduces array to a single value by applying a function.
let nums = [1, 2, 3, 4];
let sum = nums.reduce((total, num) => total + num, 0); // 0 is initial value
console.log(sum); // Output: 10

// reduceRight: Like reduce, but processes from right to left.
let concatenated = nums.reduceRight((str, num) => str + num, "");
console.log(concatenated); // Output: "4321"

// find: Returns the first element that satisfies a condition.
let firstEven = nums.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2

// findIndex: Returns the index of the first element that satisfies a condition.
let firstEvenIndex = nums.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // Output: 1

// slice: Returns a shallow copy of a portion of the array (non-destructive).
let sliced = fruits.slice(1, 3); // Start at index 1, up to (but not including) 3
console.log(sliced); // Output: ['banana', 'orange']
console.log(fruits); // Output: ['apple', 'banana', 'orange'] (original unchanged)

// splice: Modifies array by removing/adding elements (destructive).
let removed = fruits.splice(1, 1, "mango"); // Remove 1 element at index 1, add "mango"
console.log(fruits); // Output: ['apple', 'mango', 'orange']
console.log(removed); // Output: ['banana'] (removed elements)

// 3. Other Useful Array Methods
// includes: Checks if an array contains a specific value.
console.log(fruits.includes("mango")); // Output: true

// indexOf: Returns the first index of a value, or -1 if not found.
console.log(fruits.indexOf("apple")); // Output: 0
console.log(fruits.indexOf("banana")); // Output: -1

// join: Combines elements into a string with a separator.
let fruitString = fruits.join(", ");
console.log(fruitString); // Output: apple, mango, orange

// sort: Sorts array in place (modifies original).
let sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ['apple', 'mango', 'orange']
let sortedNums = [10, 2, 5].sort((a, b) => a - b); // Numeric sort
console.log(sortedNums); // Output: [2, 5, 10]

// reverse: Reverses array in place.
fruits.reverse();
console.log(fruits); // Output: ['orange', 'mango', 'apple']

// 4. Array Destructuring
// Extracts values into variables using a concise syntax.
let [first, second] = fruits;
console.log(first, second); // Output: orange mango

// Skip elements
let [, , third] = fruits;
console.log(third); // Output: apple

// Destructuring with rest
let [head, ...tail] = fruits;
console.log(head, tail); // Output: orange ['mango', 'apple']

// Destructuring in function parameters
function printFruits([f1, f2]) {
    console.log(`First: ${f1}, Second: ${f2}`);
}
printFruits(fruits); // Output: First: orange, Second: mango

// 5. Spread and Rest Operators
// Spread: Expands array elements into individual elements.
let moreFruits = ["kiwi", "grape"];
let allFruits = [...fruits, ...moreFruits]; // Combine arrays
console.log(allFruits); // Output: ['orange', 'mango', 'apple', 'kiwi', 'grape']

// Spread for copying arrays (shallow copy)
let fruitCopy = [...fruits];
fruitCopy.push("pear");
console.log(fruitCopy); // Output: ['orange', 'mango', 'apple', 'pear']
console.log(fruits); // Output: ['orange', 'mango', 'apple'] (original unchanged)

// Rest: Collects remaining elements into an array.
function sumNumbers(...nums) { // Rest in function parameters
    return nums.reduce((total, num) => total + num, 0);
}
console.log(sumNumbers(1, 2, 3, 4)); // Output: 10

// 6. Multidimensional Arrays
// Arrays can contain other arrays.
let matrix = [[1, 2], [3, 4], [5, 6]];
console.log(matrix[1][0]); // Output: 3 (access nested element)
let flattened = matrix.flat(); // Flatten one level
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

// 7. Practical Example: Combining Methods
// Example: Process an array of objects
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];
let highScores = students
    .filter(student => student.score >= 80) // Keep scores >= 80
    .map(student => student.name.toUpperCase()) // Transform names
    .sort(); // Sort alphabetically
console.log(highScores); // Output: ['ALICE', 'BOB']

// 8. Best Practices
// - Use map, filter, reduce for functional, non-destructive operations.
// - Avoid mutating arrays with splice unless necessary; prefer slice.
// - Use destructuring for cleaner code when accessing elements.
// - Use spread for copying or combining arrays to avoid reference issues.
// - Be cautious with sort for numbers; provide a comparison function.
// - Chain array methods for concise, readable data processing.

// Example: Calculate average of valid scores
function averageScores(scores) {
    const validScores = scores.filter(num => typeof num === "number" && !isNaN(num));
    return validScores.length
        ? validScores.reduce((sum, num) => sum + num, 0) / validScores.length
        : 0;
}
console.log(averageScores([90, 80, "invalid", 70, NaN])); // Output: 80