


function chunkArrayInGroups(arr, size) {
  let result = [];
  let i = 0;

  while (i < arr.length) {
    // Slice a chunk from the current index 'i' to 'i + size'
    result.push(arr.slice(i, i + size));
    // Move the index forward by the chunk size
    i += size;
  }

  return result;
}

// Example usage:
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); 
// Output: [["a", "b"], ["c", "d"]]


