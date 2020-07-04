// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//     let x = o = 0;
    
//     for(letter of str){
//         letter == 'X'|| letter == 'x'? x++: letter == 'O'|| letter == 'o'? o++: o = o;
//     }
//     return x - o == 0;
// }
// console.log(XO('xoXOoX '));

function XO(str) {
    let x = str.match(/x/gi);
    console.log(x.length);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
  }

console.log(XO('xoXOoX '));