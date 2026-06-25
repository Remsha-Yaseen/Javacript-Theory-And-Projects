# JavaScript Core Fundamentals Review

## 1. Introduction to JavaScript
While HTML and CSS establish structural design and layout, **JavaScript** injects dynamic behavior and interactivity into web pages. It handles real-time user inputs, powers complex element animations, and builds robust web applications.

---

## 2. Variables in JavaScript

### Declaration and Assignment
Variables are named containers used to store data values. They are declared using `let` or `const`, and values are assigned using the assignment operator (`=`):


  ```javascript
let cityName;
cityName = "New York";
```

### `let` vs. `const`
* **`let`**: Allows variables to be freely reassigned new values later in the execution.
* **`const`**: Declares a block-scoped constant value that cannot be reassigned. Attempting to overwrite it throws a `TypeError`.


```
let currentScore = 10;
currentScore = 15; // Valid

const PI = 3.14159;
PI = 3.14; // TypeError: Assignment to constant variable.
```

### Variable Naming Conventions
* Must use **camelCase** casing (e.g., `cityName`, `isLoggedIn`).
* Must begin with a letter, an underscore (`_`), or a dollar sign (`$`). **Never** start a name with a number.
* Cannot contain blank spaces or special punctuation characters (except `_` and `$`).
* Cannot use reserved language keywords (e.g., `let`, `const`, `function`).
* Names are strictly **case-sensitive** (`age` and `Age` are treated as separate variables).

---

## 3. Data Types in JavaScript
JavaScript is a **dynamically typed** language. You do not explicitly declare a variable's type; the runtime engine automatically interprets it based on its assigned value.


```
let status = 200;       // Interpreted as a Number
status = "Success";     // Safely updated to a String
```



### The Primitive Data Types
* **Number**: Represents both integers (e.g., `7`, `-90`) and floating-point decimal values (e.g., `3.14`, `0.05`).
* **BigInt**: Represents integers of arbitrary precision length when values exceed the safe limits of the `Number` type. Appended with an `n`.


```
const hugeHex = 1234567890123456789012345678901234567890n;
```

* **String**: A sequence of text characters wrapped inside matching single (`'`) or double (`"`) quotes.
* **Boolean**: A binary logic state representing either `true` or `false`.
* **Undefined**: The default state of a variable that has been formally declared but not yet assigned an initialization value.
* **Null**: An intentional, explicit assignment representing the complete absence of any object value.
* **Symbol**: A unique, completely immutable data type used to generate distinct, collision-free identifiers for object properties.


```
const key1 = Symbol("id");
const key2 = Symbol("id");
console.log(key1 === key2); // false
```

### Non-Primitive: The Object Data Type
An **Object** is a structural collection of unordered key-value pairs used to store grouped data configurations.

```
let pet = {
  name: "Fluffy",
  age: 3,
  type: "dog"
};
```


### The `typeof` Operator
The `typeof` operator evaluates and returns a string indicating the current evaluation type of an expression.

---

```
console.log(typeof 25);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof "text");     // "string"

// JavaScript Quirk: typeof null returns "object" due to legacy architectural design.
console.log(typeof null);       // "object"
```


## 4. Strings & String Manipulation

### String Immutability
Strings are **immutable**. Once created, the individual characters within that specific string instance cannot be modified. However, the variable holding the string can still be reassigned a completely new string pointer value.

```
let name = "John";
name[0] = "M"; // Silent failure or error; does not change "John" to "Mohn"
name = "Jane"; // Valid re-assignment
```



### String Concatenation
There are three common ways to join multiple string fragments together:

1. **The `+` Operator**: Combines static strings with dynamic variables.

```
let name = "Asad";
let info = name + " is " + 25 + " years old."; // "Asad is 25 years old."
```


2. **The `+=` Appending Operator**: Appends a new string fragment to the end of an existing string variable.

```
let message = "Welcome, ";
message += "Asad!"; // "Welcome, Asad!"
```

3. **The `.concat()` Method**: A native string method that links strings together.

```
let fullName = "John".concat(" ", "Doe"); // "John Doe"
```
---

## 5. Syntax Mechanics: Semicolons & Comments

### Semicolons (`;`)
Semicolons mark the explicit termination of a single instructional statement. Using them consistently eliminates execution ambiguity and prevents parsing defects.

```
let message = "Hello"; // Statement one terminates
let count = 42;        // Statement two terminates
```


### Code Comments
Comments are ignored entirely by the JavaScript compilation engine and serve as in-code developer documentation.


```
// Single-line comments utilize a double forward-slash format.

/*
   Multi-line comments 
   can safely span across 
   multiple lines of block space.
*/
```


---



## 6. Output Debugging: `console.log()`
The `console.log()` method prints variables, evaluation outputs, and status strings directly to the browser or runtime developer console, serving as an invaluable basic testing and troubleshooting utility.

```
console.log("Hello, World!"); // Prints: Hello, World!
```
