
function largestOfAll(arr) {
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    // Start by assuming the first number in the sub-array is the largest
    let largestNumber = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }

    // Push the largest number found into our results array
    results.push(largestNumber);
  }

  return results;
}
