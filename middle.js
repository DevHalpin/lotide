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

const middle = (inputArr) => {
  outputArr = [];
  if (inputArr.length < 3) {
    return outputArr;
  } else if (inputArr.length % 2 === 0) {
    outputArr.push(inputArr[(inputArr.length/2)- 1], inputArr[(inputArr.length/2)]);
  } else if (inputArr.length % 2 !== 0) {
    outputArr.push(inputArr[Math.floor(inputArr.length/2)]);
  }
  return outputArr;
}

let number = [1, 2, 3, 4];
console.log(middle([1, 2, 3, 4])); // => [2,3]
assertArraysEqual(number, [1,2,3,4]);
console.log(middle([1, 2, 3,4,5,6,7,8,9,10])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3])
console.log(middle(['this','is','a','silly','test']));