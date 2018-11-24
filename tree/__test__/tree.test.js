'use strict';

const BinarySearchTree = require('../tree.js');

describe('tree.js', () => {

  let a = [ 9, 4, 3, 6, 5, 7, 17, 22, 20 ];
  let b = [ 3, 5, 7, 6, 4, 20, 22, 17, 9 ];
  let c = [ 3, 4, 5, 6, 7, 9, 17, 20, 22 ];
  let d = [ 9, 4, 17, 3, 6, 22, 5, 7, 20 ];

  it('test for preOrder', () => {
    let tree = new BinarySearchTree();
    let values = d;
    values.map(value => tree.add(value));
    let newArray = tree.preOrder();
    expect(newArray).toEqual(a);
  });

  it('test for postOrder', () => {
    let tree = new BinarySearchTree();
    let values = d;
    values.map(value => tree.add(value));
    let newArray = tree.postOrder();
    expect(newArray).toEqual(b);
  });

  it('test for inOrder', () => {
    let tree = new BinarySearchTree();
    let values = d;
    values.map(value => tree.add(value));
    let newArray = tree.inOrder();
    expect(newArray).toEqual(c);
  });

  it('test for breath', () => {
    let tree = new BinarySearchTree();
    let values = d;
    values.map(value => tree.add(value));
    let newArray = tree.levelOrder();
    expect(newArray).toEqual(d);
  });

  it('test for maximum value', () => {
    let tree = new BinarySearchTree();
    let values = d;
    values.map(value => tree.add(value));
    let maxValue = tree.findMaximumValue();
    expect(maxValue).toEqual(22);    
  });
});