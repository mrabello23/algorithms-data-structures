/**
 *
 * @param {number} weight0
 * @param {number} weight1
 * @param {number} weight2
 * @returns {number} index of the heaviest weight
 */
function heaviestWeight(weight0, weight1, weight2) {
  let heaviest = 0;

  if (weight1 >= weight0 && weight1 >= weight2) {
    heaviest = 1;
  } else if (weight2 >= weight0 && weight2 >= weight1) {
    heaviest = 2;
  }

  console.log(heaviest);
  return heaviest;
}

heaviestWeight(60, 100, 120);
