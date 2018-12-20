'use strict';

let leftJoin = module.exports = {};

leftJoin.leftjoins = (myMap1, myMap2) => {
  let returnObj = {};
  let keyArr = Array.from(myMap1.keys());
  let keyArr2 = Array.from(myMap2.keys());
  console.log(keyArr);
  console.log(keyArr2);

  if((keyArr.length === 0) || (keyArr2.length === 0)) {
    return 'Empty hashmap';
  }
  for(let i = 0; i < keyArr.length; i ++) {
    let newKey = keyArr[i];
    let leftVal = myMap1.get(newKey);
    let rightVal = myMap2.get(newKey);
    returnObj[newKey] = [leftVal, rightVal];
  }
  console.log(returnObj);
  return returnObj;
};
