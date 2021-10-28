// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;}
  }
  return true
};

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) return false;
  for(let attrib of Object.keys(object1)){
    if(Array.isArray(object1[attrib]) || Array.isArray(object2[attrib])){
      let retval = eqArrays(object1[attrib],object2[attrib])
      if(retval === false) return false;
    }
    else if(object1[attrib] !== object2[attrib]) return false;
  }
  return true;
};

const assertEqual = function(object1, object2) {
  if (eqObjects(object1, object2))
    console.log("✅✅✅ Assertion passed:" , object1 , "===" , object2);
  else
    console.log("🛑🛑🛑 Assertion Failed:" , object1 , "!==" , object2);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(cd, cd2); // => false

