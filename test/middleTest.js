const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe('#middle', () => {
  it("should return the middle value of an array with an odd number of elements in the index", () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });
  it("should return the two middle values of an array with an even number of elements in the index", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return a blank aray if there is only one index in the array", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return a blank array if there is only two indices", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});
