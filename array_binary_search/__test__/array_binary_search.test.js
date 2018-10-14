'use strict';

const arrayBinary = require('../array_binary_search.js');

describe('array_binary_search.js', () => {
  let a = [2,4,6,8,12,13,15,18,21,24,26,35,38,47,49,57,65,69,72,81];
  let b = 24;
  let c = 9;
  let d = [];

  it('test for correct element', () => {
    let newArray = arrayBinary.binarySearch(a,b);
    expect(newArray).toEqual(c);
  });

  it('test for empty array', () => {
    let newArray = arrayBinary.binarySearch(d,c);
    expect(newArray).toBeNull();
  });

  it('test for no correct element', () => {
    let newArray = arrayBinary.binarySearch(a,c);
    expect(newArray).toEqual(-1);
  })
});