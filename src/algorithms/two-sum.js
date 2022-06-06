/**
 *
 * @param {array} arr
 * @param {number} sum
 * @returns {array}
 */
// Linear Time Complexity => O(n)
const twoSum = (arr, sum) => {
  const result = [];
  const hashTable = new Set();
  let pair = 0;

  for (let i = 0; i < arr.length; i++) {
    pair = sum - arr[i];

    if (hashTable.has(pair)) {
      result.push([arr[i], pair]);
    }

    hashTable.add(arr[i]);
  }

  return result;
};

console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
console.log(twoSum([1, 6, 4, 5, 3, 0], 4));
