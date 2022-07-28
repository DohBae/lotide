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

//TAKE UNTIL
const takeUntil = (array, callback) => {
  let result = [];
  for (let element of array) { 
    if (callback(element)) {
      break;
    }
    result.push(element);
  }
  return result;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
/*
EXPECTED OUTPUT

[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/