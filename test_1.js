
// // // let person = {
// // //     getName: function(){
// // //         return this.name
// // //     }
// // // }
// // // let student = {
// // //     name: 'Billy',
// // //     __proto__: person,
// // //     toString: function(){
// // //         return this.name;
// // //     }

// // // };

// // // student.__proto__ = person;


// // // for(let key in student){
// // //     console.info(key);
// // // }

// // // for([key,value] of Object.entries(student)){
// // //     console.info(key)
// // // }
// // // console.info(student.getName());
// // // console.log(student.hasOwnProperty('getName'))
// // // console.log(student)
// // // console.log(student.toString());

// // // let person = {
// // //     name: 'Oliver',
// // //     getName: function(){
// // //         return this.name
// // //     }
// // // }

// // // let student = Object.create(person);
// // // student.name = 'Billy';

// // // console.log(student.getName());


// // let person = {
// //     name: 'Oliver',
// //     getName: function(){
// //         return this.name
// //     }
// // }
// // let student = {};
// // student.name = 'Billy';

// // Object.setPrototypeOf(student, person)

// // person.toString = function(){
// //    return 'My name is ' + this.name;
// // }
// // // console.log(student.getName());
// // // for(let key in student){
// // //         console.info(key);
// // //     }

// // // console.log(Object.getPrototypeOf(Object.prototype));
// // // console.log(student.toString()); 
// // Object.defineProperty(student,'gender', {
// //     writable: false,
// //     value: 'male'
// // }
// // )
// // console.log(student.gender);
// // let sophomore = {};

// // Object.setPrototypeOf(sophomore, student)
// // sophomore.gender = 'female';
// // // console.log(sophomore.gender);
// var person = {
//     type: 'human'
// };
// var student = {
// };


// Object.defineProperty(person,'age', {
// set: function() {
//     this._age = '40'; 
// }, 
// get: function() { 
//     return this._age; 
// }
// });
// // student.__proto__ = person;
// Object.setPrototypeOf(student,person)
// // // student.age = 20; 
// // person.age = 40;

// // console.info(person.age, student.age); // 20; student.hasOwnProperty(age); // false;





// let kitty = {};
// let cat = {};

// Object.defineProperty(cat, 'color', {
//     set: function () {
//       this._color = 'Ginger';
//     },
//     get: function () {
//       return this._color;
//     }
// });
// // Object.setPrototypeOf(kitty, cat);

// cat.color = 'Grey';
// kitty.color = 'white';
// kitty.__proto__ = cat;
// // person.name = 'stefa';
// // console.log(Object.getPrototypeOf(kitty));
// // for(let key in kitty){
// //   console.info(key);
// // }
// // for(let[key, value] of Object.entries(student)){
// //   console.info(key);
// // }

// var obj = function () {};;
// // console.log(Function.prototype == Object.getPrototypeOf(obj));

// // var person = { type: 'person' };
// // var danny = {};

// // danny.type = 'danny';
// // Object.setPrototypeOf(danny, person);

// // console.log(person.type);
// // console.log(danny.type);
// Object.prototype.gen = 'Billy';
// var student = {
//   name: 'Ivan',
//   getName: function () { return this.name; }
// };

// Object.defineProperty(student, 'type', {
//   enumerable: false,
//   value: 'student'
// });

// // for (var key in student) {
// //   console.log(key);
// // console.log(Object.prototype == Object.getPrototypeOf(student));

// let student = {
//   name: 'Nick'
// };
// Object.defineProperty(student, 'age', {
//   set: function (age){
//     this._age = parseInt(age);
//   },
//   get: function(){
//     return this._age;
//   }

// });

// console.log(student.age);

// let lecturer = {
//   name: 'Mike',
//   type: 'person'
// };
// Object.defineProperty(lecturer, 'age', {
//   set: function (age){
//     this._age = 90;
//   },

//   get: function(){
//     return this._age;
//   }

// });
// lecturer.age = 40;
// // student.age = 20;
// console.log(student.age, lecturer.age);
// Object.setPrototypeOf(student, lecturer);
// console.log(student.age, lecturer.age);

// var sleep = function () {};
// console.log(Function.prototype == Object.getPrototypeOf(sleep))

// function Student(nawme){
//   this.nawme = nawme;
// }
// Object.setPrototypeOf(Student, {
//   that: function(){
//    return 'woooo!';
//    }
//  });
// Student.prototype = {
//   me: function(){
//     return 'It\'s me';
//   }
// }
// Student.prototype.sleep = function () {
//       return 'It\'s you';
//     };
// let billie = new Student('Billie');
// console.log(billie.sleep());


function Person(){
  this.type = 'human';
}
// function Student(name){
//   this.name = name;
// }


// Student.prototype = Object.create(Person.prototype);
// Student.prototype.sleep = function(){
//   return 'wzzzz';
// }
// Student.prototype.constructor = Student;
// let mike = new Student('Mike');

// console.log(Student.prototype.isPrototypeOf(mike))
// console.log(Person.prototype.isPrototypeOf(mike))
// console.log(Object.prototype.isPrototypeOf(mike))


// console.info(mike instanceof Student);
// console.info(mike instanceof Person);
// console.info(mike instanceof Object);
// function Person(name){
//   this.type = 'human';
//   this.name = name;
// }

// function Student(name){
//   Person.call(this, name);
// }

// Student.prototype.ikk = function(){
//   return 'gerai';
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.ikk = function(){
//   return 'gerai';
// }
// Student.prototype.gerai = 'gut'
// Student.prototype.constructor = Student;
// let mike = new Student('Mike');
// console.log(Student.prototype.isPrototypeOf(mike))
// console.log(Person.prototype.isPrototypeOf(mike))
// console.log(Object.prototype.isPrototypeOf(mike))
// console.log(mike.name);

// function Person(name){
//   this.type = 'human';
//   this.name = name;
// }
// Person.prototype.getName = function(){
//   return this.name;
// }
// function Student(name){
// Person.call(this, name);
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.getName = function(){
//   return 'Student ' + Person.prototype.getName.call(this);
// }
// let billie = new Student('Billie');

// console.log(billie.getName())

// let Personproto = {
//   name: null,
//   getName: function(){
//     return this.name;
//   }
// }
// let Studentproto = Object.create(Personproto);
// Studentproto.sleep = function(){
//   return 'azz';
// };
// let Studentproto = Object.create(Personproto, {
//   sleep: {
//     value: function(){return 'aaaaaz'}
//   }
// });

// Studentproto.create = function(name){
//   return Object.create(Studentproto,{
//     name:{value: name}
//   })
// }
// // let billie = Object.create(Studentproto);
// // billie.name = 'Billie';
// let billie = Studentproto.create('Billie');
// console.log(billie.name);
// class Student {
//   constructor(name) {
//     this.name = name;
//     this.type = 'folk';
//   };
//   sleep(){
//     return 'zzzz'
//   }
// }
// Student.prototype = Object.create(Person.prototype);
// let be = new Student('be');
// // console.log(be instanceof Person);
// // __________________________
// var jane = {
//   name: 'Jane',
//   sayHelloTo: function (otherName) {
//       'use strict';
//       console.log(this.name+' says hello to '+otherName);
//   }
// };
// let lucy = {};
// lucy.name = 'Lucy';
// console.log(delete lucy.name);
// console.log(jane.sayHelloTo.call(lucy, 'Tarzan'));
// console.log(jane.sayHelloTo.apply(lucy, ['Tarzan']));
// console.log(jane.sayHelloTo.bind(lucy)('Tarzan'));


// console.log(Math.max(...[13, 7, 30]))
// console.log(Math.max.bind.apply(null, [13, 7, 30]))

// var counter = {
//   count: 0,
//   inc: function () {
//       this.count++;
//   }
// }

// function callIt(callback) {
//   callback();
// }
// callIt(counter.inc.bind(counter));
// callIt(counter.inc.bind(counter));
// console.log(counter.count);
// let Parent = {
//   name: 'some name',
//   status: 'married',
// }

// let Husband = Object.create(Parent);
// console.log(Husband.name);
// Husband.name = 'Mike';
// // delete Husband.name;
// delete Parent(Husband, 'name').name;
// console.log(Husband.name);

// var obj = {
//   get foo() {
//       return 'getter';
//   },
//   set foo(value) {
//       console.log('setter: '+value);
//   }
// };
// obj.foo = 'fgfgf';
// console.log(obj.foo)

// var obj = Object.create(
//   Object.prototype, {  // object with property descriptors
//       foo: {  // property descriptor
//           get: function () {
//               return 'getter';
//           },
//           set: function (value) {
//               console.log('setter: '+value);
//           }
//       }
//   }
// );
// obj.foo = 'setter';
// console.log(obj.foo)
// var a = Object.create(obj);
// console.log(a.foo);
// console.log(Object.getOwnPropertyDescriptor(a, 'foo'))
// var obj = Object.defineProperty({}, 'foo', {
//   value: 123,
//   enumerable: true
//   // writable: false (default value)
//   // configurable: false (default value)
// });
// let obj = {};
// Object.defineProperty(obj, 'foo', {
//   value: 123,
//   enumerable: true,
//   writable: true
//   // writable: false
//   // configurable: false (default value)
// });
// let b =  Object.create(obj);


// Object.defineProperty(obj, 'bar', {
//   value: 456,
//   enumerable: true,
//   writable: false
// });
// b.foo = 'onetwothree';
// // b.bar = 'four';
// Object.defineProperty(obj, 'foo',{
//   value: '1-2-3'
// })
// console.info(b.bar, b.foo)
// for(key in b){
//   console.log(key);
// }

// console.log(Object.keys(['a', 3]))
// function C() {
//   return this;
// };
// var o = new C();
// console.log(o.constructor == C);
// let t = o.constructor.name;
// console.info(t)

// function P(name){
//   this.name = name || 'Natallia';
// }
// P.prototype.say = function(){
//   return 'Hello, ' + this.name;
// }

// function C(){

// }
// C.prototype = new P();
// let a = new C('Seva');
// a.name = 'Elis';
// // delete a.name;
// function Sec(){
//   P.call(this);
// }
// let s = new Sec('Ivan');
// s.name = 'Ivan';

// function D(){
//   P.apply(this, arguments)
// }
// D.prototype = new P;
// let d = new D('Danny')
// console.log(a.hasOwnProperty('name'), s.hasOwnProperty('name'));
// console.log(d.say());

// function F(){

// }
// F.prototype = P.prototype;
// F.prototype.bss = function(){
//   return 'BSS, ' + this.name;
// }
// F.prototype.name = "FFF";
// p = new P();

// console.info(p.name);


// class Student { 
//   constructor(name) {
//     this.name = name; 
//   }
//   getName() {
//     return this.name;
//   } 
// }
// let ss = new Student('S');
// console.log(Student.prototype);

// function PP(name){
//   this.name = name || 'Natallia';
// }
// PP.prototype.say = function(){
//   return 'Hello, ' + this.name;
// }
// let ppp = Object.create(PP.prototype);
// console.log(ppp)

// function A(){
//   throw new Error ('Here I am');
// }
// function B(){
//  console.log('I\'m so happy' || A());
// }
// function C(){
//  return B();
// }
// function G(text){
//   console.log(text);
//  }
// B();
// setTimeout(C,1000);
// setInterval(C,1000);
// G('bbb');
// setTimeout(G, 8000, 'ssss');
// // setTimeout(G, 4000, 'fff');
// let id = setInterval(G, 10, 'kaputt');

// function D(){
//   clearInterval(id);
// }
// setTimeout(D, 1000);

// var fs = require('fs');
// var fileName = '/Users/nokatami/Git/HomeProject' + '/data.json';
// var fileName = __dirname + '/data.json';
// console.time();
// var data = fs.readFileSync(fileName, 'utf-8');
// var data = fs.readFile(fileName, 'utf-8', function(err, text){
//   console.log(text);
//   return data;

// });

// setTimeout(console.log, 1000, 'data', data)

// console.timeEnd();
// console.log(data); // readFileSync: 3ms


// var fs = require('fs');
// function d(){
//   fs.readFile('data.json', 'utf-8',function (err, data) { 
//     if (err) {
//       console.error(err.stack); 
//     } 
//     else {
//     console.log(data); 
//     }
//   });
// }
// d();
// let promise = new Promise(function(resolve, reject) {
//   resolve(3);
//   // setTimeout(() => reject(new Error("done")), 1000);
// });
// // promise.then(
// //   result => console.log(result),
// //   error => console.log(error)
// // );
// promise.then(console.log);

// new Promise((resolve, reject) =>{
//   setTimeout(() => resolve('concussion'), 1000);
// })
// .finally(console.info('finished'))
// .then(console.log);

// function delay(ms) {
//   return new Promise ((resolve, reject) =>{
//     setTimeout(() => resolve(), ms);
//   })
// }

// delay(3000).then(() => console.log('выполнилось через 3 секунды'));

// let word = 'natasha & elis'
// function Word(){
//   return new Promise(function(resolve){
//     // console.log(arg[0])
//     setTimeout(resolve, arguments[0]);
//   })
// }
// // console.log(...word);

// Word(2000, word).then(console.log(...word));
// let global = this;
// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     name = name + '!';
//     console.log(name);
//   };
// }

// name = "John";
// console.log(global.name);

// // create a function
// let work = makeWorker();
// let joy = makeWorker();


// // call it
// work();
// joy();
// joy();
// joy();
// joy();
// work()
// ------------

// new Promise((resolve) =>{
//   setTimeout(() =>{
//     console.log('started...')
//     let a = {
//       server: 1,
//       port: 2,
//       response: 6
//     }
//     resolve(a)
//   },2000)
  
// })
// .then((aa) => {
//   // return new Promise((resolve) => {
//   //   setTimeout(() => {
//   //     aa.status = 0;
//   //     console.info('modified')
//   //     resolve(aa)
      
//   //   },2000)
  
//   // })
//   // setTimeout(() => {
//   //   aa.status = 100;
//   //   console.log('modified')
//   // })
// })
// .then(aaa => {
//   console.log(aaa);
//   console.log('resolved')
// })
// ______________

// i = 235;
// if(true){
//   var i;
  
// }
// i = 234;
// console.log(globalThis.i);

// ____________________

// function a(aa){
//   let sum = aa;
//   function b(bb){
//     sum += bb;
//     b.toString = () => sum;
//     return b;
//   }
  
  
//   return b;
// }

// console.log(a(4)(2)(10));

// _________________

// let printNumbers = function(from, to){
//   let i = from;
  
//   setTimeout(function run(){
//     console.log(i);
//       if(i <= to){
//         setTimeout(run, 1000)
//       }; 
//       i++;
      
//       });
// }
// console.info(printNumbers(1,10))

// ______________
// let printNumbers = function(from, to){
//   // let i = from;
  
//   setTimeout(function run(){
    
//       for(i = from; i <= to; i++){

//         setTimeout(console.log, 1000, i)
//       }; 
//       // i++; 
      
//       });
// }
// console.info(printNumbers(1,10))

// ____________
var fs = require('fs');
let go = function() {console.log("GO!")}
async function f1(){
 await fs.readFile('/Users/nokatami/Git/HomeProject' + '/data.json', 'utf-8', function (error, text) {
    console.log(text);
  });
  go();
 }
function f2(){
  fs.readFile('/Users/nokatami/Git/HomeProject' + '/data2.json', 'utf-8', function (error, text) {
    console.log(text);
  })
  go();
 }
 function f3(){
 fs.readFile('/Users/nokatami/Git/HomeProject' + '/data3.json', 'utf-8', function (error, text) {
     console.log(text);
   })
   go();
 }

async function run(){
  await f1();
  await f2();
  await f3();
  console.log('Finished')
}
// async function run(){
//   f1();
//   f2();
//   f3();
//   console.log('Finished')
// }
run();

// console.log(f1());