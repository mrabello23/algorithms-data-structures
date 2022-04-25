const swap = (arr, first, last) => {
  const temp = arr[first];
  arr[first] = arr[last];
  arr[last] = temp;
};

function quickSort2(arr, low, high) {
  if (high <= low) return arr;

  let lt = low;
  let gt = high;
  let v = arr[low];
  let i = low;

  while (i <= gt) {
    if (arr[i] < v) {
      swap(arr, lt, i);
      i++;
      lt++;
    } else if (arr[i] > v) {
      swap(arr, i, gt);
      gt--;
    } else {
      i++;
    }
  }

  quickSort2(arr, low, lt - 1);
  quickSort2(arr, gt + 1, high);

  return arr;
}

let arr = [3, -2, -1, 0, 2, 4, 1];
console.log(quickSort2(arr, 0, arr.length - 1));

arr = [3, 2, 4, 1];
console.log(quickSort2(arr, 0, arr.length - 1));

arr = [1];
console.log(quickSort2(arr, 0, arr.length - 1));
