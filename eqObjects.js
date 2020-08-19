const assertEqual = function(actual, expected) {
  const outputValue = actual;
  const eValue = expected;
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${outputValue} === ${eValue}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${outputValue} !== ${eValue}`);
  }
};

const eqArrays = function(inputArr1, inputArr2) {
  if (inputArr1.length !== inputArr2.length) {
    return false;
  }
  for (let i = 0; i < inputArr1.length; i++) {
    if (inputArr1[i] !== inputArr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (object1[key] instanceof Array && object2[key] instanceof Array) {
      console.log(object1[key]);
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false