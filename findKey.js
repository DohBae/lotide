const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻👌🏻👌🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const findKey = (object, callback) => {
  console.log('callback:', callback);
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
}

const movies = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const result = findKey(movies, movie => movie.stars === 2) // => "noma"

assertEqual(result, "noma");