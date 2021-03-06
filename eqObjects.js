const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
    for (const key of keys1) {
      if (object1[key] instanceof Array && object2[key] instanceof Array) {
        if (!eqArrays(object1[key],object2[key])) {
          return false;
        }
      }
      if (object1[key] instanceof Object && object2[key] instanceof Object) {
        return eqObjects(object1[key],object2[key])
      }
      else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
};

module.exports = eqObjects;