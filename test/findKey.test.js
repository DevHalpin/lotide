const assert = require('chai').assert
const _ = require('../index')

const results = _.findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
const result2 = _.findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 6);

describe('#findKey', () => {
  it('should return "noma" for results', () => {
    assert.strictEqual(results, 'noma');
  });
  it('should return undefined for results2', () => {
    assert.strictEqual(result2, undefined);
  });
});