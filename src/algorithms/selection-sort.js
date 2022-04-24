// Quadratic Time Complexity => O(n²)
const selectionSort = (arr) => {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      swap(arr, i, min);
    }
  }

  return arr;
};

const dataset = [100, 20, 5, 2, 111];
console.log(selectionSort(dataset));
