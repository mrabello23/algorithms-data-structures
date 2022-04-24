const BinaryTree = require("../data-structures/binary-tree");

const traverse = (node, type, result = []) => {
  switch (type) {
    case "inOrder":
      if (node.left) traverse(node.left, "inOrder", result);
      result.push(node.data);
      if (node.right) traverse(node.right, "inOrder", result);
      break;

    case "preOrder":
      result.push(node.data);
      if (node.left) traverse(node.left, "preOrder", result);
      if (node.right) traverse(node.right, "preOrder", result);
      break;

    case "postOrder":
      if (node.left) traverse(node.left, "postOrder", result);
      if (node.right) traverse(node.right, "postOrder", result);
      result.push(node.data);
      break;
  }

  return result;
};

// Depth-first search (DFS): explore the nodes at deep level before goes up and dive deep again
// begin at leftmost node and finish at rightmost node
const inOrder = (tree) => {
  if (!tree.root) return null;
  return traverse(tree.root, "inOrder");
};

// Depth-first search (DFS): explore the nodes at deep level before goes up and dive deep again
// begin at root node and finish at rightmost node
const preOrder = (tree) => {
  if (!tree.root) return null;
  return traverse(tree.root, "preOrder");
};

// Depth-first search (DFS): explore the nodes at deep level before goes up and dive deep again
// begin at leftmost node and finish at root node
const postOrder = (tree) => {
  if (!tree.root) return null;
  return traverse(tree.root, "postOrder");
};

// Breadth-first search (BFS): explore all the nodes with a given level before goes down to another level
// Use queue to enqueue/dequeue the level items evaluated
const levelOrder = (tree) => {
  if (!tree.root) return null;

  const result = [];
  const queue = [];

  queue.push(tree.root);

  while (queue.length > 0) {
    let node = queue.shift(); // mutate array
    result.push(node.data);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
};

const btree = new BinaryTree();
btree.insert(9);
btree.insert(17);
btree.insert(4);
btree.insert(6);
btree.insert(3);
btree.insert(22);
btree.insert(20);
btree.insert(10);
btree.insert(5);
btree.insert(7);

// btree.print();

console.log(`inOrder traversal: ${inOrder(btree)}`);
console.log(`preOrder traversal: ${preOrder(btree)}`);
console.log(`postOrder traversal: ${postOrder(btree)}`);
console.log(`levelOrder traversal: ${levelOrder(btree)}`);
