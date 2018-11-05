'use strict'

const Node = require('./node.js');

class AnimalShelter {

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

  dequeue(pref) {

    let dequeueNode = this.head;
    if((pref = 'cat') || (pref = 'dog')) {      
      while(dequeueNode.next) {
        if(dequeueNode.value = pref) {
          let newPet = dequeueNode;
          dequeueNode = dequeueNode.next;
          return newPet;
        }
        dequeueNode = dequeueNode.next;
      }
    } else {
      let newNode = dequeueNode.next;
      this.head = newNode;
      return dequeueNode.value
    }
  }
}

module.exports = AnimalShelter;