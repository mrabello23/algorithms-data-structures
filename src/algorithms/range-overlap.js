const rangeOverlap = (arr1, arr2) => {
  const firstArr1 = arr1[0];
  const lastArr1 = arr1[arr1.length - 1];
  const firstArr2 = arr2[0];
  const lastArr2 = arr2[arr2.length - 1];

  if (
    (firstArr1 >= firstArr2 && firstArr1 <= lastArr2) ||
    (lastArr1 >= firstArr2 && lastArr1 <= lastArr2) ||
    (firstArr2 >= firstArr1 && firstArr2 <= lastArr1) ||
    (lastArr2 >= firstArr1 && lastArr2 <= lastArr1)
  ) {
    return true;
  }

  return false;
};

console.log(rangeOverlap([1, 1.001, 1.112, 2], [2, 2.011, 2.442, 2.9, 3]));
console.log(rangeOverlap([1, 2, 3], [4, 5, 6]));
console.log(rangeOverlap([3, 4, 5, 6], [1, 2, 3]));
console.log(rangeOverlap([5], [1, 2, 3]));
console.log(rangeOverlap([1, 2, 3, 4, 5], [5]));
