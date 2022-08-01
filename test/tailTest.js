const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1]), []);
assertEqual(tail([]), []);
assertEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
assertEqual(tail(["Mary", "had", "a", "little", "lamb"]), ["had", "a", "little","lamb"]);