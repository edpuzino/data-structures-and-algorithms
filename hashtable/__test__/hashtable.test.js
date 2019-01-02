'use strict';

const Hashmap = require('../hashtable.js');

describe('hashtable.js', () => {

  let myhash = new Hashmap(14);
  myhash.add('John','Boss');
  myhash.add('Cathy','The Real Boss');
  myhash.add('Zach','Kid 1');
  myhash.add('Allie','Kid 2');
  myhash.add('Rosie','Dog');
  myhash.add('Cat','TA');
  myhash.add('Justin','Student');
  myhash.add('Jason','Student');
  myhash.add('Ben','Student');
  myhash.add('Timea','Student');
  myhash.add('Jen','Student');
  myhash.add('Khalil','Student');
  myhash.add('Michael','Student');
  myhash.add('Ovi','Student');

  it('Finds the value from a key value pair', () => {
    let find = myhash.find('Rosie');
    expect(find).toEqual('Dog');
  });

  it('Finds the value from a key value pair when there are more than one values in the table row', () => {
    let find = myhash.find('Justin');
    expect(find).toEqual('Student');
  });


  it('Checks for incorrect key', () => {
    let find = myhash.find('Paul');
    expect(find).toEqual('This key is not in the Hash table');
  });


  it('Checks if the table contains the key', () => {
    let contains = myhash.contains('Lynn');
    expect(contains).toEqual(true);
  });


  it('Checks if the table does not contain the key', () => {
    let contains = myhash.contains('Pat');
    expect(contains).toEqual(false);
  });


  it('Gets the index for a given key', () => {
    let get = myhash.getHash('Timea');
    expect(get).toEqual(6);
  });

  
});