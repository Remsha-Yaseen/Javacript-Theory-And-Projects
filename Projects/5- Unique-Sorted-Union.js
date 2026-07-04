
function uniteUnique(...arrays) {
  // Flatten the arrays into one, then use a Set to keep only unique values.
  // The Set object automatically removes duplicates while preserving insertion order.
  return [...new Set(arrays.flat())];
}

// Verification of test cases:
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
// console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // [1, 2, 3, 5]
// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // [1, 2, 3, 5, 4, 6, 7, 8]
// console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); // [1, 3, 2, 5, 4, 6]
// console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
