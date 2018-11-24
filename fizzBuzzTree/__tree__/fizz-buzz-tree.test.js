'use strict';

const FizzBuzzTree = require('../fizz-buzz-tree.js');

describe('fizz-buzz-tree.js', () => {

  let a = [ 10, 8, 12, 3, 11, 18, 15, 45, 33, 50, 53];
  let b = [ 'Buzz', 8, 'Fizz', 'Fizz', 11, 'Fizz', 'FizzBuzz', 'FizzBuzz', 'Fizz', 'Buzz', 53];
  let c = [4, 2, 8];


  it('test for correct output', () => {
    let tree = new FizzBuzzTree();
    let values = a;
    values.map(value => tree.add(value));
    let newArray = tree.fizzBuzzTree();
    expect(newArray).toEqual(b);

  });

  it('test for correct number of elements', () => {
    let tree = new FizzBuzzTree();
    let values = a;
    values.map(value => tree.add(value));
    let newArray = tree.fizzBuzzTree();
    expect(newArray.length).toEqual(b.length);

  });

  it('test for no changes', () => {
    let tree = new FizzBuzzTree();
    let values = c;
    values.map(value => tree.add(value));
    let newArray = tree.fizzBuzzTree();
    expect(newArray).toEqual(c);

  });
});