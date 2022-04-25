const partition = (arr, low, high) => {
  if (arr[low] > arr[high]) swap(arr, low, high);

  let k = low + 1;
  let j = low + 1;
  let g = high - 1;

  let leftPivot = arr[low];
  let rightPivot = arr[high];

  while (k <= g) {
    // If elements are less than the left pivot
    if (arr[k] < leftPivot) {
      swap(arr, k, j);
      j++;
    }
    // If elements are greater than or equal to the right pivot
    else if (arr[k] >= rightPivot) {
      while (arr[g] > rightPivot && k < g) g--;

      swap(arr, g, k);
      g--;

      if (arr[k] < leftPivot) {
        swap(arr, k, j);
        j++;
      }
    }
    k++;
  }
  j--;
  g++;

  // Bring pivots to their appropriate positions.
  swap(arr, low, j);
  swap(arr, high, g);

  // Returning the indices of the pivots
  return [j, g];
};

const swap = (arr, first, last) => {
  const temp = arr[first];
  arr[first] = arr[last];
  arr[last] = temp;
};

const quickSort3 = (arr, low, high) => {
  if (arr.length <= 1) return arr;

  if (low < high) {
    let leftPart = partition(arr, low, high);
    let rightPart = partition(arr, low, high);

    quickSort3(arr, low, leftPart - 1);
    quickSort3(arr, leftPart + 1, rightPart - 1);
    quickSort3(arr, rightPart + 1, high);
  }

  return arr;
};

let arr = [3, -2, -1, 0, 2, 4, 1];
console.log(quickSort3(arr, 0, arr.length - 1));

arr = [3, 2, 4, 1];
console.log(quickSort3(arr, 0, arr.length - 1));

arr = [1];
console.log(quickSort3(arr, 0, arr.length - 1));
