const LinkedList = require("../data-structures/linked-list");

const reverseList = (head) => {
  let prev = null;
  let curr = head;

  console.log(curr);

  while (curr) {
    tempNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tempNext;
  }

  return prev;
};

const list = new LinkedList();
list.insertFirst(10);
list.insertLast(20);
list.insertLast(30);
list.insertLast(40);

console.log(reverseList(list.head));
