'use strict';

const BinarySearchTree = require('../tree-intersection.js');

describe('tree-intersection.js', () => {

  let treeOne = [ 9, 4, 3, 6, 5, 7, 17, 22, 20 ];
  let treeTwo = [ 41, 12, 53, 87, 91, 5, 3, 2, 72 ];
  let treeThree = [ 41, 18, 2, 35, 51, 14, 8, 63, 0 ];
  let treeFour = [];
  let commonValues = [ 3, 5 ];

  it('test for correct values', () => {
    let tree = new BinarySearchTree();
    treeOne.map(value => tree.add(value));
    let treeOneTree = tree;
    tree = new BinarySearchTree();
    treeTwo.map(value => tree.add(value));
    let treeTwoTree = tree;
    let newArray = tree.tree_intersection(treeOneTree, treeTwoTree);
    expect(newArray).toEqual(commonValues);
  });

  it('test with no common values', () => {
    let tree = new BinarySearchTree();
    treeOne.map(value => tree.add(value));
    let treeOneTree = tree;
    tree = new BinarySearchTree();
    treeThree.map(value => tree.add(value));
    let treeThreeTree = tree;
    let newArray = tree.tree_intersection(treeOneTree, treeThreeTree);
    expect(newArray).toEqual([]);
  });

  it('test for empty tree', () => {
    let tree = new BinarySearchTree();
    treeOne.map(value => tree.add(value));
    let treeOneTree = tree;
    tree = new BinarySearchTree();
    treeFour.map(value => tree.add(value));
    let treeFourTree = tree;
    let newArray = tree.tree_intersection(treeOneTree, treeFourTree);
    expect(newArray).toEqual('Empty Node');
  });

});