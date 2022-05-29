/**
 *
 * @param {string} text
 * @param {number} num
 * @returns {string}
 */
const caesarCipher = (text, num) => {
  const lowerStr = text.toLowerCase();
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let alphabetArrLength = alphabetArr.length;
  num = num % alphabetArrLength; // edge case: num greater ou lower than alphabet lenght
  let result = "";
  let currIndex;
  let newIndex;

  for (let i = 0; i < lowerStr.length; i++) {
    currIndex = alphabetArr.indexOf(lowerStr[i]);

    if (currIndex < 0) {
      result += lowerStr[i];
      continue;
    }

    newIndex = currIndex + num;
    if (newIndex > 25) newIndex -= alphabetArrLength;
    if (newIndex < 0) newIndex += alphabetArrLength;

    // edge case: uppercase letter in original string
    if (text[i] !== lowerStr[i]) {
      result += alphabetArr[newIndex].toUpperCase();
      continue;
    }

    result += alphabetArr[newIndex];
  }

  return result;
};

console.log(caesarCipher("Zoo Keeper", 2));
console.log(caesarCipher("Big Car", -16));
console.log(caesarCipher("Javascript", -900));
