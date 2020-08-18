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
  if (eqArrays(arr1,arr2)) {
    console.log('🟢🟢🟢 Assertion Passed: Array 1 === Array 2');
  } else {
    console.log('🚫🚫🚫 Assertion Failed: Array 1 !== Array 2');
  }
};

assertArraysEqual([1,2,3],[3,2,1]);
assertArraysEqual(['1',2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual(['this','is','fun'],['this','isn\'t','fun']);
assertArraysEqual(['this','is','fun'],['this','is','fun']);