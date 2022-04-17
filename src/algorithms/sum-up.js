// Linear Time Complexity => O(n)
const sumNumbers = (n) => {
  if (!n.length) {
    return;
  }

  let sum = 0;
  for (i = 0; i < n.length; i++) {
    sum = sum + n[i];
  }

  return sum;
};

console.log(sumNumbers([1, 3, 10]));
