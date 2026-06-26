# JavaScript Strings Reference Guide:
------

## 1. String Basics

### Definition
A **string** is a primitive data type representing a sequence of characters wrapped in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``). Strings are **immutable**, meaning their individual characters cannot be changed once created.

### Character Access
Characters within a string are retrieved using zero-based index numbers wrapped in bracket notation:

```javascript
const developer = "Jessica";
console.log(developer[0]); // "J"
```

### Escape Sequences
* **Newline (`\n`)**: Forces the string text to break onto a new line.
* **Character Escaping (`\`)**: Prevents the browser from misinterpreting internal quotation marks.

```javascript
// Newline Character
const poem = "Roses are red,\nViolets are blue.";

// Escaping Quotes
const statement = "She said, \"Hello!\""; 
console.log(statement); // She said, "Hello!"
```


### Template Literals & Interpolation
Defined using backticks (`` ` ``), template literals enable clean multiline string generation and allow variable or expression insertion directly inside text using `${expression}` syntax (known as **string interpolation**).

```javascript
const name = "Jessica";
// String Interpolation Example
const greeting = `Hello, ${name}!`; 
console.log(greeting); // Output: Hello, Jessica!
```

## 2. Character Encoding: ASCII & Unicode

### ASCII vs. Unicode
* **ASCII**: Uses specific numeric values to represent basic English characters.
* **Unicode**: JavaScript strings utilize UTF-16 Unicode internally. Because the first 128 Unicode characters completely mirror standard ASCII codes, traditional ASCII code examples map identically.

### Encoding Methods
* **`charCodeAt(index)`**: Returns the UTF-16 integer code unit of a character located at a specific index.
* **`String.fromCharCode(code)`**: Converts a numeric character code back into its equivalent string character.

```javascript
// Get character code
const codeUnit = "A".charCodeAt(0);
console.log(codeUnit); // Output: 65

// Convert code to character
const character = String.fromCharCode(65);
console.log(character); // Output: "A"
```


## 3. Common String Methods

### Searching and Inspection

* **`indexOf(substring)`**: Returns the position index of the first occurrence of a substring. Returns `-1` if the substring is not found.
* **`includes(substring)`**: Returns a boolean (`true`/`false`) indicating if a string contains a specific sequence.

```javascript
const text = "The quick brown fox jumps.";

// Find index of a substring
console.log(text.indexOf("fox"));  // Output: 16
console.log(text.indexOf("cat"));  // Output: -1

// Check presence of a substring
console.log(text.includes("fox")); // Output: true
console.log(text.includes("cat")); // Output: false
```


### Extraction and Modification

> **Note:** Because strings are immutable, these methods do not change the original variable; they return a brand new string.

* **`slice(start, end)`**: Extracts a segment of a string from a specified `start` index up to (but not including) the `end` index.
* **`toUpperCase()` / `toLowerCase()`**: Converts all alphabet characters into uppercase or lowercase text.
* **`replace(target, replacement)`**: Replaces only the **first** occurrence of a matching substring.
* **`replaceAll(target, replacement)`**: Replaces **all** matching instances of a character or pattern.
* **`repeat(count)`**: Clones and joins a string a specific number of times.

```javascript
const text = "freeCodeCamp";

// Slice example
console.log(text.slice(0, 4));   // Output: "free"
console.log(text.slice(4, 8));   // Output: "Code"

// Case conversion example
console.log(text.toUpperCase()); // Output: "FREECODECAMP"

// Replace methods example
const phrase = "I love cats and cats!";
console.log(phrase.replace("cats", "dogs"));    // Output: "I love dogs and cats!"
console.log(phrase.replaceAll("cats", "dogs")); // Output: "I love dogs and dogs!"

// Repeat example
const cheer = "Ho! ";
console.log(cheer.repeat(3));    // Output: "Ho! Ho! Ho! "
```


### Whitespace Trimming

* **`trim()`**: Strips whitespace out from both the beginning and end of a string.
* **`trimStart()`**: Strips whitespace exclusively from the start of a string.
* **`trimEnd()`**: Strips whitespace exclusively from the end of a string.

```javascript
const text = "  Hello, world!  ";

// Trim both sides
console.log(text.trim());      // Output: "Hello, world!"

// Trim start only
console.log(text.trimStart()); // Output: "Hello, world!  "

// Trim end only
console.log(text.trimEnd());   // Output: "  Hello, world!"
```


## 4. User Interaction Mechanics

### The `window.prompt()` Method
Prompts a modal dialog window inside the browser viewport to collect user input. It accepts a string instruction message as its first parameter and an optional initial text fallback value as the second parameter.

```javascript
// Syntax: window.prompt(message, defaultValue);
const favoriteAnimal = window.prompt("What's your favorite animal?", "Dog");

console.log(favoriteAnimal); // Output: Logs the exact text entered by the user
```
