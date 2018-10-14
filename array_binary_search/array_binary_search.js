'use strict';

const arrayBinary = module.exports = {};

arrayBinary.binarySearch = (arr, key) => {
  let min = 0;
  let max = arr.length;
  let mid = Math.floor(min + max)/2;

  if(arr.length === 0 || !Array.isArray(arr)) {
    return null;
  } else {
    while(key != arr[mid] && min <= mid) {
      if(key < arr[mid]) {
        max = mid - 1;
      } else {
        min = mid + 1;
      } mid = Math.floor(min + max)/2
    };
    return(key != arr[mid]) ? -1: mid;
  };
};