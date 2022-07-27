const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻👌🏻👌🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//make a function that searches for a key on an object where it's value matches a given value
//scan the object and return the first key which contains the given value
//no key, should return "undefined"

//need to look through values
//need to return key belonging to value 
  //--> value given is "the wire" should return "drama"
  //--> value given is 'the expanse' should return 'scifi'
  //--> value given is 'brooklyn nine-nine' should return 'comedy'
  //--> value given is 'the witcher' should return 'undefined'

const findKeyByValue = function (object, value) {
  let keys= Object.keys(object);
  let inputValues = Object.values(object);

  for (let i = 0; i < inputValues.length; i++) {
    if (inputValues[i] === value) {
      console.log(keys[i]);
      return keys[i];
    }
  }
  return 'undefined';
  
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Witcher"), "fantasy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");
