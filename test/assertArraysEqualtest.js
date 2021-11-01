const assertArraysEqual = require('./assertArraysEqual');

//Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 2]); // => should Fail
assertArraysEqual([1, 2, 2, 2, 4], [1, 2, 2, 2, 4]); // => should PASS


