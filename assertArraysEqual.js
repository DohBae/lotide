const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  let stringAnswer = '';
  if (eqArrays(firstArray, secondArray)) {
    stringAnswer = 'The arrays are the same.';
  } else {
    stringAnswer = 'The arrays are not the same.';
  }
  console.log(stringAnswer);
}

module.exports = assertArraysEqual;
