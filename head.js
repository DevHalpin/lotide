const assertEqual = function(actual, expected) {
  const outputValue = actual;
  const eValue = expected;
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${outputValue} === ${eValue}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${outputValue} !=== ${eValue}`);
  }
};

const head = function(arr) {
  return arr[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);