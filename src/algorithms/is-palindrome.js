/**
 *
 * @param {string} text
 * @returns {boolean}
 */
// Time Complexity => O(n)
const isPalindrome = (text) => {
  const cleanText = text.toLowerCase().replace(/[^a-zA-Z]+/gi, "");
  const newStr = cleanText.split("").reverse().join("");

  if (newStr === cleanText) return true;
  return false;
};

console.log(isPalindrome("Hello World"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("Madam I'm Adam"));
