const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log("✅✅✅ Assertion passed: " + actual + " === " + expected);
  else
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countLetters = function(strSentence) {
  let retObj = {};
  for (let i of strSentence)
  {
    let attribute = i;
    if (typeof retObj[attribute] === "number")
      retObj[attribute]+=1
    else
      retObj[attribute]=1
  }
  //console.log(retObj)
  return retObj;
}

const result1 = countLetters("lighthouse in the house") ;

assertEqual(result1["L"], 2);
assertEqual(result1["D"], undefined);
assertEqual(result1["H"], 1);
assertEqual(result1["A"], undefined);
