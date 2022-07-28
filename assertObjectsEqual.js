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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let stringAnswer = '';
  if (eqObjects(actual, expected)) {
    stringAnswer = `👌🏻👌🏻👌🏻 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
  } else {
    stringAnswer = `💀💀💀 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
  }
  console.log(stringAnswer);
};

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({a: "4", b: "3", c: "2"}, {a: "1", b: "2", c: "1"});