const diagonalDifference = (arr) => {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  let arrSize = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][arrSize - i];
  }

  return Math.abs(primaryDiagonal - secondaryDiagonal);
};
// Should return 15
dataset1 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

// Should return 1
dataset2 = [
  [-1, 1, -7, -8],
  [-10, -8, -5, -2],
  [0, 9, 7, -1],
  [4, 4, -2, 1],
];

console.log(diagonalDifference(dataset1));
console.log(diagonalDifference(dataset2));
