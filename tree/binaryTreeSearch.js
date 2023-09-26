class Tree {
    // This is the Tree structure of binary tree
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binaryTree{
    constructor(){
        this.root = null;
    }
    // Inserting node
    insertNode(value){
        const node = new Tree(value);
        let root = this.root

        if(!root){
            this.root = node;
        }else{
            this.insertNodeByCheck(node,root)
        }
    }

    // Inserting node in branch
    insertNodeByCheck(node,root){
            if(node.value < root.value){
                if(root.left == null){
                    root.left = node
                    return
                }else{
                    this.insertNodeByCheck(node,root.left)
                }
            }else{
                if(root.right == null){
                    root.right = node
                    return
                }else{
                    this.insertNodeByCheck(node,root.right)
                }
            }
    }

    // Printing root
    printValues(root){
        if(root == null) return
        console.log(root.value);
        this.printValues(root.left)
        this.printValues(root.right)
    }
}


const bst = new binaryTree();
bst.insertNode(10)
bst.insertNode(121)
bst.insertNode(20)
bst.printValues(bst.root)
