'use strict';

const Node = require('./node.js');

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

  treeIntersection(treeOne, treeTwo) {
    let results = [];

    let _walk = node => {
      if(node.left) {
        _walk(node.left);
        let _jump = nodeTwo => {
          if(nodeTwo.left) {
            _jump(nodeTwo.left);
              if(treeOne.node.value === treeTwo.nodeTwo.value) {
                results.push(treeOne.node.value);
              }
          }
          if(nodeTwo.right) {
            _jump(nodeTwo.right);
            if(treeOne.node.value === treeTwo.nodeTwo.value) {
              results.push(treeOne.node.value);
            }
          }
        }
      }
      if(node.right) {
        _walk(node.right);
        let _jump = nodeTwo => {
          if(nodeTwo.left) {
            _jump(nodeTwo.left);
              if(treeOne.node.value === treeTwo.nodeTwo.value) {
                results.push(treeOne.node.value);
              }
          }
          if(nodeTwo.right) {
            _jump(nodeTwo.right);
            if(treeOne.node.value === treeTwo.nodeTwo.value) {
              results.push(treeOne.node.value);
            }
          }
        }
      }
    };
    return results;
  }
}

module.exports = BinarySearchTree;

