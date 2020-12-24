
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

function Student(name){
  this.name = name;
}

function Person(){
  this.type = 'human';
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.sleep = function(){
  return 'wzzzz';
}
Student.prototype.constructor = Student;
let mike = new Student('Mike');

// console.log(Student.prototype.isPrototypeOf(mike))
// console.log(Person.prototype.isPrototypeOf(mike))
// console.log(Object.prototype.isPrototypeOf(mike))


console.info(mike instanceof Student);
console.info(mike instanceof Person);
console.info(mike instanceof Object);