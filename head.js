const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻👌🏻👌🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function head(array) {
  let arrayHead = array[0];
  console.log(arrayHead);
}

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([20]), 5);
assertEqual(head([]), 5);
assertEqual(head(["Alex"]), "Dolly");

