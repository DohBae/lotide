const assertEqual = require('./assertEqual');

const tail = function(array) {
  for (let i = 1; i < array.length; i++) {
    return array.slice(1);
  }
};

module.exports = tail;