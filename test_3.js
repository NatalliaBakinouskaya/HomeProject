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
console.log(1)   

setTimeout(()=> {
  console.log(2)
  new Promise(() => {
    console.log(11)
  })
})

queueMicrotask(() => {
  console.log(7)
})

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(10)
  })
  resolve()
  console.log(4)
})

fn()
console.log(3)

promise.then(() => {
  console.log(12)
})
queueMicrotask(() => {
    console.log(7)
  })
  

function fn() {
  console.log(6)
}