const diffArrays = (arr1, arr2) => {
  const temp = new Set([...arr1, ...arr2]);
  const result = [];

  for (const curr of temp) {
    if (arr1.indexOf(curr) < 0 || arr2.indexOf(curr) < 0) {
      result.push(curr);
    }
  }

  return result;
};

console.log(diffArrays([1, 2, 3, 4, 6], [1, 2, 3, 4, 5]));
