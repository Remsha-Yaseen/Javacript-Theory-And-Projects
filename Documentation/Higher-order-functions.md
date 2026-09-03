Higher Order Function:
------



## 1. Callbacks & `forEach`
* **Callback Function**: A function passed as an argument to another function, executed after the main function completes.
* **`forEach()` Method**: Iterates over array elements to perform operations. The callback accepts three arguments: `currentElement`, `index`, and the `array`.

## 2. Higher-Order Array Methods
* **Higher-Order Function**: A function that accepts one or more functions as arguments or returns a function/value.
* **`map()` Method**: Creates a new array by applying a transformation function to each element of the original array.
* **`filter()` Method**: Creates a new array containing only the elements that pass a specific evaluation test.
* **`reduce()` Method**: Condenses an array into a single value using a reducer function with an `accumulator` and `currentValue`.

## 3. Method Chaining & Sorting
* **Method Chaining**: Calling multiple methods sequentially on the same object in a single line.
* **`sort()` Method**: Sorts elements **in place** (mutates the original array).
  * Strings sort alphabetically via UTF-16 code units.
  * Numbers require a compare function `(a, b) => a - b` to prevent incorrect string-based ordering.

## 4. Array Testing Methods (`every` & `some`)
* **`every()` Method**: Returns `true` only if **all** elements pass the provided test (short-circuits on failure).
* **`some()` Method**: Returns `true` if **at least one** element passes the test (short-circuits on success).
