const assertEqual = require('./assertEqual');

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

const output1 = countLetters('LHL');
assertEqual(output1['L'], 2,);
const output2 = countLetters("lighthouse in the house");
assertEqual(output2['e'],3);