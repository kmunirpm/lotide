const assertArraysEqual = require('./assertArraysEqual');
const middle = require('./middle');

//Test Code
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5,6]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [3, 4]); // => should Fail
