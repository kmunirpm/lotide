
const middle = function(arrF)
{
  const arrLen = arrF.length;
  let mid = 0;
  if(arrLen < 3) return [];
  if(arrLen%2 === 1) 
    return [arrF[Math.ceil(arrLen/2)-1]];
  else
    return [arrF[Math.floor(arrLen/2)-1], arrF[Math.ceil(arrLen/2)]];
}

//Test Code
module.exports = middle