# JavaScript Comparisons & Conditionals Reference Guide

## 1. Comparisons with `null` and `undefined`

### The `undefined` Data Type
A variable is `undefined` when it has been declared but has not yet been assigned a value. It serves as the default value for uninitialized variables and missing function arguments. 

In numeric contexts, `undefined` converts to `NaN` (Not a Number). Because any numeric comparison against `NaN` evaluates to `false`, all relational comparisons with `undefined` fail.

```javascript
console.log(undefined < 0);  // false (NaN < 0)
console.log(undefined >= 0); // false (NaN >= 0)
```


### The null Data Type

The `null` type represents an **intentional absence** of any object value. It is one of JavaScript's primitive values and is treated as falsy in boolean contexts.

#### 1. Numeric Coercion
In numeric contexts (such as arithmetic operations or strict numeric conversions), `null` implicitly converts to `0`. 

```javascript
console.log(null < 0);  // false (0 < 0)
console.log(null >= 0); // true  (0 >= 0)
```


### Equality Comparison Quirks

#### Loose Equality (`==`)
Loose equality performs **type coercion** if the types being compared are different. However, `null` and `undefined` have a unique built-in rule in JavaScript's loose equality algorithm:
* `null` and `undefined` are loosely equal to each other.
* They are loosely equal to themselves.
* They are equal to **nothing else** in the entire language (not even other falsy values like `0`, `""`, or `false`).

```javascript
// Loose Equality Examples
console.log(null == undefined); // true
console.log(null == 0);         // false
console.log(undefined == NaN);  // false

// Strict Equality Example
console.log(null === undefined); // false
```


## 2. The switch Statement

### Definition
A switch statement evaluates a single expression and matches its resulting value against a series of strict case clauses. When a match is discovered, the code block accompanying that specific case executes.

### Control Keywords
* **`break`**: Must be placed at the conclusion of each case block to prevent code execution from automatically bleeding into the subsequent case (known as fall-through).
* **`default`**: An optional fallback block positioned at the end of the statement. It executes only if none of the defined cases match the evaluated expression.


```
const dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log("It's Monday! Time to start the week strong.");
    break;
  case 2:
    console.log("It's Tuesday! Keep the momentum going.");
    break;
  case 3:
    console.log("It's Wednesday! We're halfway there."); // Executes
    break;
  case 4:
    console.log("It's Thursday! Almost the weekend.");
    break;
  case 5:
    console.log("It's Friday! The weekend is near.");
    break;
  case 6:
    console.log("It's Saturday! Enjoy your weekend.");
    break;
  case 7:
    console.log("It's Sunday! Rest and recharge.");
    break;
  default:
    console.log("Invalid day! Please enter a number between 1 and 7.");
}
```
