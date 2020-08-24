const flatten = (arr) => {
  let outputArr = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      outputArr = outputArr.concat(flatten(element));
    } else {
      outputArr.push(element);
    }
  }
  return outputArr;
};

module.exports = flatten;
