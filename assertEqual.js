// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const outputValue = actual;
  const eValue = expected;
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${outputValue} === ${eValue}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${outputValue} !=== ${eValue}`);
  }
};

//TEST CODE
assertEqual('Lighthouse' , 'Lighthouse');
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1);
assertEqual(1, 42);