const assert = require('chai').assert;
const _ = require('../index');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = _.map(words, word => word[0]);
const results2 = _.map(words, word => word[1]);
const results3 = _.map(words, word => word[2]);

describe('#map', () => {
  it("should return ['g','c','t','m','t'] for results1", () => {
    assert.deepEqual(results1, ['g','c','t','m','t']);
  });
  it("should return ['r','o','o','a','o'] for results2", () => {
    assert.deepEqual(results2, ['r','o','o','a','o']);
  });
  it("should return ['o','n',undefined,'j','m'] for results3", () => {
    assert.deepEqual(results3, ['o','n',undefined,'j','m']);
  });
});