const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻👌🏻👌🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  const lowerCaseStr = string.toLowerCase();
  const result = {};

  for (let letter of lowerCaseStr) {
    if (result[letter] === undefined) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  console.log(result) 
}
  


countLetters('wassup?')
countLetters('Hello there!')
countLetters('Now this is podracing!')