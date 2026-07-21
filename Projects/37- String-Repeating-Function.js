



function repeatStringNumTimes(str, num) {
  // If num is less than or equal to zero, return an empty string
  if (num <= 0) {
    return "";
  }

  let accumulatedString = "";

  // Loop 'num' times to build the repeated string
  for (let i = 0; i < num; i++) {
    accumulatedString += str;
  }

  return accumulatedString;
}

// --- Test cases to verify correctness ---
console.log(repeatStringNumTimes("*", 3));     // Returns: "***"
console.log(repeatStringNumTimes("abc", 3));   // Returns: "abcabcabc"
console.log(repeatStringNumTimes("abc", -2));  // Returns: ""
console.log(repeatStringNumTimes("abc", 0));   // Returns: ""
