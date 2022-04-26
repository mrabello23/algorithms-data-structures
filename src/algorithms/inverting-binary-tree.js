const BinaryTree = require("../data-structures/binary-tree");

const invertTree = (root) => {
  if (!root) return null;

  // Swap
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
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

console.log(btree.root);
console.log(invertTree(btree.root));
