// JavaScript Objects and Object-Oriented Programming (OOP): Detailed Explanation with Inline Comments

// Objects are key-value pairs used to store data and functionality.
// OOP in JavaScript leverages objects for encapsulation, inheritance, and polymorphism.

// 1. Creating and Manipulating Objects
// Objects can be created using object literals, constructors, or classes.

// Object Literal: Simplest way to create an object
let person = {
    name: "Alice", // Property: key-value pair
    age: 25,
    greet: function() { // Method: function property
        return `Hello, I'm ${this.name}!`;
    }
};
console.log(person.name); // Output: Alice
console.log(person.greet()); // Output: Hello, I'm Alice!

// Manipulating Objects
person.age = 26; // Update property
person.city = "New York"; // Add new property
delete person.age; // Delete property
console.log(person); // Output: { name: 'Alice', greet: [Function: greet], city: 'New York' }

// Accessing properties dynamically
let prop = "name";
console.log(person[prop]); // Output: Alice (dynamic access using bracket notation)

// 2. The 'this' Keyword
// 'this' refers to the object calling the method, but its value depends on context.
let car = {
    brand: "Toyota",
    describe: function() {
        return `This is a ${this.brand} car.`; // 'this' refers to car
    }
};
console.log(car.describe()); // Output: This is a Toyota car.

// 'this' in a standalone function (non-strict mode: global object; strict mode: undefined)
function showThis() {
    console.log(this);
}
showThis(); // Output: global object (e.g., window in browsers) or undefined in strict mode

// 3. Constructor Functions
// Functions used to create multiple objects with similar structure.
function Book(title, author) {
    this.title = title; // Assign properties to new object
    this.author = author;
    this.info = function() {
        return `${this.title} by ${this.author}`;
    };
}
const book1 = new Book("1984", "George Orwell"); // Create instance with 'new'
const book2 = new Book("Brave New World", "Aldous Huxley");
console.log(book1.info()); // Output: 1984 by George Orwell
console.log(book2.info()); // Output: Brave New World by Aldous Huxley

// 4. Prototypes
// Every object has a prototype, allowing shared properties/methods (inheritance).
Book.prototype.getAge = function(yearPublished) { // Add method to Book's prototype
    const currentYear = 2025; // Assuming current year
    return currentYear - yearPublished;
};
console.log(book1.getAge(1949)); // Output: 76 (2025 - 1949)
console.log(book2.getAge(1932)); // Output: 93

// Checking prototype
console.log(Book.prototype.isPrototypeOf(book1)); // Output: true
console.log(book1.__proto__ === Book.prototype); // Output: true (prototype chain)

// 5. Prototypal Inheritance
// Objects inherit properties/methods from their prototype.
function FictionBook(title, author, genre) {
    Book.call(this, title, author); // Inherit Book's properties
    this.genre = genre;
}
// Inherit Book's prototype
FictionBook.prototype = Object.create(Book.prototype);
FictionBook.prototype.constructor = FictionBook; // Reset constructor
FictionBook.prototype.describeGenre = function() { // Add new method
    return `This is a ${this.genre} fiction book.`;
};
const fictionBook = new FictionBook("Dune", "Frank Herbert", "Science Fiction");
console.log(fictionBook.info()); // Output: Dune by Frank Herbert (from Book)
console.log(fictionBook.describeGenre()); // Output: This is a Science Fiction fiction book.
console.log(fictionBook.getAge(1965)); // Output: 60 (from Book.prototype)

// 6. ES6 Classes
// Modern syntax for OOP, syntactic sugar over constructor functions and prototypes.
class Vehicle {
    constructor(brand, model) { // Constructor method
        this.brand = brand;
        this.model = model;
    }
    describe() { // Instance method (automatically added to prototype)
        return `${this.brand} ${this.model}`;
    }
    static compare(v1, v2) { // Static method (called on class, not instance)
        return `${v1.brand} vs ${v2.brand}`;
    }
}
const car1 = new Vehicle("Honda", "Civic");
const car2 = new Vehicle("Ford", "Mustang");
console.log(car1.describe()); // Output: Honda Civic
console.log(Vehicle.compare(car1, car2)); // Output: Honda vs Ford

// 7. Class Inheritance with extends
// ES6 classes simplify inheritance using 'extends' and 'super'.
class ElectricVehicle extends Vehicle {
    constructor(brand, model, batteryCapacity) {
        super(brand, model); // Call parent constructor
        this.batteryCapacity = batteryCapacity;
    }
    describe() { // Override parent method
        return `${super.describe()} with ${this.batteryCapacity}kWh battery`;
    }
}
const tesla = new ElectricVehicle("Tesla", "Model 3", 75);
console.log(tesla.describe()); // Output: Tesla Model 3 with 75kWh battery
console.log(tesla instanceof Vehicle); // Output: true (inherits from Vehicle)

// 8. Getters and Setters
// Control access to object properties using getter/setter methods.
class Person {
    #privateAge = 0; // Private field (ES2020+)
    constructor(name) {
        this.name = name;
    }
    get age() { // Getter
        return this.#privateAge;
    }
    set age(value) { // Setter
        if (value >= 0) {
            this.#privateAge = value;
        } else {
            console.log("Age cannot be negative!");
        }
    }
}
const person1 = new Person("Bob");
person1.age = 30; // Uses setter
console.log(person1.age); // Output: 30 (uses getter)
person1.age = -5; // Output: Age cannot be negative!
console.log(person1.age); // Output: 30 (unchanged)

// 9. Object Methods and Utilities
// Built-in methods for manipulating objects.
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // Output: ['a', 'b', 'c'] (array of keys)
console.log(Object.values(obj)); // Output: [1, 2, 3] (array of values)
console.log(Object.entries(obj)); // Output: [['a', 1], ['b', 2], ['c', 3]] (array of key-value pairs)

// Freezing an object (prevents adding, deleting, or modifying properties)
Object.freeze(obj);
obj.a = 10; // No effect (frozen)
console.log(obj.a); // Output: 1

// Sealing an object (allows modifying existing properties, but not adding/deleting)
const obj2 = { x: 100 };
Object.seal(obj2);
obj2.x = 200; // Allowed
obj2.y = 300; // Ignored
console.log(obj2); // Output: { x: 200 }

// 10. Best Practices
// - Use object literals for simple data structures.
// - Use ES6 classes for cleaner OOP syntax over constructor functions.
// - Leverage 'this' carefully, considering call context.
// - Use private fields (#) or closures for encapsulation.
// - Use Object.freeze or Object.seal for immutability when needed.
// - Keep inheritance chains shallow for simplicity.

// Example: Practical OOP with Class
class Library {
    #books = []; // Private array of books
    constructor(name) {
        this.name = name;
    }
    addBook(book) {
        this.#books.push(book);
        return `${book.title} added to ${this.name}`;
    }
    get bookCount() {
        return this.#books.length;
    }
}
const myLibrary = new Library("City Library");
console.log(myLibrary.addBook(new Book("The Hobbit", "J.R.R. Tolkien"))); // Output: The Hobbit added to City Library
console.log(myLibrary.bookCount); // Output: 1