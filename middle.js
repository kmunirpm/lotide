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
console.log(Math.round(arr1.length/2));
  return eqArrays(arr1, arr2)
}



console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(assertArraysEqual([1, 2, 3], [1, 2, 2])); // => should Fail
console.log(assertArraysEqual([1, 2, 2, 2, 4, 5], [1, 2, 2, 2, 4, 5])); // => should PASS

const person = { firstName: "Khurram" };
const firstName = person["firstName"]; 
console.log(person[firstName])