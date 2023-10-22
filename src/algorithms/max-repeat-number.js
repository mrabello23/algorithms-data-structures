function maxRepeatNumber(input) {
  if (!input || input.length <= 0) return -1;

  const map = new Map();

  for (let i = 0; i < input.length; i++) {
    if (map.has(input[i])) {
      map.set(input[i], map.get(input[i]) + 1);
      continue;
    }

    map.set(input[i], 1);
  }

  let retorno = -1;
  let temp = -1;

  for (const [key, value] of map.entries()) {
    if (temp < 0) {
      temp = value;
      retorno = key;
      continue;
    }

    if (value > temp) {
      temp = value;
      retorno = key;
    }
  }

  return retorno;
}

console.log(maxRepeatNumber([1, 2, 3, 1, 5, 7, 2, 1, 9]));
console.log(maxRepeatNumber([1, 1, 2, 2]));
console.log(maxRepeatNumber([1, 1, 2, 2, 3, 3, 3]));
console.log(maxRepeatNumber([1, 1, 9, 9, 9, 9, 2, 2]));
console.log(maxRepeatNumber([]));
