
# Graphs & Trees
---------

## 1. Graphs Overview & Representations
* **Graph Definition**: A network of nodes (vertices) connected by edges.
* **Graph Types**: Directed/Undirected, Weighted/Unweighted, Cyclic/Acyclic (DAG), and Vertex/Edge labeled.
* **Representations**:
  * **Adjacency List**: Each node stores a list of neighbors. Space-efficient for sparse graphs.
  * **Adjacency Matrix**: A 2D array representing edge connections. Memory-intensive but provides $O(1)$ edge lookup.

## 2. Graph Traversals
* **Breadth-First Search (BFS)**: Uses a **Queue** (FIFO); explores level by level; ideal for finding the shortest path in unweighted graphs.
* **Depth-First Search (DFS)**: Uses a **Stack** or recursion (LIFO); explores a branch fully before backtracking; ideal for cycle detection and pathfinding.

## 3. Trees & Binary Search Trees (BST)
* **Tree**: A connected, acyclic graph structure.
* **Binary Tree**: A tree where each node has at most two children (left and right).
* **Binary Search Tree (BST)**: A specialized binary tree where every left child is less than its parent, and every right child is greater than its parent.

## 4. Advanced Structures: Tries, Priority Queues & Heaps
* **Tries (Prefix Trees)**: Tree structures used to store strings character by character, optimizing search and insertion operations ($O(L)$ where $L$ is string length) for autocomplete and spell-checking.
* **Priority Queues**: Abstract data types where elements are served based on priority rather than strict insertion order (unlike FIFO queues or LIFO stacks).
* **Heaps**: Tree-based data structures satisfying the heap property:
  * **Max-Heap**: Parent nodes are greater than or equal to their children (largest element at the root).
  * **Min-Heap**: Parent nodes are less than or equal to their children (smallest element at the root).
