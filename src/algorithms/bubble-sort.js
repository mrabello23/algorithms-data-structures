// Linear time complexity => O(n) / worst case O(n²)
const bubbleSort = (arr) => {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }

  return arr;
};

const dataset = [7, 3, 1, 4, 6, 2, 3, 5];
console.log(bubbleSort(dataset));
