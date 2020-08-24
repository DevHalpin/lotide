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

module.exports = eqArrays;
