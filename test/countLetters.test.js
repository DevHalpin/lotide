const assert = require('chai').assert;
const _ = require('../index')

describe('#countLetters', () => {
  it('should return 2 for "L" in "LHL"', () => {
    assert.strictEqual(_.countLetters('LHL')['L'], 2);
  });
  it('should return 3 for "e" in "lighthouse in the house"', () => {
    assert.strictEqual(_.countLetters('lighthouse in the house')['e'], 3);
  });
});
