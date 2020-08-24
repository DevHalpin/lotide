const without = function(source, itemsToRemove) {
  const outputArr = [];
  for (const element of source) {
    let itemFound = false;
    for (const item of itemsToRemove) {
      if (element === item) {
        itemFound = true;
      }
    }
    if (!itemFound) {
      outputArr.push(element);
    }
  }
  return outputArr;
};

module.exports = without;