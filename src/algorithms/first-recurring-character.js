const firstRecurringCharacter = (str) => {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      return str[i];
    }

    obj[str[i]] = 1;
  }

  return null;
};

console.log(firstRecurringCharacter("abca"));
console.log(firstRecurringCharacter("abcba"));
console.log(firstRecurringCharacter("abc"));
