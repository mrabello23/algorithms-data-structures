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

console.log(`Min Node: ${tree.findMin()}`);
console.log(`Max Node: ${tree.findMax()}`);

console.log(tree.find(5));
console.log(`isPresent 20 ? ${tree.isPresent(20)}`);

tree.remove(5);
console.log(`isPresent 5 ? ${tree.isPresent(5)}`);

tree.print();

tree.clear();
