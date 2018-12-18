'use strict';

const Node = require('./node.js');

let treeOne = [ 9, 4, 3, 6, 5, 7, 17, 22, 20 ];
let treeTwo = [ 41, 12, 53, 87, 91, 5, 3, 2, 72 ];
let treeThree = [ 41, 18, 2, 35, 51, 14, 8, 63, 0 ];
let treeFour = [];
let commonValues = [ 3, 5 ];

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

  treeIntersection(node, nodeTwo) {
    let results = [];
  
    let _walk = node => {
  
      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
      let _jump = nodeTwo => {
  
        if(nodeTwo.left) {
          _jump(nodeTwo.left);
        }
        if(nodeTwo.right) {
          _jump(nodeTwo.right);
        }
        if(node.value === nodeTwo.value) {
          results.push(node.value);
        }
      };
      _jump(nodeTwo.root);
    };
    _walk(node.root);
    console.log(results);
    return results;
  }
/*
  treeIntersection(treeOne, treeTwo) {
    let results = [];

    _walk => {
      if(treeOne.left) {
        _walk(treeOne.left);
        _jump => {
          if(treeTwo.left) {
            _jump(treeTwo.left);
              if(treeOne.value === treeTwo.value) {
                results.push(treeOne.value);
              }
          }
          if(treeTwo.right) {
            _jump(treeTwo.right);
            if(treeOne.value === treeTwo.value) {
              results.push(treeOne.value);
            }
          }
        }
        _jump(treeTwo.root);
      }
      if(treeOne.right) {
        _walk(treeOne.right);
        _jump => {
          if(treeTwo.left) {
            _jump(treeTwo.left);
              if(treeOne.value === treeTwo.value) {
                results.push(treeOne.value);
              }
          }
          if(treeTwo.right) {
            _jump(treeTwo.right);
            if(treeOne.value === treeTwo.value) {
              results.push(treeOne.value);
            }
          }
        }
        _jump(treeTwo.root)
      }
      _walk(treeOne.root);
    };
    console.log(results);
    return results;
  }*/


}












let tree = new BinarySearchTree();
treeOne.map(value => tree.add(value));
let treeOneTree = tree;
console.log(treeOneTree);

tree = new BinarySearchTree();
treeTwo.map(value => tree.add(value));
let treeTwoTree = tree;
console.log(treeTwoTree);

tree = new BinarySearchTree();
tree.treeIntersection(treeOneTree, treeTwoTree);



module.exports = BinarySearchTree;

