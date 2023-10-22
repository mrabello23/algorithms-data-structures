/**
 *
 * @param {string} morse
 * @returns {number}
 */
function morseDecode(morse) {
  const input = morse.split(" ");

  let response = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ".....") {
      response += "5";
      continue;
    }

    if (input[i] === "-----") {
      response += "0";
      continue;
    }

    for (let j = 0; j < i.length; j++) {
      response += "";
    }
  }

  return parseInt(response);
}

console.log(morseDecode(".... . -.--   .--- ..- -.. ."));
