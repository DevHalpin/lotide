const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const inspect = require('util').inspect;
  if (eqArrays(arr1,arr2)) {
    console.log(`✅ Assertion Passed: ${inspect(arr1)} === ${inspect(arr2)}`);
  } else {
    console.log(`🚫 Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)}`);
  }
};

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
  results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[2]);
console.log(results1);

assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual(results2, ['r','o','o','a','o']);
assertArraysEqual(results3, ['o','n',undefined,'j','m']);