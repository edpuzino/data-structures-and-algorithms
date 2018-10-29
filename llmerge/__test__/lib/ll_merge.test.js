'use strict';

let LL = require('../../ll_merge.js');

describe('ll_merge.js', () => {

  it('constructor()', ()=> {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  let A = { head: 1, next: { head: 3, next: { head:5, next: null}}};
  let B = { head: 2, next: { head: 4, next: { head:6, next: null}}};
  let C = { head: 1, next: { head: 2, next: { head:3, next: { head: 4, next: { head: 5, next: { head:6, next: null}}}}}};
  let D = { head: 2, next: { head:6, next: null}};
  let E = { head: 1, next: { head: 2, next: { head:3, next: { head: 6, next: { head: 5, next: null}}}}};
  

  it('merge()', () => {
    let newArray = list.mergeLists(A,B);
    expect(newArray).toEqual(C);
  });

  it('merge() with unequal lists', () => {
    let newArray = list.mergeLists(A,D);
    expect(newArray).toEqual(E);
  });

  it('test for empty array', () => {
    let newArray = list.mergeLists();
    expect(newArray).toBeNull();
  });
});