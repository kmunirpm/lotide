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
  else // this else covers if we have to use it with head function
  {
    if (actual === expected)
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
    else
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arrVal) {
  arrVal.shift();
  return arrVal;
};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse"]); // => will always fail!
assertEqual(result.length, 1); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");