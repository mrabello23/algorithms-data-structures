/**
 *
 * @param {string} str
 * @returns {string}
 */
// Time Complexity => O(n + m)
const reverseWords = (str) => {
  const wordsArr = str.split(" ");
  const reversedArr = [];

  wordsArr.forEach((word) => {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }

    reversedArr.push(reversed);
  });

  return reversedArr.join(" ");
};

console.log(reverseWords("Original string"));
console.log(reverseWords("marcel oliveira"));
