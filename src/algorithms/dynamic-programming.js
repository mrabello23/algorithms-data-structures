// Constant Time Complexity => O(1)
const bottomUpFibonacci = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  const arr = [0, 1, 1];

  for (i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};

console.log("dynamic-programming", bottomUpFibonacci(35));
console.log("dynamic-programming", bottomUpFibonacci(1000));
