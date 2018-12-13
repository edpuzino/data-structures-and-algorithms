'use strict';

let repeatedWord = require('../repeated-word.js');

describe('repeated-word.js', () => {
  let string1 = "Happy birthday to you, happy birthday to you, happy birthday dear so and so, happy birthday to you";
  let string2 = "We the people, in order to form a more perfect union, establish justivce, ensure demestic tranquility.";
  let string3 = '';

  it('test for correct answer', () => {
    let newTest = repeatedWord(string1);
    expect(newTest).toEqual('happy');
  });

  it('test for no matches', () => {
    let newTest = repeatedWord(string2);
    expect(newTest).toEqual('There were no matches found');
  });

  it('test for empty string', () => {
    let newTest = repeatedWord(string3);
    expect(newTest).toEqual('The string is empty');
  });

})