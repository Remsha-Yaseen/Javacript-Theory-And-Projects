
# Dynamic Programming

--------

## 1. Core Principles
* **Definition**: An algorithmic technique that solves complex problems by breaking them down into simpler subproblems and caching results to eliminate redundant calculations.
* **Overlapping Subproblems**: Occurs when smaller subproblems appear multiple times during computation; storing their solutions prevents duplicate work.
* **Optimal Substructure**: The property where an optimal solution to the overall problem can be constructed from optimal solutions to its subproblems.

## 2. Implementation Approaches
* **Memoization (Top-Down)**: 
  * Caches results of expensive recursive calls using a lookup structure (e.g., object or map).
  * Evaluates problems recursively from the top down, returning cached values when inputs repeat.
* **Tabulation (Bottom-Up)**: 
  * Builds the solution iteratively from the ground up by populating an array table with base cases and progressively computing larger subproblems.

## 3. Real-World Applications & Use Cases
* **Applications**: Route optimization (shortest path algorithms), text processing (edit distance / spell checkers), financial modeling, and resource allocation (knapsack problems).
* **When to Use**: 
  * The problem contains overlapping subproblems and optimal substructure.
  * A naive recursive solution performs redundant calculations.
  * You need to optimize time complexity at the expense of additional space complexity.
