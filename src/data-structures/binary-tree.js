class Node {
  constructor(data = 0) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// In-Order Traversal
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const searchNode = (node) => {
      if (data <= node.data) {
        if (!node.left) {
          node.left = new Node(data);
          return;
        }

        return searchNode(node.left);
      } else {
        if (!node.right) {
          node.right = new Node(data);
          return;
        }

        return searchNode(node.right);
      }
    };

    const node = this.root;

    if (!node) {
      this.root = new Node(data);
      console.log(`Inserted node: ${data}`);
      return;
    }

    console.log(`Inserted node: ${data}`);
    return searchNode(node);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) return null;

      if (data === node.data) {
        if (node.left === null && node.right === null) return null; // no children
        if (node.left === null) return node.right; // no left children
        if (node.right === null) return node.left; // no right children

        let temp = node.right;
        while (temp.left !== null) {
          temp = temp.left;
        }

        node.data = temp.data;
        node.right = removeNode(node.right, temp.data);
        return node;
      }

      if (data <= node.data) {
        node.left = removeNode(node.left, data);
      } else {
        node.right = removeNode(node.right, data);
      }

      return node;
    };

    this.root = removeNode(this.root, data);
    console.log(`Removed node: ${data}`);
  }

  find(data) {
    let currentNode = this.root;

    if (!currentNode) return null;

    while (currentNode !== null && currentNode.data !== data) {
      if (data <= currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return currentNode;
  }

  findMin() {
    let currentNode = this.root;

    if (!currentNode) return null;

    while (currentNode !== null && currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  findMax() {
    let currentNode = this.root;

    if (!currentNode) return null;

    while (currentNode !== null && currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }

  isPresent(data) {
    return !this.find(data) ? false : true;
  }

  // Distance between Root Node and First Leaf Node without 2 children
  findMinHeight(node = this.root) {
    if (!node) return -1;

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if (left < right) return left + 1;
    return right + 1;
  }

  // Distance between Root Node and Deep Node with children
  findMaxHeight(node = this.root) {
    if (!node) return -1;

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    if (left > right) return left + 1;
    return right + 1;
  }

  // check if tree is balanced (difference between Max Height and Min Height need to be at most 1)
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  print() {
    console.log(this);
  }

  clear() {
    this.root = null;
  }
}

module.exports = BinaryTree;

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(8);
tree.insert(25);

console.log(`Min Node: ${tree.findMin()}`);
console.log(`Max Node: ${tree.findMax()}`);

console.log(tree.find(5));
console.log(`isPresent 20 ? ${tree.isPresent(20)}`);

tree.remove(5);
console.log(`isPresent 5 ? ${tree.isPresent(5)}`);

console.log(`Min Height: ${tree.findMinHeight()}`);
console.log(`Max Height: ${tree.findMaxHeight()}`);

console.log(`Is Balanced? ${tree.isBalanced()}`);

tree.print();
tree.clear();
