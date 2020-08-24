const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual')
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const flatten = require('./flatten');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions')
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertEqual : assertEqual,
  assertArraysEqual : assertArraysEqual,
  assertObjectsEqual : assertObjectsEqual,
  eqObjects: eqObjects,
  eqArrays : eqArrays,
  flatten : flatten,
  countLetters : countLetters,
  countOnly : countOnly,
  findKey : findKey,
  findKeyByValue : findKeyByValue,
  letterPositions : letterPositions,
  map : map,
  takeUntil : takeUntil,
  without : without
};