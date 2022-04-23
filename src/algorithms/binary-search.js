// Logarithmic Time Complexity => O(log n)
// Use case: Find a value on a sorted list of values
const binarySearch = (target, list) => {
  let first = 0;
  let last = list.length - 1;
  let middle;

  while (first <= last) {
    middle = Math.floor((first + last) / 2);

    if (list[middle] === target) {
      return middle;
    } else if (list[middle] > target) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }

  return -1;
};

// Need to be sorted array
const dataset = [1, 2, 5, 15, 22, 34, 58, 77, 111];
console.log(`Found at position ${binarySearch(15, dataset)}`);
console.log(`Found at position ${binarySearch(58, dataset)}`);
console.log(`Found at position ${binarySearch(3, dataset)}`);
