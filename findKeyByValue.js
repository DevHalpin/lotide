const findKey = require("./findKey");

const findKeyByValue = (obj, value) => {
  keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// const findKeyByValue = (obj, value) => {
//   for (const key in obj) {
//     if (obj[key] === value) {
//       return key;
//     }
//   }
//   return undefined;
// };