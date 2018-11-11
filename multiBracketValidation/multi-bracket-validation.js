'use strict';

let multiBracket = module.exports = {};

multiBracket.validation = (string) => {
  let newArray = string.split('');
  let filteredArray = newArray.filter(i => ['(', ')', '{', '}', '[', ']'].includes(i));  
  for(var i = 0; i < filteredArray.length-1; i++) {
    if((filteredArray[i] === '(' && filteredArray[i+1] === ')') || (filteredArray[i] === '[') && (filteredArray[i+1] === ']') || (filteredArray[i] === '{') && (filteredArray[i+1] === '}')) {
      filteredArray.splice(i,2);
      i = -1;
    } 
  }
  if(filteredArray.length) {
    return false;
  } else {
    return true;
  }
}

