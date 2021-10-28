const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log("✅✅✅ Assertion passed: " + actual + " === " + expected);
  else
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const findKeyByValue = function(objVal, Values) {
  //for (let val in objVal) 
    //if(objVal[val]===Values)
      //return val;
  for (let val of Object.keys(objVal)) 
      if(objVal[val]===Values)
        return val;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);