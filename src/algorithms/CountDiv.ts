// CountDiv
// Compute number of integers divisible by k in range [a..b].

// Write a function:
// function solution(A: number, B: number, K: number): number;
// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:
// { i : A ≤ i ≤ B, i mod K = 0 }
// For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.
// Write an efficient algorithm for the following assumptions:
// A and B are integers within the range [0..2,000,000,000];
// K is an integer within the range [1..2,000,000,000];
// A ≤ B.

// time complexity: O(B-A)
// function solution(A: number, B: number, K: number): number {
//     if(K === 1) return B - A + 1

//     let result = 0;
//     for(let i = A; i <= B; i++) {
//         if(i % K === 0) result++;
//     }

//     return result;
// }

// time complexity: O(1)
function solution(A: number, B: number, K: number): number {
  if (K === 1) return B - A + 1;
  return Math.floor(B / K) - Math.ceil(A / K) + 1;
}
