const eqArrays = function(firstArray, secondArray) {
  let answer = true
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      answer = false;
    }
  }
  return answer;
}

const assertArraysEqual = function(firstArray, secondArray) {
  let stringAnswer = '';
  if (eqArrays(firstArray, secondArray)) {
    stringAnswer = 'The arrays are the same.';
  } else {
    stringAnswer = 'The arrays are not the same.';
  }
  console.log(stringAnswer);
}

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
}

middle([1, 2, 3]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4]);
middle([1]);
middle([1, 2]);