class Queue {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add elements to the end of queue (tail)
  enqueue(element) {
    const currentPosition = this.count;
    this.items[currentPosition] = element;
    this.count++;

    console.log(
      `Added item: ${this.items[currentPosition]} at position ${currentPosition}`
    );

    return currentPosition;
  }

  // Remove elements from the begin of queue (head)
  dequeue() {
    if (this.isEmpty()) {
      console.log(`Queue is empty!`);
      return;
    }

    console.log(`Removed item: ${this.items[0]}`);

    for (let i = 0; i < this.count; i++) {
      this.items[i] = this.items[i + 1];
    }

    this.count--;
    this.items.length = this.count;
  }

  // Get head element in queue
  peek() {
    if (this.isEmpty()) {
      console.log(`Queue is empty!`);
      return;
    }

    console.log(`Head item: ${this.items[0]}`);
    return this.items[0];
  }

  // check if queue is empty
  isEmpty() {
    return this.count === 0;
  }

  // check size of queue
  size() {
    console.log(`${this.count} elements in queue!`);
    return this.count;
  }

  // clear queue items
  clear() {
    this.items = [];
    this.count = 0;
    console.log(`Queue cleared!`);
  }
}

const queue = new Queue();

queue.dequeue();

queue.enqueue(100);
queue.enqueue(200);
queue.peek();

queue.enqueue(300);
queue.size();

queue.dequeue();
queue.size();

console.log(`Empty queue? ${queue.isEmpty()}`);
console.log(queue);

queue.clear();
