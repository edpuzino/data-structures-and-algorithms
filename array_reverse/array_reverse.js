'use strict';


// Takes an array, loops through oit bacwards and pushes the elements to another array. When done the new array it copied into the original array and then returned.
let reverseArray = arr => {
  let revArr = [];
  for(let i = arr.length-1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  arr = revArr;
  return arr;
};

