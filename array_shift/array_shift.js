'use strict';

const arrayShift = module.exports = {};

arrayShift.insertShiftArray = (arr, value) => {
  const a = Math.ceil(arr.length/2);
  const newArray = [];

  if(arr.length === 0 || !Array.isArray(arr)) {
    return null;
  } else {
    for(let i = 0; i < arr.length; i++) {
      if(a === i) {
        newArray.push(value);
      } newArray.push(arr[i]);
    } return newArray;
  }
};

