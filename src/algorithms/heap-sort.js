// determine the left and right child of a node
// move one element down at a time to its correct location in the heap
const heapify = (heap, i, max) => {
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    index = i;
    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) index = leftChild;
    if (rightChild < max && heap[rightChild] > heap[index]) index = rightChild;
    if (index === i) return;

    swap(heap, i, index);
    i = index;
  }
};

// create the max heap
const buildMaxHeap = (arr) => {
  const length = arr.length;
  let i = Math.floor(length / 2 - 1);

  while (i >= 0) {
    heapify(arr, i, length);
    i--;
  }
};

const swap = (arr, first, last) => {
  const temp = arr[first];
  arr[first] = arr[last];
  arr[last] = temp;
};

// Time complexity => O(log n)
const heapSort = (arr) => {
  buildMaxHeap(arr);
  let last = arr.length - 1;

  // sort until have 1 element left in array
  while (last > 0) {
    swap(arr, 0, last);
    heapify(arr, 0, last);
    last--;
  }

  return arr;
};

console.log(heapSort([3, -2, -1, 0, 2, 4, 1]));
console.log(heapSort([2, 4, 1]));
