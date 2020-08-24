const assert = require('chai').assert;
const _ = require('../index');

describe('#eqObjects', () => {
  it("should return true for { a: '1', b: '2' } and { b: '2', a: '1' }", () => {
    assert.equal(_.eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
  it("should return false for { a: '1', b: '2'} and { a: '1', b: '2', c: '3'}", () => {
    assert.equal(_.eqObjects({ a: '1', b: '2'}, { a: '1', b: '2', c: '3'}), false);
  });
  it("should return true for { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1' }", () => {
    assert.equal(_.eqObjects({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }), true);
  });
  it("should return true for { c: '1', d: ['2', 3] } and { c: '1', d: ['2',3,4] }", () => {
    assert.equal(_.eqObjects({ c: '1', d: ['2', 3] }, { c: '1', d: ['2',3,4] }), false);
  });
  it("should return true for a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.equal(_.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("should return false for a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.equal(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("should return false for a: { y: 0, z: 1 }, b: 2 } and { a: 1 , b: 2 }", () => {
    assert.equal(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});