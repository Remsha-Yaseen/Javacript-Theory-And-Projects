
# Data Structures & Algorithms 
----------------


## 1. Big O Notation & Complexity
* **Big O Notation**: Describes the worst-case performance or growth rate of an algorithm relative to input size $n$.
* **Time & Space Complexities**:
  * **$O(1)$ (Constant)**: Fixed execution time/memory regardless of input.
  * **$O(\log n)$ (Logarithmic)**: Halves problem space per step (e.g., Binary Search).
  * **$O(n)$ (Linear)**: Execution/memory grows proportionally with input size.
  * **$O(n \log n)$ (Log-Linear)**: Common in efficient sorting algorithms (Merge/Quick Sort).
  * **$O(n^2)$ (Quadratic)**: Growth proportional to the square of input size (e.g., nested loops).

## 2. Problem-Solving Strategies
* **Understand the Problem**: Identify inputs, expected outputs, and transformation rules.
* **Pseudocode**: Write high-level, language-independent logic prior to coding.
* **Edge Cases**: Systematically test boundary conditions and limits.

## 3. Fundamental Data Structures
* **Dynamic Arrays**: Indexed, ordered collections supporting fast end-operations ($O(1)$) but costly middle insertions/deletions ($O(n)$).
* **Stacks**: Last-In, First-Out (LIFO) structures supporting $O(1)$ `push()` and `pop()` operations at the top.
* **Queues**: First-In, First-Out (FIFO) structures supporting $O(1)$ back insertions (`push`) and front removals (`shift`).
* **Linked Lists**: Chain-like node structures (Singly or Doubly linked) optimizing head/tail insertions ($O(1)$) at the expense of random access ($O(n)$).
