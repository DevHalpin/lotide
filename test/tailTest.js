const assert = require('chai').assert
const tail = require('../tail')

describe('#tail' , () => {
  it("should return ['Lighthouse',['Labs'] for ['Yo Yo','Lighthouse','Labs']", () => {
    assert.deepEqual(tail(['Yo Yo','Lighthouse','Labs']),['Lighthouse','Labs'])
  });
  it('should return [] for []', () => {
    assert.deepEqual(tail([]),[]);
  });
  it('should return [1] for []', () => {
    assert.deepEqual(tail([1]),[]);
  });
});
