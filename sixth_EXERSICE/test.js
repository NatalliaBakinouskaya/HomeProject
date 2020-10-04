// name = name[0];
// function makeWorker() {
//     let name = "Pete";
//     name = name[0];
  
//     return function() {
//         name = name + '*'
//       console.log(name);
//     };
//   }
  
//   let name = "John";
  
//   let work = makeWorker();

  
//   // call it
//   work(PETER); 
//   work();
//   // makeWorker();
//   // makeWorker();

  // function makeCounter(n) {
  //   let number = 4;
  //   number = n;
  //   let count = 0;
  //   console.log(count,number);
  //   return function() {
  //     console.log(number);
  //     return count += n; // есть доступ к внешней переменной "count"
  //   };
  // }
  
  // let counter = makeCounter();
  
  // console.log( counter(3) ); // 0
  // console.log( counter() ); // 1
  // console.log( counter() ); // 2
  
  //   function ADD(x) {
     
     
  //     return function () {
       
  //       console.log(x + 1);
  //     };
  //   };
  //   let add2 = ADD(2);
  //   add2(1);

  // console.log(add(2));  // 7
  // console.log(add10(2)); // 12
  var phoneBook = {};


/**

* @param {String} command

* @returns {*} - результат зависит от команды

*/

// module.exports = function (command) {

function FOO(command) {
let slovo = command.split(' ')[0];


switch(slovo){

case 'ADD':

let name = command.split(' ')[1],

phones = command.split(' ')[2];

return add(name,phones);

case 'SHOW':

return show();

case 'REMOVE_PHONE':

let nameRemove = command.split(' ')[1];

return remove(nameRemove);

}
// console.log(phoneBook);
};


function add(name, phones) {

let arrayPhone = phones.split(','),

numbersPhone;


if (phoneBook.hasOwnProperty(name)) {

numbersPhone = phoneBook[name].concat(arrayPhone);

phoneBook[name] = numbersPhone;

} else {

phoneBook[name] = arrayPhone;

}
return phoneBook;
}


// function remove(nameRemove) {


// for (let key in phoneBook) {

// if (phoneBook[key].includes(nameRemove)) {

// if (phoneBook[key].length > 1) {

// phoneBook[key].splice((phoneBook[key].indexOf(nameRemove)),1);

// } else {

// delete phoneBook[key];

// }

// return true;


// }

// }

// return false;

// }


// function show() {

// let stringArray = [];


// let keys = Object.keys(phoneBook);

// keys.sort();


// if (keys.length > 0) {

// for (let i = 0; i < keys.length; i++) {

// resultString = keys[i] + ': ' + phoneBook[keys[i]].join(', ');

// stringArray.push(resultString);

// }

// return stringArray;

// }

// }
console.log(FOO('ADD Adam 555-10-03'));
// console.log(module.exports('SHOW'));
console.log(FOO('ADD Ivan 555-10-01,555-10-03'));
// console.log(module.exports('SHOW'));