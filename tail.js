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

module.exports = tail;