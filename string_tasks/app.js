// Function to toggle code visibility
function toggleCode(index) {
    const codeBlock = document.getElementById(`code${index}`);
    const currentDisplay = window.getComputedStyle(codeBlock).display;
    codeBlock.style.display = currentDisplay === "none" ? "block" : "none";
  }
  

// Function to calculate and display results for each task
function calculateResults() {
  // Task 1: Find the longest word
  document.getElementById("result1").textContent =
    findLongestWord("Salam Azerbaycan");

  // Task 2: Convert to CamelCase
  document.getElementById("result2").textContent = toCamelCase(
    "frontend inkişaf çox maraqlıdır"
  );

  // Task 3: Find palindromes in sentence
  document.getElementById("result3").textContent = findPalindromesInSentence(
    "Ana və level ll aa a lalə palindrom sözlərdir, amma hello deyil"
  ).join(", ");

  // Task 4: Find most frequent character
  const result4 = mostFrequentChar("aaabbbcccdddaa");
  document.getElementById(
    "result4"
  ).textContent = `Simvol: ${result4.character}, Say: ${result4.count}`;

  // Task 5: Find words between two words
  document.getElementById("result5").textContent = wordsBetween(
    "bu çox maraqlı bir tapşırıqdır",
    "bu",
    "bir"
  ).join(", ");

  // Task 6: Find unique characters
  document.getElementById("result6").textContent =
    uniqueCharacters("salam").join(", ");

  // Task 7: Sort words by length
  document.getElementById("result7").textContent = sortWordsByLength(
    "bu çox maraqlı bir tapşırıqdır"
  ).join(", ");

  // Task 8: Reverse each word
  document.getElementById("result8").textContent = reverseEachWord(
    "javascript dilləri öyrənmək çox maraqlıdır"
  );

  // Task 9: Keep first and last char
  document.getElementById("result9").textContent = keepFirstAndLastChar(
    "javascript dilləri öyrənmək çox maraqlıdır"
  );

  // Task 10: Find longest palindrome
  document.getElementById("result10").textContent =
  isAnagram("silent", "listen");

  // Task 11: Marquee effect
  document.getElementById("result11").textContent = marqueeEffect(
    "hello",
    2
  ).join(", ");
  // Task 12: Find longest palindrome
  document.getElementById("result12").textContent =
  findLongestPalindrome("abcdcbaqwertyuiop");
}

// Function to find the longest word in a string
function findLongestWord(str) {
  return str
    .split(/\s+/)
    .reduce(
      (longest, currentWord) =>
        currentWord.length > longest.length ? currentWord : longest,
      ""
    );
}

// Function to convert string to CamelCase
function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

// Function to find palindromes in a sentence
function findPalindromesInSentence(sentence) {
  const words = sentence.toLowerCase().split(/\s+/);
  return words.filter((word) => {
    const cleanedWord = word.replace(/[^a-z0-9ə]/g, "");
    const reversedWord = cleanedWord.split("").reverse().join("");
    return cleanedWord.length > 0 && cleanedWord === reversedWord;
  });
}

// Function to find the most frequent character in a string
function mostFrequentChar(str) {
  const charCount = {};
  let maxChar = "";
  let maxCount = 0;
  str.split("").forEach((char) => {
    charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  });
  return { character: maxChar, count: maxCount };
}

// Function to find words between two specified words
function wordsBetween(str, word1, word2) {
  const words = str.split(/\s+/);
  const index1 = words.indexOf(word1);
  const index2 = words.indexOf(word2);
  if (index1 !== -1 && index2 !== -1 && index1 < index2) {
    return words.slice(index1 + 1, index2);
  } else {
    return [];
  }
}

// Function to find unique characters in a string
function uniqueCharacters(str) {
  const charCount = {};
  const uniqueChars = [];
  str.split("").forEach((char) => {
    charCount[char] = (charCount[char] || 0) + 1;
  });
  for (let char in charCount) {
    if (charCount[char] === 1) {
      uniqueChars.push(char);
    }
  }
  return uniqueChars;
}

// Function to sort words by length in a string
function sortWordsByLength(str) {
  return str.split(/\s+/).sort((a, b) => a.length - b.length);
}

// Function to extract only letters from a string
function onlyLetters(str) {
  return str.replace(/[^a-zA-Z]/g, "");
}

// Function to extract only numbers from a string
function onlyNumbers(str) {
  return str.replace(/\D/g, "");
}

 // Function to find the longest palindrome in a string
function findLongestPalindrome(str) {
    const isPalindrome = s => s === s.split("").reverse().join("");
    let longest = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const substring = str.slice(i, j);
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    return longest;
} 

// 10. İki sözün anagram olub-olmadığını yoxla
function isAnagram(str1, str2) {
  const cleanStr = (str) =>
    str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  return cleanStr(str1) === cleanStr(str2);
}

// Function to reverse each word in a string
function reverseEachWord(str) {
  return str
    .split(/\s+/)
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// Function to keep only the first and last character of each word
function keepFirstAndLastChar(str) {
  return str
    .split(/\s+/)
    .map((word) =>
      word.length > 2 ? word[0] + (word.length - 2) + word.slice(-1) : word
    )
    .join(" ");
}

// Function to create a marquee effect
function marqueeEffect(str, times = 5) {
  let result = [];
  for (let i = 0; i < str.length * times; i++) {
    result.push(str.slice(i % str.length) + str.slice(0, i % str.length));
  }
  return result;
}

// Initialize results when the page loads
window.onload = calculateResults;
