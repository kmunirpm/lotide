// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let arrEq = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i])     {
      arrEq = false;
      break;
    }
  }
  if (arrEq === true && actual.length > 0)
  {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }
  else if (arrEq === false && actual.length > 0)
  {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      //console.assert(actual === expected, actual + '!==' + expected);
  }
  else
  {
    if (actual === expected)
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
    else
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const head = function(arrVal) {
  return arrVal[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 4);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
