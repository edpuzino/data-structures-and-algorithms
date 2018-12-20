'use strict'

let myMap1 = [{ word: 'big', synonym: 'huge'},{word: 'bright', synonym: 'shiny' },{word: 'happy', synonym: 'merry'},{word: 'lucky', synonym: 'fortuitous'}];
let myMap2 = [{word: 'happy', antonym: 'sad'},{word: 'bright', antonym: 'dim'},{word: 'big', antonym: 'little'},{word: 'smart', antonym: 'slow'}]


let returnObj = {};
let keyArr = Array.from(myMap1);
console.log(keyArr);

function leftJoin(A, B) {
  for(let i = 0; i < keyArr.length; i ++) {
    let newKey = keyArr[i];
    let leftVal = A[newKey];
    let rightVal = B[newKey];
    returnObj[newKey] = [leftVal, rightVal];
  }
  console.log(returnObj);
  return returnObj;
}

leftJoin(myMap1, myMap2);

