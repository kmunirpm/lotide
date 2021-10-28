'use strict';
let str='';
for (let j = 2; j < process.argv.length; j++) {
  str+=process.argv[j].substring(1,process.argv[j].length)+process.argv[j][0];
  str+='ay ';
}
console.log(str);
