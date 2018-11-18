'use strict';

const Node = require('./node.js');


class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  
  preOrder() {
    let results = [];

    let _walk = node => {
      results.push(node.value);

      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    
    let _walk = node => {

      if(node.left) {
        _walk(node.left);
      }
      results.push(node.value);
      if(node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;    
  }

  postOrder() {
    let results = [];

    let _walk = node => {

      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  // Breath First
  levelOrder() {
    let results = [];
    let nodeQueue = [];
  
    nodeQueue.push(this.root);
  
    while(nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if(current.left) {
        nodeQueue.push(current.left);
      }
      if(current.right) {
        nodeQueue.push(current.right);
      }
    }
    return results;
  }
}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    const node = this.root;
    if(node === null) {
      this.root = new Node(value);
      return;
    }

    const _insert = node => {
      if(value < node.value) {
        if(node.left === null) {
          node.left = new Node(value);
          return;
        } else if(node.left !== null) {
          return _insert(node.left);
        }
      } else if(value > node.value) {
        if(node.right === null) {
          node.right = new Node(value);
          return;
        } else if(node.right !== null) {
          return _insert(node.right);
        }
      } else {
        return null;
      }
    };
    _insert(node);
  }
  
  search(value) {

    let _walk = node => {
      
      if(value < node.value) {
        _walk(node.left);
      } else if(value > node.value) {
        _walk(node.right);
      } else if(value === node.value) {
        return node;
      }
    };
    _walk(this.root);
  }

  preOrder() {
    let results = [];

    let _walk = node => {
      results.push(node.value);

      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    
    let _walk = node => {

      if(node.left) {
        _walk(node.left);
      }
      results.push(node.value);
      if(node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;    
  }

  postOrder() {
    let results = [];

    let _walk = node => {

      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  // Breath First
  levelOrder() {
    let results = [];
    let nodeQueue = [];

    nodeQueue.push(this.root);

    while(nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if(current.left) {
        nodeQueue.push(current.left);
      }
      if(current.right) {
        nodeQueue.push(current.right);
      }
    }
    return results;
  }
}

module.exports = BinarySearchTree;
/*
let tree = new BinarySearchTree();
let values = [9,4,17,3,6,22,5,7,20];
values.map(value => tree.add(value));

console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
console.log(tree.levelOrder());
console.log(tree.search(17));


let pine = new BinaryTree();
let pineValues = [1,2,3,4,5,6,7,8,9];
pineValues.map(value => pine.add(value));

console.log(pine.preOrder());
console.log(pine.postOrder());
console.log(pine.inOrder());
console.log(pine.levelOrder());
*/