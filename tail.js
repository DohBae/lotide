const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻👌🏻👌🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  for (let i = 1; i < array.length; i++) {
    console.log(array[i]);
  }
};

assertEqual(tail(["Hello", "Lighthouse", "Labs"]));
assertEqual(tail([1]));
assertEqual(tail([]));
assertEqual(tail([1, 2, 3, 4, 5]));
assertEqual(tail(["Mary", "had", "a", "little", "lamb"]));