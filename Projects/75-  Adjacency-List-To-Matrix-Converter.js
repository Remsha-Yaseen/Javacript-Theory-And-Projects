

function adjacencyListToMatrix(adjList) {
  // Determine the number of nodes from the adjacency list keys
  const nodes = Object.keys(adjList);
  const n = nodes.length;

  // Initialize an n x n matrix with 0s
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0));

  // Populate the matrix based on existing edges in the adjacency list
  for (const node in adjList) {
    const fromIndex = Number(node);
    const neighbors = adjList[node];

    for (const neighbor of neighbors) {
      matrix[fromIndex][neighbor] = 1;
    }
  }

  // Print each row in the adjacency matrix
  for (const row of matrix) {
    console.log(row);
  }

  // Return the adjacency matrix
  return matrix;
}
