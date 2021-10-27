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


const eqArrays= function(arr1, arr2)
{
  let arrEq = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])     {
      arrEq = false;
      break;
    }
  }
  return arrEq;
}
assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), true); // => should PASS
