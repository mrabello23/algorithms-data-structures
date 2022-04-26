class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    const node = new Node(data);

    // If empty, set head
    if (!this.head) {
      this.head = node;
      this.size++;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this.size++;
  }

  // Insert at index
  insertAtIndex(data, index) {
    if (index <= 0) {
      this.insertFirst(data);
      return;
    }

    if (index >= this.size) {
      this.insertLast(data);
      return;
    }

    let current = this.head;
    let counter = 1;

    while (current.next) {
      if (index === counter) {
        current.next = new Node(data, current.next);
        this.size++;
        return;
      }

      current = current.next;
      counter++;
    }
  }

  // Get at index
  getAtIndex(index) {
    if (index < 0 || index > this.size) {
      console.log("Index out of range!");
      console.log(`List Size: ${this.size}`);
      return;
    }

    let current = this.head;
    let counter = 0;

    while (current) {
      if (index === counter) {
        console.log(`Returned data: ${current.data}`);
        return;
      }

      current = current.next;
      counter++;
    }
  }

  // Remove at index
  removeAtIndex(index) {
    if (index < 0 || index > this.size) {
      console.log("Index out of range!");
      console.log(`List Size: ${this.size}`);
      return;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
      this.size--;
      return;
    }

    let counter = 0;
    let previous;

    while (counter < index) {
      counter++;
      previous = current;
      current = current.next;
    }

    console.log(`Removed data: ${current.data}`);
    previous.next = current.next;
    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
    console.log(`List Cleaned: ${this}`);
  }

  // Print list data
  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }

    console.log(`Size: ${this.size}`);
  }
}

module.exports = LinkedList;

const list = new LinkedList();

list.insertFirst(100);
list.insertLast(300);
list.insertAtIndex(200, 1);
list.print();

list.getAtIndex(1);

list.removeAtIndex(1);
list.print();

list.clearList();
