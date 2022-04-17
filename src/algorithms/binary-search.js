// Logarithmic Time Complexity => O(log n)
const binarySearch = (value, list) => {
  let first = 0;
  let last = list.length - 1;
  let position = -1;
  let found = false;
  let middle;

  while (!found && first <= last) {
    middle = Math.floor((first + last) / 2);

    if (list[middle] === value) {
      found = true;
      position = middle;
    } else if (list[middle] > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }

  return position;
};

const dataset = [1, 2, 5, 15, 2, 58, 22, 111, 34, 77];
console.log(binarySearch(15, dataset));
