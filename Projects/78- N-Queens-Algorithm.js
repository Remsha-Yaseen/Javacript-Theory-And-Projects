



function dfsNQueens(n) {
  // Return an empty array for board sizes less than 1
  if (n < 1) {
    return [];
  }

  const results = [];

  // Helper function to check if placing a queen at (row, col) is valid
  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      const prevCol = board[i];
      // Check column overlap or diagonal overlap
      if (prevCol === col || Math.abs(prevCol - col) === Math.abs(i - row)) {
        return false;
      }
    }
    return true;
  }

  // DFS worker function to build the board row by row
  function search(row, currentBoard) {
    // Base Case: All rows have a queen assigned
    if (row === n) {
      results.push([...currentBoard]);
      return;
    }

    // Try placing a queen in each column for the current row
    for (let col = 0; col < n; col++) {
      if (isSafe(currentBoard, row, col)) {
        currentBoard.push(col);
        search(row + 1, currentBoard);
        currentBoard.pop(); // Backtrack
      }
    }
  }

  search(0, []);
  return results;
}
