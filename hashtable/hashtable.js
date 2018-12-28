'use strict';

const util = require('util');
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
    let target = this.map[hash];
    
    for(let i = 0; i < target.length; i ++) {



      
    }
    
  }

  // Takes in the key and returns if the key exists in the table already
  contains(key) {
    let hash = this.hash(key);
    let target = this.map[hash];

    if(!target) {



      return false;
    } else {
      return true;
    }
  }

  // Takes in a key and returns the index in the array the key is stored
  getHash(key) {
    let hash = this.hash(key);
    if(hash) {
      return hash;
    }
  }

}



let myhash = new Hashmap(14);
myhash.add('John','Boss');
myhash.add('Cathy','The Real Boss');
myhash.add('Zach','Kid 1');
myhash.add('Allie','Kid 2');
myhash.add('Rosie','Dog');
myhash.add('Cat','TA');
myhash.add('Justin','Student');
myhash.add('Jason','Student');
myhash.add('Ben','Student');
myhash.add('Timea','Student');
myhash.add('Jen','Student');
myhash.add('Khalil','Student');
myhash.add('Michael','Student');
myhash.add('Ovi','Student');

console.log(util.inspect(myhash,{showHidden:false,depth:null}));

let find = myhash.find('Timea');
console.log(find);

let contains = myhash.contains('Jason');
console.log(contains);

let contains2 = myhash.contains('Edward');
console.log(contains2);

let get = myhash.getHash('Rosie');
console.log(get);