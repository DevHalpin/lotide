# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @devlhalpin/lotide`

**Require it:**

`const _ = require('@devhalpin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)` : Returns first element of array
  `tail(arr)` : Returns array minus the first element
  `middle(arr)` : Returns middle of array
  `assertEqual(value1, value2)` : Returns if value1 is equal to value2
  `assertArraysEqual(arr1, arr2)`: Same as assertEqual but takes arrays as arguments
  `assertObjectsEqual(obj1, obj2)`: Same as assertEqual but takes objects as arguments
  `eqObjects(obj1, obj2)`: Used by assertObjectsEqual to test objects are the same
  `eqArrays(arr1, arr2)` : Used by assertArraysEqual to test arrays are the same
  `flatten(arr)`: Flattens array with nested elements
  `countLetters(str)`: Returns object using letters in provided string as keys and number of occurences of each letter as values
  `countOnly((arr, obj)`: Returns object using array values as keys and number of occurences of each key as values
  `findKey(obj,callback)`: Returns first key that matches callback in object
  `findKeyByValue(obj, value)`: Returns first key whose value matches value in object
  `letterPositions(str)`: Returns object with each letter in string as key and it's indexes as values
  `map(array, callback)`: Returns array with the results of calling callback on every element in the provided array 
  `takeUntil(array, callback)`: Returns array containing all elements of provided array up until the index value matches the results of callback
  `without(arr1, arr2)`: Returns array containing all elements that are in arr1 and not in arr2 
