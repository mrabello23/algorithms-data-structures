const partition = (arr, left, right) => {
  const middle = Math.floor((left + right) / 2);
  let pivot = arr[middle];

  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
};

const swap = (arr, first, last) => {
  const temp = arr[first];
  arr[first] = arr[last];
  arr[last] = temp;
};

const quickSort = (arr, left, right) => {
  if (arr.length <= 1) return arr;
  if (left >= right) return;

  let p = partition(arr, left, right);

  if (left < p - 1) quickSort(arr, left, p - 1);
  if (right > p) quickSort(arr, p, right);

  return arr;
};

let arr = [3, -2, -1, 0, 2, 4, 1];
console.log(quickSort(arr, 0, arr.length - 1));

arr = [3, 2, 4, 1];
console.log(quickSort(arr, 0, arr.length - 1));

arr = [1];
console.log(quickSort(arr, 0, arr.length - 1));
