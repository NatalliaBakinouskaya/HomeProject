//test.js
// this.console.log(process.version);
// // console.log(a);
// this.days = 366;
// this.IsLeapYear = true;
// console.info(module.exports.days);
// ---does not work---
// module.exports.days = 366;
// function getSelf(){
//     return this;
// }
// console.log(getSelf());
// _____________
// let a ={
//     age: 45,
//     getAge: function(){
//         return this.age;
//     }
// };
// let b ={
//     age: 25
// };
// let c = Object.assign({}, a);
// c.age = 3;
// console.log(c.getAge());
// console.info(a.getAge.call(b))
// ___________
// console.log(Math.min(1,2,3));
// console.log(Math.min([1,2,3]));
// console.log(Math.min.apply(Math,[1,2,3]));
// console.log(Math.min.apply(null,[1,2,3]));

// ____Callback_____

// name = 1;
// // ____bind____
// let person = { 
// name: 'Sergey',
// items: ['keys', 'phone', 'banana'],
// showItems: function () { 
//     // person.name = 2;
//     // let _this = this
//     this.items.map(function (item) {
//     // person.name = 3;
//         console.log(this.name + ' has ' + item); 
//         }. bind(this));
//     }
// };
// console.info(person.showItems());
// // ________

// a = Math.pow(2,2);
// // console.log(a);
// let powTwo = Math.pow.bind(Math, 2);
// console.log(powTwo(2));

// // ___________
// name = 'Alan';
// var person = { name: 'Sergey',
// showName: function () { 
//     var evil = eval;
// return evil('this.name'); }
// }
// console.log(person.showName());
// // _________

function ReturnSelf(){
    // 'use strict';
    return this;
}
console.info(ReturnSelf());

// _______

