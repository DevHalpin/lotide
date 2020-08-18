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

const without = function(source, itemsToRemove) {
  const outputArr = [];
  for (const element of source) {
    let itemFound = false;
    for (const item of itemsToRemove) {
      if (element === item) {
        itemFound = true;
      }
    }
    if (!itemFound) {
      outputArr.push(element);
    }
  }
  return outputArr;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const contents = [1, 2, '3','bread'];
console.log(without(contents, [1,3,'toast']));
assertArraysEqual(contents, [1, 2, '3','bread']);