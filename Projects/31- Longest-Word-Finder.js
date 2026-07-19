

function findLongestWordLength(str) {
  // Split the sentence into an array of individual words using spaces
  const words = str.split(" ");
  
  // Track the maximum length found so far
  let maxLength = 0;

  // Iterate through each word in the array
  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  // Return the final maximum length
  return maxLength;
}


