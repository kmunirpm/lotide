const assertEqual = require('./assertEqual');
const head = require('./head');

// TEST CODE
assertEqual(head([5,6,7]), 4);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
