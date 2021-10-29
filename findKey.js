// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log("✅✅✅ Assertion passed: " + actual + " === " + expected);
  else
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    //console.assert(actual === expected, actual + '!==' + expected);
};

const findKey = function(objVal, callback) {
  for (let val of Object.keys(objVal)){ 
    if(callback(objVal[val]))
      return val;
  }
}

const result = findKey({
                  "Blue Hill": { stars: 1 },
                  "Akaleri":   { stars: 3 },
                  "noma":      { stars: 2 },
                  "elBulli":   { stars: 3 },
                  "Ora":       { stars: 2 },
                  "Akelarre":  { stars: 3 }
                }, x => x.stars === 2) // => "noma"


// TEST CODE
assertEqual(result, "noma");
assertEqual(result, "Ora");
assertEqual(result, "Akaleri");
