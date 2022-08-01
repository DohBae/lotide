const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe("#tail", () => {
it("should return all of the indices of an array execpt the first index", () => {
  assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
});
it("should return an empty array if there is only one index in the array", () => {
  assert.equal(tail([1]), undefined);
});
it("should return an empty array if given an empty array", () => {
  assert.equal(tail([]), undefined);
});
});