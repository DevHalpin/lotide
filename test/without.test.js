const assert = require('chai').assert;
const _ = require('../index');

describe('#without', () => {
  it('should return [2,3] for [1,2,3], [1]', () => {
    assert.deepEqual(_.without([1,2,3],[1]), [2,3]);
  });
  it('should return ["1","2"] for ["1","2","3"],[1,2,"3"]', () => {
    assert.deepEqual(_.without(['1','2','3'],[1,2,'3']), ['1','2']);
  });
  it('should return [2,"3","bread"] for [1,2,"3","bread"],[1,3,"toast"]', () => {
    assert.deepEqual(_.without([1,2,'3',"bread"],[1,3,'toast']), [2,'3','bread']);
  });
});