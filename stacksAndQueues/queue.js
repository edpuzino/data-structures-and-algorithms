'use strict';

const Node = require('./node.js');


class Queue {

  constructor() {
    this.head = null;
  }

  enqueue(value) {
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
    return this;
  }

  dequeue() {

    let dequeueNode = this.head;
    let newNode = dequeueNode.next;
    this.head = newNode;
    return dequeueNode.value;
  }

  peek() {

    let peekNode = this.head;
    peekNode.next = null;
    console.log(peekNode);
  }


}


module.exports = Queue;