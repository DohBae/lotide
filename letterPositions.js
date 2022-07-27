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

const letterPositions = function(string) {
  const results = {};
  const lowerCaseStr = string.toLowerCase();
  const noSpaceStr = lowerCaseStr.replaceAll(' ', '');
  
  for (let i = 0; i < noSpaceStr.length; i++) {
    const letter = noSpaceStr[i];
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(i);
  }
  console.log('results:', results);
  return results;
};

assertArraysEqual(letterPositions("hello"), [1]);
assertArraysEqual(letterPositions("lighthouse in the house"), [1]);
assertArraysEqual(letterPositions("Now this is podracing"), [1]);