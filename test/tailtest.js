const assertEqual = require('./assertEqual');
const tail = require('./tail');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse"]); // => will always fail!
assertEqual(result.length, 1); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");