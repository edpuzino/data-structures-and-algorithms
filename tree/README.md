

# Trees

Implement a tree

## Challenge

Create a Node class that has properties for the value stored in the node, the left child node, and the right child node .

Create a BinaryTree class

* Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which takes in a root node, and returns an array of the nodes.

At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

Create a BinarySearchTree class

* Define a method named add that adds a new node in the correct location in the binary search tree.
* Define a method named search that brings in a value of node, and returns the node with the desired value.

## Approach & Efficiency

The Big O for each of these methods is O(n), because they each iterte through the tree once.

## API

The preOrder method starts at the root and then travels down the left side and then the right.

The inOrder method travels through the left side first, then the root and the right side last.

The postOrder method travels down the left side , then the right, and saves the root for last.

The breadthFirst method checks each level in order from top to bottom, and from left to right.

The findMaximumValue travels through the tree in a preOrder order checking each value and replacing the maxValue when a new higher value is found.
