// console.log(1)
// setTimeout(() =>{
//     quequeMicrotask(() =>{
//         console.log(2);
//     })
//     console.log(3);
// });

// Promise.resolve().then(() => console.log(4))

// quequeMicrotask(() =>{
//     console.log(5);
//     quequeMicrotask(() => {
//         console.log(6);
//     });
// });

// console.log(7);

// 1743256
// __________
// console.log(1)   

// setTimeout(()=> {
//   console.log(2)
//   new Promise(() => {
//     console.log(11)
//   })
// })

// queueMicrotask(() => {
//   console.log(7)
// })

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(10)
//   })
//   resolve()
//   console.log(4)
// })

// fn()
// console.log(3)

// promise.then(() => {
//   console.log(12)
// })
// queueMicrotask(() => {
//     console.log(7)
//   })
  

// function fn() {
//   console.log(6)
// }

// ___________
// let a = {};

// console.log((a !== null) && (a.constructor == Object))

// _________

// (function a(){
// a = b = 3;
// })()
// console.log(a, (typeof a !== undefined))

// // ______
function work(a, b) {
  // this.calls = [];
  console.log(a + b ); // произвольная функция или метод
}
function spy(func){
  
  function wrapper (...args){
      wrapper.calls.push(args)
      return func.apply(this, arguments)
    }
    wrapper.calls = [];
  return wrapper;
}
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
console.log(work.calls)
for (let sargs of work.calls) {
  console.log( 'call:' + sargs.join() ); // "call:1,2", "call:4,5"
}