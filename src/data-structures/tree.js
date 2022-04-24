class Node {
  constructor(data = 0) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
  }

  find(value) {}
  remove(value) {}
  print() {}
}

const tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(8);

console.log(tree);
