// Logarithmic Time Complexity => O(log n)
// Use case: Find a value on a sorted list of values
const binarySearch = (list, target) => {
  let first = 0;
  let last = list.length - 1;
  let middle;

  while (first <= last) {
    middle = Math.floor((first + last) / 2);

    if (target === list[middle]) return middle;

    if (target < list[middle]) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }

  return -1;
};

// Need to be sorted array
const dataset = [1, 2, 5, 15, 22, 34, 58, 77, 111];
console.log(`Found at position ${binarySearch(dataset, 15)}`);
console.log(`Found at position ${binarySearch(dataset, 58)}`);
console.log(`Found at position ${binarySearch(dataset, 3)}`);
