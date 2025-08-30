// write a function that receives an array of numbers
// find the second smallest number in the array
// find the second largest number in the array

function secondLargestAndSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("Array must have at least 2 elements");
  }

  let min = arr[0];
  let secondMin = Infinity;
  let max = arr[0];
  let secondMax = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    } else if (arr[i] < secondMin && arr[i] !== min) {
      secondMin = arr[i];
    }

    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  return [secondMin, secondMax];
}

console.log(secondLargestAndSmallest([4, 2, 9, 6, 5, 1, 8, 3, 7])); // [2, 8]
console.log(secondLargestAndSmallest([9, 22, 33, 88, 4, 55, 6, 7, 11])); // [6, 55]
console.log(secondLargestAndSmallest([55, 22, 4, 33, 4, 11])); // [11, 33]
console.log(secondLargestAndSmallest([9, 0, 88, 0, 4])); // [4, 9]
