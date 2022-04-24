// Linear time complexity => O(n) / worst case O(n²)
const insertionSort = (arr) => {
  // starts at 1 position assuming first is in correct order
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // shift to the right
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};

console.log(insertionSort([7, 3, 1, 4, 6, 2, 3, 5]));
console.log(insertionSort([3, 1]));
console.log(insertionSort([4]));
console.log(insertionSort([]));
