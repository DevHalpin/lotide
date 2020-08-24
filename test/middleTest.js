const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

let number = [1, 2, 3, 4];
console.log(middle([1, 2, 3, 4])); // => [2,3]
assertArraysEqual(number, [1,2,3,4]);
console.log(middle([1, 2, 3,4,5,6,7,8,9,10])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3])
console.log(middle(['this','is','a','silly','test']));