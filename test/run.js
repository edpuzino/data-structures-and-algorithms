'use strict';

const PsuedoQueue = require('../queueWithStacks/queue-with-stacks.js');
//const AnimalShelter = require('../fifoAnimalShelter/fifo-animal-shelter.js');

//let s = new Stack();

//s.push(1);
//s.push(2);
//s.push(3);
//s.push(4);
//console.log(s);

//console.log(s.peek());

//console.log(s.pop(), s);
//console.log(s.pop(), s);
//console.log(s.pop(), s);
//console.log(s.pop(), s);

let q = new PsuedoQueue();

q.enqueue('dog');
console.log(q);
q.enqueue('cat');
console.log(q);
q.enqueue('dog');
console.log(q);
q.enqueue('cat');
console.log(q);

//q.peek();
//q.peek();

//q.dequeue('pig');

//console.log(q.dequeue('pig'), q);
//console.log(q.dequeue(), q);
//console.log(q.dequeue(), q);
//console.log(q.dequeue(), q);