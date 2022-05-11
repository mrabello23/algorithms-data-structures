/**
 *
 * @param {number[]} priceList
 * @returns {number}
 */
// Also know as Sliding Window
const twoPointerSolution = (priceList) => {
  let left = 0; // buy
  let right = 1; // sell
  let profit = 0;
  let maxProfit = 0;

  while (right < priceList.length) {
    if (priceList[left] < priceList[right]) {
      profit = priceList[right] - priceList[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right; // move left to low value found
    }
    right++;
  }

  return maxProfit;
};

console.log(twoPointerSolution([7, 1, 5, 3, 6, 4]));
