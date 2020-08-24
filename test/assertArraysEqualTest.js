const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3],[3,2,1]);
assertArraysEqual(['1',2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual(['this','is','fun'],['this','isn\'t','fun']);
assertArraysEqual(['this','is','fun'],['this','is','fun']);