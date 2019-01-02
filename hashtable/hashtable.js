'use strict';

//const util = require('util');
const LinkedList = require('./ll.js');


class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  // Hashes the key to determines where in the table to put the key and value  
  hash(key) {
    let letters = key.split('');
    let num = letters.reduce((p,n) => {
      let code = n.charCodeAt(0);
      let total = p + code;
      return total;
    },0) % this.size;
    return num;
  }

  // Hashes the key and adds the key and value pair to the table
  add(key, value) {
    let hash = this.hash(key);

    if(!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    this.map[hash].append({name:key, role: value});
  }

  // Takes in the key and returns the value from key/value pair.
  find(key) {
    let hash = this.hash(key);
    let currentNode = this.map[hash].head;
    while(currentNode.next) {
      if(currentNode.value.name === key) {
        return currentNode.value.role;
      }
      currentNode = currentNode.next;
    }
    if(currentNode.value.name === key) {
      return currentNode.value.role;
    }
    return 'This key is not in the Hash table';   
  }

  // Takes in the key and returns if the key exists in the table already
  contains(key) {
    let hash = this.hash(key);
    let target = this.map[hash];
    if(target) {
      return true;
    } else {
      return false;
    }

  }

  // Takes in a key and returns the index in the array the key is stored
  getHash(key) {
    let hash = this.hash(key);
    return hash;
  }

}



module.exports = Hashmap;
