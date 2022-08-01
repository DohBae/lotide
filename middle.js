const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleArray = [];

  for (i = 0; i < array.length; i++) {
    if (array.length <= 2) {
      middleArray = [];
    } else if ((array.length > 2) && (array.length % 2 === 0)) {
      let arrOne = array[Math.floor((array.length - 1) / 2)];
      let arrTwo = array[array.length / 2];
      middleArray = [arrOne, arrTwo];
    } else if ((array.length > 2) && (array.length % 2 !== 0)) {
      middleArray = array[(array.length -1) / 2];
    }
  }
  console.log(middleArray);
  return middleArray;
}

module.exports = middle;
