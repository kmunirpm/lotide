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

const without = function(source, itemsToRemove)
{
  let withoutArr = [];
  source.forEach(element => 
  {console.log(element);
    if(itemsToRemove.indexOf(element) < 0)
      withoutArr.push(element);
  });
  return withoutArr;
}



console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(assertArraysEqual([1, 2, 3], [1, 2, 2])); // => should Fail
console.log(assertArraysEqual([1, 2, 2, 2, 4], [1, 2, 2, 2, 4])); // => should PASS


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));


