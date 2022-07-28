const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻👌🏻👌🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  let answer = true
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      answer = false;
    }
  }
  return answer;
}

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let inputValues1 = Object.values(object1);
  let keys2 = Object.keys(object2);
  let inputValues2 = Object.values(object2);

  if (keys1.length === keys2.length) {
    for (let key in object1) {
      if (!keys2.includes(key)) {
        return false;
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
  return false;
  }
}





const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqArrays(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqArrays(eqObjects(cd, cd2), false); // => false

