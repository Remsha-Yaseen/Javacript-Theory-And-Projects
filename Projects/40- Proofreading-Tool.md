







// 1. Check if a word is a palindrome (Case-Insensitive)
function isPalindrome(word) {
  if (typeof word !== "string") return false;
  const lowerWord = word.toLowerCase();
  const reversedWord = lowerWord.split("").reverse().join("");
  return lowerWord === reversedWord;
}

// 2. Find indices of words that are NOT palindromes
function findPalindromeBreaks(words) {
  if (!words || words.length === 0) return [];
  const breaks = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }

  return breaks;
}

// 3. Find start indices of repeated consecutive phrases (including overlapping)
function findRepeatedPhrases(words, phraseLength) {
  if (!words || phraseLength >= words.length || phraseLength <= 0) return [];

  const map = new Map();
  const results = [];

  // Step 1: Scan all phrases of length phraseLength and record their starting indices
  for (let i = 0; i <= words.length - phraseLength; i++) {
    // Extract consecutive words and join them into a unique phrase key string
    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (!map.has(phrase)) {
      map.set(phrase, []);
    }
    map.get(phrase).push(i);
  }

  // Step 2: Collect all starting indices for phrases that appeared more than once
  for (const indices of map.values()) {
    if (indices.length > 1) {
      for (let j = 0; j < indices.length; j++) {
        results.push(indices[j]);
      }
    }
  }

  // Sort the resulting indices in ascending order
  return results.sort((a, b) => a - b);
}

// 4. Analyze an array of text streams
function analyzeTexts(texts, phraseLength) {
  if (!texts || texts.length === 0) return [];

  const analysisResults = [];

  for (let i = 0; i < texts.length; i++) {
    const currentTextWords = texts[i];
    
    const palindromeBreaks = findPalindromeBreaks(currentTextWords);
    const repeatedPhrases = findRepeatedPhrases(currentTextWords, phraseLength);

    analysisResults.push({
      repeatedPhrases: repeatedPhrases,
      palindromeBreaks: palindromeBreaks
    });
  }

  return analysisResults;
}


