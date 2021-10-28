const eqArrays = function(arr1, arr2)
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


const assertArraysEqual = function(arr1, arr2)
{
  return eqArrays(arr1, arr2)
}



console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(eqArrays([1, 2, 3], [1, 2, 2])); // => should Fail
console.log(eqArrays([1, 2, 2, 2, 4], [1, 2, 2, 2, 4])); // => should PASS


