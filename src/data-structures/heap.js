// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

class Heap {
  insert() {}
  remove() {}

  heapify(heap, i, max) {
    let index;
    let leftChild;
    let rightChild;

    while (i < max) {
      index = i;
      leftChild = 2 * i + 1;
      rightChild = leftChild + 1;

      if (leftChild < max && heap[leftChild] > heap[index]) index = leftChild;
      if (rightChild < max && heap[rightChild] > heap[index])
        index = rightChild;
      if (index === i) return;

      swap(heap, i, index);
      i = index;
    }
  }

  // create the max heap
  buildMaxHeap(arr) {
    let i = Math.floor(arr.length / 2 - 1);

    while (i >= 0) {
      heapify(arr, i, arr.length);
      i--;
    }
  }

  buildMinHeap(arr) {}
}
