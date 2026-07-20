

function getWordCount(sentence) {
  const words = sentence.trim().split(/\s+/);
  
  if (words.length === 1 && words[0] === "") {
    return 0;
  }
  
  return words.length;
}

// Create the variable and call the function
let wordCount = getWordCount("I love freeCodeCamp");

// Log the result to the console
console.log(`Word Count: ${wordCount}`);



