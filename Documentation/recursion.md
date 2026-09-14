
# JavaScript Recursion Keynotes
--------------



## 1. Core Concepts & Anatomy
* **Definition**: A programming technique where a function calls itself repeatedly until a **base case** is reached.
* **Base Case**: The termination condition that stops recursion. **Crucial**: Omitting or misdefining the base case leads to infinite loops and stack overflow errors.
* **Recursive Case**: The branch where the function calls itself with modified parameters moving toward the base case.
* **Example**:
```javascript
function findFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * findFactorial(n - 1);
}
