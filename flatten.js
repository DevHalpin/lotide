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

const flatten = (arr) => {
  const outputArr = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const item of element) {
        outputArr.push(item);
      }
    } else {
      outputArr.push(element);
    }
  }
  return outputArr;
};
const array = [1, 2, [3, 4], 5, [6]];
console.log(flatten(array)); // => [1, 2, 3, 4, 5, 6]
console.log(array);
assertArraysEqual(array, [1, 2, [3, 4], 5, [6]]);