'use strict';

const leftJoin = require('../left-join.js');

let myMap1 = new Map();
myMap1.set('big', 'huge');
myMap1.set('bright', 'shiny');
myMap1.set('happy', 'merry');
myMap1.set('lucky', 'fortuitous');

let myMap2 = new Map();
myMap2.set('happy', 'sad');
myMap2.set('bright', 'dim');
myMap2.set('big', 'little');
myMap2.set('smart', 'slow');

let myMap3 = new Map();

let mapJoin = {'big': ['huge', 'little'], 'bright': ['shiny', 'dim'], 'happy': ['merry', 'sad'], 'lucky': ['fortuitous', undefined]};

describe('left-join.js', () => {

  it('correctly join two hashmaps', () => {
    let hash = leftJoin.leftjoins(myMap1, myMap2);
    expect(hash).toEqual(mapJoin);
  });

  it('test for an empty hashmap', () => {
    let hash = leftJoin.leftjoins(myMap1, myMap3);
    expect(hash).toEqual('Empty hashmap');
  })

});