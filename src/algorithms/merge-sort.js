// Time Complexity => O(nlogn)
const mergeSort = (arr) => {
  const merge = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }

    // console.log(result);
    return result;
  };

  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let arrLeft = mergeSort(arr.slice(0, middle));
  let arrRight = mergeSort(arr.slice(middle));

  return merge(arrLeft, arrRight);
};

console.log(mergeSort([4, 6, 1, 3, 9]));
