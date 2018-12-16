'use strict';

const BinarySearchTree = require('../tree-intersection.js');

describe('tree-intersection.js', () => {

  let treeOne = [ 9, 4, 3, 6, 5, 7, 17, 22, 20 ];
  let treeTwo = [ 1, 12, 53, 87, 91, 5, 3, 42, 72 ];
  let treeThree = [ 41, 18, 2, 35, 51, 14, 8, 63, 0 ];
  let treeFour = [];
  let commonValues = [ 5, 3 ];

  it('test for correct values', () => {
    let tree = new BinarySearchTree();
    treeOne.map(value => tree.add(value));
    treeTwo.map(value => tree.add(value));
    let newArray = tree.tree_intersection();
    expect(newArray).toEqual(commonValues);
  });

  it('test with no common values', () => {
    let tree = new BinarySearchTree();
    treeOne.map(value => tree.add(value));
    treeThree.map(value => tree.add(value));
    let newArray = tree.tree_intersection();
    expect(newArray).toEqual([]);
  });

  it('test for empty tree', () => {
    let tree = new BinarySearchTree();
    treeOne.map(value => tree.add(value));
    treeFour.map(value => tree.add(value));
    let newArray = tree.tree_intersection();
    expect(newArray).toBeUndefined();
  });

});