const eqArrays = function(arr1, arr2)
{
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])     {
      return false;
      break;
    }
  }
  return true;
}


const assertArraysEqual = function(arr1, arr2)
{
  if (eqArrays(arr1, arr2))
    console.log("✅✅✅ Assertion passed: " + arr1 + " === " + arr2);
  else
    console.log("🛑🛑🛑 Assertion Failed: " + arr1 + " !== " + arr2);
}


module.exports = assertArraysEqual