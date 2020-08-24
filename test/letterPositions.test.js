const assert = require('chai').assert;
const _ = require('../index');

describe('#letterPositions', () => {
  it('should return [0] for "h"', () => {
    assert.deepEqual(_.letterPositions('hello').h,[0]);
  });
  it('should return [1] for "e"', () => {
    assert.deepEqual(_.letterPositions('hello').e,[1]);
  });
  it('should return [2,3] for "l"', () => {
    assert.deepEqual(_.letterPositions('hello').l,[2,3]);
  });
  it('should return [4] for "o"', () => {
    assert.deepEqual(_.letterPositions('hello').o,[4]);
  });
});