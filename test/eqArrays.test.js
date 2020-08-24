const assert = require('chai').assert;
const _ = require('../index');  

describe('#eqArrays', () => {
  it('should return true for [1,2,3] and [1,2,3]', () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true)    
  });
  it('should return false for [1,2,3] and [3,2,1]', () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false)    
  });
  it('should return true for ["1", "2", "3"] and ["1", "2", "3"]', () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)    
  });
  it('should return false for ["1", "2", "3"] and ["1", "2", 3]', () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false)    
  });
  it('should return true for [1, [2], 3] and [1, [2], 3]', () => {
    assert.deepEqual(_.eqArrays([1, [2], 3], [1, [2], 3]), true)    
  });
  it('should false true for [1, [2], 3] and [1, [2, 3]]', () => {
    assert.deepEqual(_.eqArrays([1, [2], 3], [1, [2, 3]]), false)    
  });
});
