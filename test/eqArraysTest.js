const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

describe("#eqArrays", () => {
  it("should return true if the indices in both arrays are the same", () => {
    assert.isTrue(eqArrays(["oh", "hai", "mark"], ["oh", "hai", "mark"]), true);
  });
  it("should return false if the indices in both arrays aren't the same", () => {
    assert.isNotTrue(eqArrays([1, 2, 3], [1, 2]), false);
  });
});

assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays(["oh", "hai", "mark"], ["oh", "hai", "mark"]), true);