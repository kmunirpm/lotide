// FUNCTION IMPLEMENTATION
const tail = function(arrVal) {
  arrVal.shift();
  return arrVal;
};

module.exports = tail;
