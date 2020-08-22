const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(inputArr1, inputArr2) {
  if (inputArr1.length !== inputArr2.length) {
    return false;
  }
  for (let i = 0; i < inputArr1.length; i++) {
    if (inputArr1[i] instanceof Array && inputArr2[i] instanceof Array) {
      return eqArrays(inputArr1[i],inputArr2[i]);
    }
    if (inputArr1[i] !== inputArr2[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, [2], 3], [1, [2], 3]), true); // => should PASS
assertEqual(eqArrays([1, [2, 3]], [1, 2, 3]), false); // => should PASS