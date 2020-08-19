const assertEqual = function(actual, expected) {
  const outputValue = actual;
  const eValue = expected;
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${outputValue} === ${eValue}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${outputValue} !== ${eValue}`);
  }
};

const findKeyByValue = (obj, value) => {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);