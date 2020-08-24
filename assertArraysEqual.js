const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  const inspect = require('util').inspect;
  if (eqArrays(arr1,arr2)) {
    console.log(`✅ Assertion Passed: ${inspect(arr1)} === ${inspect(arr2)}`);
  } else {
    console.log(`🚫 Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)}`);
  }
};

module.exports = assertArraysEqual;