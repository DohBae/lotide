const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("should return 'The arrays are the same.' if both arrays are the same", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3], 'The arrays are the same.'))
  });
  it("should return'The arrays are not the same.' if one array is different than the other", () => {
    assert.strictEqual(assertArraysEqual(["I", "hate", "sand"], ["it's", "coarse", "rough"], 'The arrays are not the same.'))
  });
});