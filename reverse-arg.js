'use strict';
let str='';
for (let j = 2; j < process.argv.length; j++) {
  for (let i = process.argv[j].length-1; i >= 0 ; i--) {
    str+=process.argv[j][i];
  }
  console.log(str);
  str='';
}
