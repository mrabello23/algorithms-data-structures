// Linear Time Complexity => O(n)
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

// Linear Time Complexity => O(n)
const memoizedFibonacci = (n, memo = []) => {
  if (memo[n]) return memo[n];
  let result = 0;

  if (n === 1 || n === 2) {
    result = 1;
  } else {
    result = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
  }

  memo[n] = result;
  return result;
};

console.log(`bottom-up Fibonacci - element 20: ${bottomUpFibonacci(20)}`);
console.log(`bottom-up Fibonacci - element 35: ${bottomUpFibonacci(35)}`);
console.log(`bottom-up Fibonacci - element 1000: ${bottomUpFibonacci(1000)}`);

console.log(`memoized Fibonacci - element 20: ${memoizedFibonacci(20)}`);
console.log(`memoized Fibonacci - element 35: ${memoizedFibonacci(35)}`);
console.log(`memoized Fibonacci - element 1000: ${memoizedFibonacci(1000)}`);
