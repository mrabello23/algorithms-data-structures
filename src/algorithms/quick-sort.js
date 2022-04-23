const partition = (array, left, right) => {};

const quickSort = (array, left, right) => {
  if (left >= right) return;
  let p = partition(array, left, right);

  quickSort(array, left, p - 1);
  quickSort(array, p + 1, right);
};

const dataset = [3, -2, -1, 0, 2, 4, 1];
console.log(quickSort(dataset));
