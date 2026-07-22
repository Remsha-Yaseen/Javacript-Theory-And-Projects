

function fearNotLetter(str) {
  // Get the character code of the very first letter
  let expectedCode = str.charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    // If the current letter's code doesn't match what we expect
    if (str.charCodeAt(i) !== expectedCode) {
      // Return the missing letter by converting the expected code back to a string
      return String.fromCharCode(expectedCode);
    }
    // Move to the next expected character code alphabetically
    expectedCode++;
  }

  // If no letters are missing, implicitly or explicitly return undefined
  return undefined;
}

// --- Test cases to verify correctness ---
console.log(fearNotLetter("abce"));           // Returns: "d"
console.log(fearNotLetter("abcdefghjklmno")); // Returns: "i"
console.log(fearNotLetter("stvwx"));          // Returns: "u"
console.log(fearNotLetter("bcdf"));           // Returns: "e"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // Returns: undefined

