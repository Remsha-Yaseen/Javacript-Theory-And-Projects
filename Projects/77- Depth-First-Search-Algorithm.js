


function dfs(graph, root) {
  const stack = [root];
  const visited = new Set();
  const reachableNodes = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      visited.add(node);
      reachableNodes.push(node);

      // Iterate through all possible neighbors for the current node
      for (let neighbor = 0; neighbor < graph[node].length; neighbor++) {
        // If an edge exists (value is 1) and the neighbor hasn't been visited yet
        if (graph[node][neighbor] === 1 && !visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return reachableNodes;
}
