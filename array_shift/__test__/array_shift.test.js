'use strict';

const arrayShift = require('../array_shift.js');

describe('array_shift.js', () => {
  let a = [3,6,8,2,25,1];
  let b = 43;
  let c = [3,6,8,43,2,25,1];
  let d = [];
  let e = [3,6,8,43,53,2,25,1];
  let f = 53;
  let g = 'Happy Birthday';

  it('element to be inserted into middle of a given enen array', () => {
    let newArray = arrayShift.insertShiftArray(a,b);
    expect(newArray).toEqual(c);
  });

  it('test for empty array', () => {
    let newArray = arrayShift.insertShiftArray(d,b);
    expect(newArray).toBeNull();
  });

  it('element to be inserted into middle of a given odd array', () => {
    let newArray = arrayShift.insertShiftArray(c,f);
    expect(newArray).toEqual(e);
  });

  it('test for empty array', () => {
    let newArray = arrayShift.insertShiftArray(g,b);
    expect(newArray).toBeNull();
  });
});