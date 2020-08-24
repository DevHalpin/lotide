const assert = require('chai').assert;
const _ = require('../index');

describe('#countOnly', () => {
  it('should return 1 for "Jason" in result1', () => {
    assert.strictEqual(result1['Jason'],1);
  });
  it('should return undefined for "Karima" in result1', () => {
    assert.strictEqual(result1['Karima'],undefined);
  });
  it('should return 2 for "Jason" in result1', () => {
    assert.strictEqual(result1['Jason'],1);
  });
});

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });