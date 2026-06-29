# JavaScript Objects 

## 1. Object Basics

### Definition
An **object** is a non-primitive data structure composed of properties. Each property is defined as a **key: value** pair.

### Accessing & Setting Properties
Data inside an object can be accessed or updated using either **dot notation** or **bracket notation**. Bracket notation is required when keys contain spaces or are determined dynamically via variables.

```javascript
const person = {
  name: "Alice",
  age: 30
};

// Accessing Data
console.log(person.name);     // Output: "Alice" (Dot notation)
console.log(person["name"]);  // Output: "Alice" (Bracket notation)

// Setting / Updating Data
person.job = "Engineer";
person["hobby"] = "Knitting";
```


### Removing Properties
The delete operator removes a property from an object entirely. Subsequent access attempts on that property return undefined.

---

### Code Examples

```javascript

const person = { name: "Alice", job: "Engineer" };
delete person.job;

console.log(person.job); // Output: undefined
```

### 2. Verifying Property Existence

#### Detection Strategies
* **`hasOwnProperty(prop)`**: Returns a boolean indicating if the object holds the specified property directly (not inherited).
* **`Object.hasOwn(obj, prop)`**: The modern, recommended fallback alternative to `hasOwnProperty`. It safely checks for properties regardless of value (even if the value is a falsy 0, false, null, or undefined).
* **`in` Operator**: Returns true if the property exists directly on the object or its prototype inheritance chain.

---

### Code Examples

```javascript

const settings = { darkMode: false, language: null };

// Object.hasOwn() vs Direct True/False condition checking
console.log(Object.hasOwn(settings, "darkMode")); // Output: true

if (settings.darkMode) {
  // Direct check fails because false is evaluated as a falsy condition
}

if (Object.hasOwn(settings, "darkMode")) {
  console.log(settings.darkMode); // Safe, precise verification syntax
}

console.log("language" in settings); // Output: true
```


### 3. Nested Structures & Optional Chaining

#### Nested Objects
Properties nested deep inside a structure are retrieved by chaining dot or bracket accessors sequentially.

#### Optional Chaining (`?.`)
The optional chaining operator (`?.`) reads deeply nested properties without throwing a runtime error if an intermediate reference is `null` or `undefined`. Instead of crashing, the expression short-circuits and gracefully returns `undefined`.

---

### Execution Mechanism



---

### Code Examples

```javascript
const user = {
  profile: { address: { city: "Somewhere" } }
};

// Accessing nested objects safely
console.log(user.profile.address.city);  // Output: "Somewhere"
console.log(user.profile?.phone?.number); // Output: undefined (No crash)
```


### 4. Primitives vs. Non-Primitives



| Feature | Primitive Types | Non-Primitive Types |
| :--- | :--- | :--- |
| **Examples** | Numbers, Strings, Booleans, Null, Undefined, Symbols | Objects, Arrays, Functions |
| **Structure** | Represent single, immutable values | Store multiple values as complex properties |
| **Mutability** | Cannot be altered once created | Values can be modified dynamically |



## 5. Advanced Object Features

### Object Methods & `this`
Methods are standard functions stored as properties inside an object. The `this` keyword refers directly to the parent object context executing the method.


```
const person = {
  name: "Bob",
  sayHello: function() {
    return "Hello, my name is " + this.name;
  }
};
console.log(person.sayHello()); // Output: "Hello, my name is Bob"
```


### Object Constructor
The `new Object()` constructor initializes an empty wrapper instance when invoked using the new keyword.

### Object Destructuring
An inline extraction syntax used to unpack property values and cleanly assign them to individual local variables.


```
const person = { name: "Alice", age: 30 };
const { name, age } = person;

console.log(name); // Output: "Alice"
```

## 6. Working with JSON

### Definition
JSON (JavaScript Object Notation) is a text-based, lightweight language-agnostic data format for web serialization exchanges. Keys must be wrapped inside strict double quotes.

### Serialization Methods
* **`JSON.stringify(object)`**: Converts a live JavaScript object into a unified JSON string for transport or storage.
* **`JSON.parse(string)`**: Converts an incoming JSON data string back into a parsed, interactive JavaScript object structure.

## 6. Working with JSON

### Definition
JSON (JavaScript Object Notation) is a text-based, lightweight language-agnostic data format for web serialization exchanges. Keys must be wrapped inside strict double quotes.

### Serialization Methods
* **`JSON.stringify(object)`**: Converts a live JavaScript object into a unified JSON string for transport or storage.
* **`JSON.parse(string)`**: Converts an incoming JSON data string back into a parsed, interactive JavaScript object structure.


```
const user = { name: "John", age: 30 };

// Serialize to String
const jsonString = JSON.stringify(user);
console.log(jsonString); // Output: '{"name":"John","age":30}'

// Parse to Object
const userObject = JSON.parse(jsonString);
console.log(userObject.name); // Output: "John"
```
