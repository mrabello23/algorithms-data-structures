/**
 *
 * @param {array} arr
 * @returns {array}
 */
const reverseArray = (arr) => {
  // traversal half array
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i]; // currElement
    let posLastMinusIndex = arr.length - 1 - i;
    arr[i] = arr[posLastMinusIndex];
    arr[posLastMinusIndex] = temp;
  }

  return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
