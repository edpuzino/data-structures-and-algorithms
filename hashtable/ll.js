'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value) {     // Big O value is O(n)

    let node = new Node(value);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;
    }

    // If we have stuff, we add to the end
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;

  }

  prepend(value) {    // Big O value is O(2)

    let node = new Node(value);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;      
    }

    // If we have stuff, we add to the beginning
    node.next = this.head;
    this.head = node;
    return this;
  }
  

  insertBefore(value, newVal) {   // Big O value is O(n)

    let node = new Node(value);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;      
    }

    // We add a new value before the value in the linked list
    let currentNode = this.head;
    while(currentNode.next.value != value) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }

  insertAfter(value, newVal) {    // Big O value is O(n)

    let node = new Node(newValue);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;      
    }

    // We add a new value before the value in the linked list
    let currentNode = this.head;
    while(currentNode.next.value != value) {
      currentNode = currentNode.next;
    }
    currentNode = currentNode.next;
    currentNode.next = node;
    return this;
  }

/*
  reverse() {}

  remove(offset) {}

  serialize() {}

  deserialize() {}
*/
}

module.exports = LinkedList;