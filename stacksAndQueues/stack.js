'use strict';

const Node = require('./node.js');

class Stack {

  constructor() {
    this.head = null;
    this.top = '';

  }

  push(value) {

    let node = new Node(value);

    if(! this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
  
    currentNode.next = node;
    return currentNode;

  }

  pop() {    

    let currentNode = this.head;
    let poppedNode = {};
    while(currentNode.next) {
      while(currentNode.next && currentNode.next.next) {
        currentNode = currentNode.next;
      }
      poppedNode = currentNode.next;
      currentNode.next = null;
      return poppedNode;
    }
    poppedNode = currentNode;   
    currentNode = null;
    return poppedNode;
  }

  peek() {

    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    console.log(currentNode)
    return currentNode;
  }

}



module.exports = Stack;
