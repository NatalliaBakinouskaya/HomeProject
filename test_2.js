// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
//   };
  
//   // цикличные ссылки
//   room.occupiedBy = meetup;
//   meetup.self = meetup;
  
//   console.info(JSON.stringify(meetup, function replacer(key, value) {
//     // console.log(`${key}: ${value}`);
//     return (key != "" && value == meetup)? undefined: value;
    
//   }));

// ______________

let obj = {
    "0": 1,
    // 0: 2
   };
   
   console.log( obj["0"] );
