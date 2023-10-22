/**
 * Constraints:
 * empty array = return 0
 * if two temperatures are equally close to zero, the positive temperature must be returned
 *
 * @param {number[]} ts array of temperatures
 * @returns {number} closest to zero value
 */
function computeClosestZero(ts) {
  if (ts.length === 0) return 0;

  const positive = [],
    negative = [];

  ts.map((item) => {
    if (item < 0) negative.push(item);
    else positive.push(item);
  });

  const positiveArrSorted = positive.sort((a, b) => a - b);
  const negativeArrSorted = negative.sort((a, b) => a - b);

  const lastNegativeValue = negativeArrSorted[negative.length - 1];

  if (0 - positiveArrSorted[0] >= lastNegativeValue) {
    return positiveArrSorted[0];
  }

  return lastNegativeValue;
}

console.log(computeClosestZero([1, 3, -1, -3, 5, 3, 6, 7]));
