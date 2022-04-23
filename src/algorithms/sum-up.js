// Linear Time Complexity => O(n)
const sumNumbers1 = (n) => {
  if (!n.length) {
    return;
  }

  let sum = 0;
  for (i = 0; i < n.length; i++) {
    sum += n[i];
  }

  return sum;
};

// Constant Time Complexity => O(1)
const sumNumbers2 = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sumNumbers1([1, 3, 10]));
console.log(sumNumbers2(100));
