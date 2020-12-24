
// // let person = {
// //     getName: function(){
// //         return this.name
// //     }
// // }
// // let student = {
// //     name: 'Billy',
// //     __proto__: person,
// //     toString: function(){
// //         return this.name;
// //     }

// // };

// // student.__proto__ = person;


// // for(let key in student){
// //     console.info(key);
// // }

// // for([key,value] of Object.entries(student)){
// //     console.info(key)
// // }
// // console.info(student.getName());
// // console.log(student.hasOwnProperty('getName'))
// // console.log(student)
// // console.log(student.toString());

// // let person = {
// //     name: 'Oliver',
// //     getName: function(){
// //         return this.name
// //     }
// // }

// // let student = Object.create(person);
// // student.name = 'Billy';

// // console.log(student.getName());


// let person = {
//     name: 'Oliver',
//     getName: function(){
//         return this.name
//     }
// }
// let student = {};
// student.name = 'Billy';

// Object.setPrototypeOf(student, person)

// person.toString = function(){
//    return 'My name is ' + this.name;
// }
// // console.log(student.getName());
// // for(let key in student){
// //         console.info(key);
// //     }

// // console.log(Object.getPrototypeOf(Object.prototype));
// // console.log(student.toString()); 
// Object.defineProperty(student,'gender', {
//     writable: false,
//     value: 'male'
// }
// )
// console.log(student.gender);
// let sophomore = {};

// Object.setPrototypeOf(sophomore, student)
// sophomore.gender = 'female';
// // console.log(sophomore.gender);

var student = { __proto__: person
};
var person = {
    type: 'human'
};
Object.defineProperty(person,'age', {
set: function(age) { this._age = parseInt(age); }, get: function() { return this._age; }
});

student.age = '20 лет'; 
console.info(student.age); // 20; student.hasOwnProperty(age); // false;