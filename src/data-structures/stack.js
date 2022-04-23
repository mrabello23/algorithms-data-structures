class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add elements to the top of stack
  push(element) {
    const currentPosition = this.count;
    this.items[currentPosition] = element;
    this.count++;

    console.log(
      `Added item: ${this.items[currentPosition]} at position ${currentPosition}`
    );
    return currentPosition;
  }

  // Remove elements from the top of stack
  pop() {
    if (this.isEmpty()) {
      console.log(`Stack is empty!`);
      return;
    }

    this.count--;
    console.log(`Removed item: ${this.items[this.count]}`);
    this.items.length = this.count;
  }

  // Get top element in stack
  peek() {
    if (this.isEmpty()) {
      console.log(`Stack is empty!`);
      return;
    }

    const topPosition = this.count - 1;

    console.log(`Top item: ${this.items[topPosition]}`);
    return this.items[topPosition];
  }

  // check if stack is empty
  isEmpty() {
    return this.count === 0;
  }

  // check size of stack
  size() {
    console.log(`${this.count} elements in stack!`);
    return this.count;
  }

  // clear stack items
  clear() {
    this.items = [];
    this.count = 0;
    console.log(`Stack cleared!`);
  }
}

const stack = new Stack();

stack.pop();

stack.push(100);
stack.push(200);
stack.peek();

stack.push(300);
stack.size();

stack.pop();
stack.size();

console.log(`Empty stack? ${stack.isEmpty()}`);
console.log(stack);

stack.clear();
