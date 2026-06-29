# JavaScript Arrays Reference Guide

## 1. Array Basics

### Definition
A JavaScript **array** is an ordered collection of values, where each element is identified by a zero-based numeric index. Arrays can store mixed data types (numbers, strings, booleans, objects, or other arrays) and are stored contiguously in memory for fast index-based access.

### Indexing & Length
* **Zero-Based Indexing**: The first element starts at index `0`. Accessing an index that does not exist returns `undefined`.
* **`length` Property**: Returns the total number of elements currently stored in the array.

```javascript
const developers = ["Jessica", "Naomi", "Tom"];

console.log(developers[0]);      // Output: "Jessica"
console.log(developers[10]);     // Output: undefined
console.log(developers.length);  // Output: 3
```


### Updating Elements
Elements are mutated directly by targeting their specific index using the assignment operator (=).

```
const fruits = ['apple', 'banana', 'cherry'];
fruits[1] = 'blueberry';

console.log(fruits); // Output: ['apple', 'blueberry', 'cherry']
```

---

### 2. Two-Dimensional Arrays

#### Definition
A two-dimensional (2D) array is an array containing other arrays as its elements, creating a grid-like structure (rows and columns). Accessing an element requires chained brackets: array[rowIndex][columnIndex].



```javascriptconst fruits = ['apple', 'banana', 'cherry'];
fruits[1] = 'blueberry';

console.log(fruits); // Output: ['apple', 'blueberry', 'cherry']
```

### 3. Unpacking Arrays

#### Array Destructuring
A clean syntax to unpack values from an array and assign them directly to distinct local variables.

```
const fruits = ["apple", "banana", "orange"];
const [first, second, third] = fruits;

console.log(first);  // Output: "apple"
console.log(second); // Output: "banana"
```


#### Rest Syntax (...)

Used within destructuring assignments to capture all remaining unmapped elements into a brand new array.


```
const fruits = ["apple", "banana", "orange", "mango", "kiwi"];
const [first, second, ...rest] = fruits;

console.log(rest); // Output: ["orange", "mango", "kiwi"]
```


---

### 4. Core Array Methods

#### Queue & Stack Operations (Mutates Original Array)
* **`push(element)`**: Adds elements to the end of the array; returns the updated array length.
* **`pop()`**: Removes and returns the last element; returns undefined if empty.
* **`unshift(element)`**: Adds elements to the beginning of the array; returns the updated array length.
* **`shift()`**: Removes and returns the first element; returns undefined if empty.

```
const desserts = ["cake", "cookies"];

desserts.push("pie");       // ["cake", "cookies", "pie"]
desserts.pop();             // ["cake", "cookies"]
desserts.unshift("donut");  // ["donut", "cake", "cookies"]
desserts.shift();           // ["cake", "cookies"]
```



#### Search & Inspection
* **`indexOf(element)`**: Returns the index of the first occurrence of a value, or -1 if missing.
* **`includes(element)`**: Returns a boolean indicating if an array contains a value.

```
const tools = ["git", "npm", "git"];

console.log(tools.indexOf("git"));   // Output: 0
console.log(tools.indexOf("yarn"));  // Output: -1
console.log(tools.includes("npm"));  // Output: true
```



#### Structural Modification
* **`splice(start, deleteCount, ...items)`**: Mutates the array in-place by removing, replacing, or adding elements at any index position. Returns an array of deleted items.
* **`slice(start, end)`**: Non-mutating. Returns a shallow copy of a portion of an array from the start index up to (but excluding) the end index.
* **`concat(...values)`**: Non-mutating. Merges two or more arrays/values together into a new array.
* **`reverse()`**: Mutates the array in-place, reversing the order of its items.


```
// Splice (Index 1, delete 0 items, insert "yellow")
const colors = ["red", "blue"];
colors.splice(1, 0, "yellow"); 
console.log(colors); // Output: ["red", "yellow", "blue"]

// Slice extraction
const items = ["A", "B", "C"];
const partial = items.slice(1); 
console.log(partial); // Output: ["B", "C"]
```


#### Shallow Cloning with Spread (...)
The spread operator unpacks elements into a new wrapper to create a shallow copy, protecting the original array from downstream mutations.


```
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);

console.log(original); // Output: [1, 2, 3] (unmutated)
```


#### String Conversions
* **`split(separator)`**: String method. Breaks a string into an array of substrings based on a delimiter pattern.
* **`join(separator)`**: Array method. Chains all array elements into a single string, separated by the specified delimiter.

```
const strArray = "hello".split(""); // Output: ["h", "e", "l", "l", "o"]
const joinedStr = strArray.join("-"); // Output: "h-e-l-l-o"
```
