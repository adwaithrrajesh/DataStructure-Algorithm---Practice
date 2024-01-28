const binaryTree = require('./binaryTreeSearch-Logic');

const bst = new binaryTree()
bst.insertNode(11);
bst.insertNode(20);
bst.insertNode(30);
// bst.printValues(bst.root);
// bst.printOdd(bst.root)
bst.printEven(bst.root)