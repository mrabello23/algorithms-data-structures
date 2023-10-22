/**
 * AKA Caesar Cipher
 * @param {string} w
 * @param {number} i
 * @returns {string}
 */
function decodeStr(w, i) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let resp = "";

  for (let j = 0; j < i; j++) {
    let currentIndex = alphabet.indexOf(w[j]);
    let newIndex = currentIndex - (j + 1);

    if (newIndex > 25) newIndex = newIndex - alphabet.length;
    if (newIndex < 0) newIndex = alphabet.length + newIndex;

    resp += alphabet[newIndex];
  }

  console.log(resp);
  return resp;
}

const input = "fcvc";
decodeStr(input, input.length);
