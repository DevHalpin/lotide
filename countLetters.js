const countLetters = (string) => {
  const output = {};
  let noSpaces = string.split(' ').join('');
  for (const letter of noSpaces) {
    if (output[letter]) {
      output[letter]++;
    } else {
      output[letter] = 1;
    }
  }
  return (output);
};

module.exports = countLetters;
