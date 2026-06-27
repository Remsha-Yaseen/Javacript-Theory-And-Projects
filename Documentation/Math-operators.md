# JavaScript Math & Numbers Reference Guide

## 1. The Number Data Type
JavaScript's `Number` type represents both integers and floating-point (decimal) values. It also includes three symbolic values:
* **`Infinity`**: A value greater than any other number (e.g., returned when dividing a positive number by `0`).
* **`-Infinity`**: A value smaller than any other number.
* **`NaN` (Not a Number)**: Represents an invalid numeric evaluation (e.g., attempting a math operation on an incompatible string like `"Jessica"`).

---

## 2. Arithmetic & Coercion

### Standard Operators
* **Addition (`+`)**: Computes the sum.
* **Subtraction (`-`)**: Computes the difference.
* **Multiplication (`*`)**: Computes the product.
* **Division (`/`)**: Computes the quotient.
* **Remainder (`%`)**: Returns the division remainder.
* **Exponentiation (`**`)**: Raises the base to an exponent power.

### Type Coercion Rules
* **With Strings**: The `+` operator forces numbers into strings and performs **concatenation**. Conversely, `-`, `*`, and `/` force strings into numbers to complete the math operation.
* **With Null/Undefined**: In mathematical evaluations, `null` is coerced to `0`, while `undefined` is evaluated as `NaN`.

```javascript
console.log(5 + '10');     // "510" (String)
console.log('10' - 5);     // 5     (Number)
console.log('10' * 2);     // 20    (Number)
console.log('20' / 2);     // 10    (Number)

console.log(null + 5);      // 5     (null -> 0)
console.log(undefined + 5); // NaN   (undefined -> NaN)
```





# Operator Precedence & Associativity

Understanding how operators are evaluated is crucial for writing predictable code. When an expression contains multiple operators, their execution order is determined by two main rules: **Precedence** and **Associativity**.

---

## 1. Operator Precedence
Precedence determines the **order of operations** when different operators appear in the same expression. Operators with higher precedence are executed first.

### Evaluation Order (Highest to Lowest):
1. **Parentheses `()`** – Always executes first.
2. **Exponentiation `**`** – Evaluates next.
3. **Multiplication `*` & Division `/`** – Evaluates before addition/subtraction.
4. **Addition `+` & Subtraction `-`** – Evaluates last.

---

## 2. Operator Associativity
Associativity determines the **execution direction** when operators of the *same* precedence level appear next to each other.

* **Left-to-Right (L-to-R):** Most operators (like `+`, `-`, `*`, `/`) evaluate from left to right.
* **Right-to-Left (R-to-L):** The exponentiation operator (`**`) evaluates from right to left.



console.log((2 + 3) * 4);   // 20  (Parentheses first)
console.log(10 - 2 + 3);    // 11  (Left-to-right: 8 + 3)
console.log(2 ** 3 ** 2);   // 512 (Right-to-left: 2 ** 9)



## 3. Increment, Decrement & Assignment

### Unary Increment & Decrement
Unary operators operate on a single operand to increase or decrease its value by `1`. The timing of this modification depends on whether you use **Prefix** or **Postfix** notation.

#### 1. Prefix (`++num`, `--num`)
* **Behavior:** Changes the variable value **first**, then returns the newly updated value.
* **Example:**

  ```javascript
  let num = 5;
  let result = ++num; // num becomes 6, then 6 is assigned to result
  console.log(num);    // Output: 6
  console.log(result); // Output: 6
   ```

----


### Compound Assignment Operators
These combine an arithmetic operation with a value reassignment. They are a shorthand way to update the current value of a variable.



| Operator | Name | Equivalent To |
| :---: | :--- | :--- |
| `+=` | Addition Assignment | `x = x + y` |
| `-=` | Subtraction Assignment | `x = x - y` |
| `*=` | Multiplication Assignment | `x = x * y` |
| `/=` | Division Assignment | `x = x / y` |
| `%=` | Remainder Assignment | `x = x % y` |
| `**=` | Exponentiation Assignment | `x = x ** y` |

---------



### Equality Comparisons

* **Equality (`==`)**: Compares two values for equality after performing **type coercion** (converting the data types so they match before comparing).
* **Strict Equality (`===`)**: Compares both the **types** and the **values** without coercion. If the data types are different, it immediately returns `false`. *(Highly Recommended)*
* **Inequality (`!=`) vs. Strict Inequality (`!==`)**: Follows the exact same structural coercion logic rules as the equality operators above to determine if values are *not* equal.


----------


### Comparison Workflow



| Operator | Name | Type Coercion? | Description |
| :---: | :--- | :---: | :--- |
| `==` | Loose Equality | **Yes** | Returns `true` if values match after conversion. |
| `===` | Strict Equality | **No** | Returns `true` only if both type and value match. |
| `!=` | Loose Inequality | **Yes** | Returns `true` if values do not match after conversion. |
| `!==` | Strict Inequality | **No** | Returns `true` if either type or value do not match. |



-----

### Code Examples

```javascript
console.log(5 == '5');  // true  (Coerced values match)
console.log(5 === '5'); // false (Types differ: number vs string)
```

Bitwise Operators
Operate directly on the binary representations of values:

& (AND) | | (OR) | ^ (XOR) | ~ (NOT)

<< (Left Shift) | >> (Right Shift)

&= / |=: Compound bitwise assignment operators.

### 5. Control Flow & Logical Operators
Conditionals (if, else if, else)
Evaluates conditions within a boolean context. Code blocks execute if a statement is truthy, or fall back if it evaluates to a falsy value.

```
const score = 85;
if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B'); // Executes
} else {
  console.log('C');
}
```


## 6. Native Math & Number Methods

### Built-in Math Object Utilities
The global `Math` object provides properties and methods for mathematical constants and functions. It works exclusively with the `Number` type (it does not work with `BigInt`).

| Method | Description | Example | Output |
| :--- | :--- | :--- | :--- |
| `Math.random()` | Returns a floating-point decimal between `0` (inclusive) and `1` (exclusive). | `Math.random()` | `0.4157...` |
| `Math.max(...nums)` | Pulls the highest value from a provided set. | `Math.max(3, 7, 2)` | `7` |
| `Math.min(...nums)` | Pulls the lowest value from a provided set. | `Math.min(3, 7, 2)` | `2` |
| `Math.ceil(x)` | Rounds a number **up** to the nearest integer. | `Math.ceil(4.2)` | `5` |
| `Math.floor(x)` | Rounds a number **down** to the nearest integer. | `Math.floor(4.9)` | `4` |
| `Math.round(x)` | Rounds a number to the nearest integer based on standard fractional rules. | `Math.round(4.5)` | `5` |
| `Math.trunc(x)` | Drops decimal values to isolate the integer portion without rounding. | `Math.trunc(4.9)` | `4` |
| `Math.sqrt(x)` | Computes the square root of a value. | `Math.sqrt(16)` | `4` |
| `Math.cbrt(x)` | Computes the cube root of a value. | `Math.cbrt(27)` | `3` |
| `Math.abs(x)` | Extracts the positive absolute value. | `Math.abs(-5)` | `5` |
| `Math.pow(b, e)` | Raises a base value (`b`) to the exponent power (`e`). | `Math.pow(2, 3)` | `8` |



```javascript
// Global vs Strict Number NaN checks
console.log(isNaN("Text"));        // true  (Coerces string to NaN first)
console.log(Number.isNaN("Text")); // false (Correctly identifies type as string)
// Parsing and Formatting
console.log(parseInt("42px"));     // 42     (Number)

console.log(parseFloat("3.14m"));   // 3.14   (Number)
console.log((12.3456).toFixed(2)); // "12.35" (String)
```
