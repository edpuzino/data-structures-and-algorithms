'use strict';


let repeatedWord = (string) => {
  string = string.toLowerCase();
  let arr = string.split(' ');
  console.log(arr);
  if(!arr[0]) {
    console.log('The string is empty');
    return 'The string is empty';
  }
  for(let i = 0; i < arr.length-1; i++) {
    for(let j= i+1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        console.log(arr[i]);
        return arr[i];
      }
    }
  }
  console.log('There were no matches found');
  return 'There were no matches found';
}

module.exports = repeatedWord;


