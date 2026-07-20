

/**
 * Checks if the first string element in the array contains all the letters 
 * of the second string element, ignoring case.
 * * @param {string[]} arr - An array containing two strings to compare.
 * @returns {boolean} True if all characters of the second string are in the first.
 */
function mutation(arr) {
  // Normalize both strings to lowercase for case-insensitive comparison
  const firstWord = arr[0].toLowerCase();
  const secondWord = arr[1].toLowerCase();

  // Inspect each character of the second word
  for (const char of secondWord) {
    // Fail-fast if a required character is missing
    if (!firstWord.includes(char)) {
      return false;
    }
  }

  // All characters successfully accounted for
  return true;
}

// --- Verification Tests ---
console.log(mutation(["hello", "hey"]));       // Expected: false
console.log(mutation(["hello", "Hello"]));     // Expected: true
console.log(mutation(["Mary", "Army"]));       // Expected: true
console.log(mutation(["Alien", "line"]));      // Expected: true
console.log(mutation(["voodoo", "no"]));       // Expected: false
