'use strict';

const Node = require('./node.js');

class FizzBuzzTree {
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

  fizzBuzzTree() {

    let results = [];
    let _walk = node => {
      if(node.value %3 === 0 && node.value %5 === 0) {
        node.value = 'FizzBuzz';
      } else if(node.value %3 === 0) {
        node.value = 'Fizz';
      } else if(node.value %5 === 0) {
        node.value = 'Buzz';
      }      
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
}

module.exports = FizzBuzzTree;