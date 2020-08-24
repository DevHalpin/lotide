const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return [2,3] for [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it('should return [5,6] for [1,2,3,4,5,6,7,8,9,10]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9,10]), [5,6])
  });
  it('should return [3] for [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });
  it("should return ['a'] for ['this','is','a','silly','test']",() => {
    assert.deepEqual(middle(['this','is','a','silly','test']),['a']);
  });
});