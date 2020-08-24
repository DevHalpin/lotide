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

module.exports = middle;