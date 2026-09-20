
# Dynamic Programming
--------

## 1. Core Principles
* **Definition**: An algorithmic technique that solves complex problems by breaking them down into simpler subproblems and storing results to avoid redundant calculations.
* **Overlapping Subproblems**: The same smaller subproblems appear multiple times when solving a larger problem; caching their solutions eliminates duplicate work.
* **Optimal Substructure**: The optimal solution to a problem contains optimal solutions to its subproblems, allowing complex solutions to be built from smaller optimized parts.

## 2. Implementation Approaches
* **Memoization (Top-Down)*
  * Caches expensive function call results using a lookup structure.
  * Recursively evaluates from the top down, returning cached values when inputs repeat.
* **Tabulation (Bottom-Up)**: 
  * Builds solutions iteratively from the ground up by filling an array table with subproblem solutions.

## 3. Real-World Applications & Use Cases
* **Applications**: GPS route optimization, text processing (spell checkers/autocomplete edit distances), financial modeling, and resource allocation (knapsack problem).
* **When to Use**: 
  * The problem can be broken down into overlapping subproblems with optimal substructure.
  * A naive recursive solution results in repeated calculations.
  * You need to optimize time complexity at the cost of space complexity.
