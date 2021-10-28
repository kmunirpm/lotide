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

const letterPositions = function(sentence) {
  const retObj = {};
  for (let i in sentence)
  {
    let key = sentence[i];
    if (key ===" ") continue;
    if (typeof retObj[key] === "undefined")
      retObj[key] = [Number(i)] //retObj[sentence[i]]+=`-${i}`
    else
      retObj[key].push(Number(i))
  }
  console.log(retObj)
  return retObj;
};

const result1 = letterPositions("lighthouse in the house") ;
assertEqual([0], result1["l"]);
assertEqual([3, 5, 15, 18], result1["h"]);
assertEqual([0,1,2], result1["u"]);
assertEqual([0], result1["n"]);
