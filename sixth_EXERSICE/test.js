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
  
    function ADD(x) {
     
     
      return function () {
       
        console.log(x + 1);
      };
    };
    let add2 = ADD(2);
    add2(1);

  console.log(add(2));  // 7
  // console.log(add10(2)); // 12