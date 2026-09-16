
# Searching & Sorting Algorithms 
------------



## 1. Searching Algorithms
* **Linear Search**: Iterates sequentially through an array from start to finish.
  * **Use Case**: Best for unsorted or small datasets.
  * **Complexity**: Time $O(n)$, Space $O(1)$. Returns `-1` if the target is missing.
* **Binary Search**: Repeatedly halves a **sorted** array to locate a target value.
  * **Use Case**: Highly efficient for large, sorted datasets.
  * **Complexity**: Time $O(\log n)$, Space $O(1)$.

## 2. Divide-and-Conquer & Merge Sort
* **Divide-and-Conquer Strategy**: Breaks complex problems into smaller sub-problems using recursion.
* **Merge Sort**:
  * **Mechanism**: Recursively divides an array down to single-element sub-arrays, then merges them back together in sorted order.
  * **Complexity**: Time $O(n \log n)$ (splitting plus merging), Space $O(n)$ (not an in-place sorting algorithm).
