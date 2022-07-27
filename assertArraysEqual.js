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

assertArraysEqual([1, 2, 3], [1, 2, 3]);