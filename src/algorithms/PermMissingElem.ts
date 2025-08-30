// PermMissingElem
// Find the missing element in a given permutation.

// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
// Your goal is to find that missing element.
// Write a function:
// function solution(A: number[]): number;
// that, given an array A, returns the value of the missing element.
// For example, given array A such that:
//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].

// one element is missing
// range 1 to N + 1
// distinct integer elements
// elements are not sorted

// order input
// deal corner case: array with 2 elements
// deal corner case: empty array
// deal corner case: single element array

function solution(A: number[]): number {
  if (A.length <= 1) return 0;

  const sortedArray = A.sort((a, b) => a - b);
  let lastElement = sortedArray[A.length - 1];
  let lastElementIndex = A.length - 1;

  while (lastElement > sortedArray[0]) {
    if (lastElement !== sortedArray[lastElementIndex]) break;

    lastElement--;
    lastElementIndex--;
  }

  return lastElement;
}
