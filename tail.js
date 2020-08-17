const assertEqual = function(actual, expected) {
  const outputValue = actual;
  const eValue = expected;
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${outputValue} === ${eValue}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${outputValue} !=== ${eValue}`);
  }
};

const tail = function(arr) {
  const output = [];
  if (arr.length <= 1) {
    return [];
  } else {
    for (let i = 1; i < arr.length; i++) {
      output.push(arr[i]);
    }
    return output;
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log(tail([]));
console.log(tail([1]));