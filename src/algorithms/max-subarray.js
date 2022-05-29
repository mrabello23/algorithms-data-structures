/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
// Also know as Sliding Window
// returns max possible sums of elements
const twoPointerSolution = (nums) => {
  let result = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) sum = 0;
    sum += nums[i];
    result = Math.max(result, sum);
  }

  return result;
};

console.log(twoPointerSolution([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
