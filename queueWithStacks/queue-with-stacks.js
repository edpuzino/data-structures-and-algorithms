'use strict';

const Node = require('./node.js');
const Stack = require('../stacksAndQueues/stack.js');


class PsuedoQueue {
  
  constructor() {
    this.head = null;
  }

  enqueue(value) {
    let s = new Stack;
    s.push(value);
  }

  dequeue() {
    let s = new Stack;
    let dequeueNode = this.head;
    while(currentNode.next) {
      this.pop();
      s.push(value);
    }
    this.head = dequeueNode.next;
    while(s.next) {
      s.pop();
      this.push(value);
    }

  }

}