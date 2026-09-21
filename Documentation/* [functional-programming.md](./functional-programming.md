
# JavaScript Functional Programming 
------

## 1. Pure vs. Impure Functions
* **Pure Functions**: Always produce the same output for the same input and have zero side effects (do not mutate external state or variables).
* **Impure Functions**: Introduce side effects by modifying external state, interacting with I/O, or mutating global variables.

## 2. Functional Programming Paradigm
* **Core Principles**: Focuses on *what* to do rather than *how*, utilizing declarative logic, immutable data structures, and higher-order functions.
* **Benefits**: Leads to cleaner, more predictable, and highly maintainable codebases.

## 3. Currying
* **Definition**: A functional programming technique that transforms a function taking multiple arguments into a nested sequence of functions, each taking a single argument.
* **Syntax Example**:
  ```javascript
  const curriedAverage = a => b => c => (a + b + c) / 3;
  console.log(curriedAverage(2)(3)(4)); // 3
