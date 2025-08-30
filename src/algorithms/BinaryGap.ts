// BinaryGap
// Find longest sequence of zeros in binary representation of an integer.
// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
// Write a function:
//   function solution(N: number): number;
// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
// Write an efficient algorithm for the following assumptions:
//   N is an integer within the range [1..2,147,483,647].

// n=6=110 = 0
// n=20=10100 = 1
// n=328=101001000 = 2
// n=51712=110010100000000 = 2

function solution(N: number): number {
  const nToBinary = N.toString(2);
  let gap = 0,
    currentIndex = 0;

  for (let i = currentIndex; i < nToBinary.length; i++) {
    let tempCount = 0;

    if (parseInt(nToBinary[i]) === 1) {
      currentIndex++;
      let tempCheck = nToBinary.substring(currentIndex);

      while (
        parseInt(nToBinary[currentIndex]) === 0 &&
        tempCheck.includes("1")
      ) {
        tempCount++;
        currentIndex++;
      }

      if (tempCount > gap && tempCount < nToBinary.length - 1) gap = tempCount;
    }
  }

  return gap;
}
