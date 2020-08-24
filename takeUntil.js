const takeUntil = (array, callback) => {
  results = [];
  let i = 0
  while (i < array.length) {
    if (callback(array[i])) {
      break
    }
      results.push(array[i]);
      i++;
  }
  return results;
}

module.exports = takeUntil;