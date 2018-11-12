'use strict';

const multiBracket = require ('../../multi-bracket-validation.js');
describe('multi-bracket-validation.js', () => {
  let a = '{}[(Help)],354{open says me}';
  let b = '[({})]';
  let c = '{(WTF})';

  it('test for true, clean brackets', () => {
    let newTest = multiBracket.validation(b);
    expect(newTest).toBeTruthy;
  });

  it('test for true, brackets with extra elements', () => {
    let newTest = multiBracket.validation(a);
    expect(newTest).toBeTruthy;
  });

  it('test for false', () => {
    let newTest = multiBracket.validation(c);
    expect(newTest).toBeFalsy;
  })
});

