// Quadratic Time Complexity => O(n²)
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (i !== min) {
      swap(array, i, min);
    }
  }

  return array;
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const dataset = [100, 20, 5, 2, 111];
console.log(selectionSort(dataset));
