// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log("✅✅✅ Assertion passed: " + actual + " === " + expected);
  else
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    //console.assert(actual === expected, actual + '!==' + expected);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);


