// MissingInteger
// Find the smallest positive integer that does not occur in a given sequence
// Write a function:
// function solution(A: number[]): number;
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// function solution(A: number[]): number {
//     if (A.length === 0) return 1;

//     let currentValue = 1;
//     while (true) {
//         if (!A.includes(currentValue)) return currentValue;
//         currentValue++;
//     }
// }

// Replaced the includes method with a Set data structure to improve the efficiency of checking if currentValue is in A. This reduces the time complexity from O(n) to O(1) for each iteration.
// O(N) or O(N * log(N)) time complexity is achieved.
function solution(A: number[]): number {
  if (A.length === 0) return 1;
  let currentValue = 1;
  const set = new Set(A);

  while (set.has(currentValue)) {
    currentValue++;
  }

  return currentValue;
}
