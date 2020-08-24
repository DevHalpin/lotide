const assert = require('chai').assert
const _ = require('../index')

describe('#tail' , () => {
  it("should return ['Lighthouse',['Labs'] for ['Yo Yo','Lighthouse','Labs']", () => {
    assert.deepEqual(_.tail(['Yo Yo','Lighthouse','Labs']),['Lighthouse','Labs'])
  });
  it('should return [] for []', () => {
    assert.deepEqual(_.tail([]),[]);
  });
  it('should return [1] for []', () => {
    assert.deepEqual(_.tail([1]),[]);
  });
});
