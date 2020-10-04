let arr = ["Ilya", "Kantor"]

// деструктурирующее присваивание
// записывает firstName=arr[0], surname=arr[1]
// let [firstName, surname] = arr;
let [firstName, surname] = "Ilya Kantor".split(' ');

// console.log(firstName); // Ilya
// console.log(surname);  // Kantor

var panda = {
    String: function() { return 'Panda'},
    valueOf: function() { return 128060; },
    }
var panda2 = 'Panda';
let tr = {};
let tr2 = tr;
let pigcode = 128060;
let S = new Set([1, 2, 3])
let [one, two, three] = S;

// console.log(panda == panda2);
// console.log(String(panda));
// console.log(panda2, String(panda));
// console.log(tr === tr2);
// console.log(~~panda === pigcode);
// console.log(one);
// let user = {
//     name: "John",
//     years: 30,
//     isAdmin: true
//   };
//   let {name, years: age, isAdmin = false} = user;
//   console.log(name, age, isAdmin);
// _____
//   let salaries = {
//   };
//   let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
//   

// function topSalary(salaries){
        
//           try{
//             [first] = (Object.entries(salaries).sort(( a, b ) =>  b[1] - a[1]))[0];
//           }
//            catch(e){
//                return null
//            }
//            return first;
    
//         }
      
    
//   console.log(topSalary(salaries));
//   ___Hidden methods

// var panda = {
//     valueOf: function() { return 128060; }, toString: function() { return '&#x1F43C;'; }
//     }
    // console.log(Object.keys(panda));


    var emptyObject = {}; 
    // console.log(Object.keys(emptyObject));
    // console.log(typeof emptyObject.valueOf)
    var panda = {}; 
    Object.defineProperty(panda, 'valueOf', {

        value: function() { return 128060;
        },
        writable: true, 
        enumerable: false, 
        configurable: true
    });
    Object.defineProperty(panda, 'text', {

        value: "my panda is tired",
        writable: false, 
        enumerable: false, 
        configurable: false
    });
    // Object.defineProperty(panda, 'toString', { 
        // value: function() {
    //     return '&#x1F43C;'; 
    //     },
    //     writable: true, 
    //     enumerable: false, 
    //     configurable: true
    // });
    panda.text = "bird";
    delete panda.text;
    // console.log(panda == 128060);
    // console.log(Object.keys(panda));
    // console.log(Object.getOwnPropertyDescriptor(panda, 'valueOf'));
    // console.log(panda.text);

//    _______Setter and Getter
    var tweet = {
        _likes: 16
    };
    // console.log(Object.keys(tweet))
    Object.defineProperty(tweet, 'likes', {
        // enumerable: true,
        get: function(){
            return this._likes
            
        },
        set: function(value){
            this._likes = parseInt(value)||0
        }
        

    });
    // tweet.likes = '20';
    tweet.likes = 21;
    // console.log(tweet.likes += 50);
    // console.log(tweet._likes == 50);
    // console.log(Object.getOwnPropertyDescriptor(tweet, '_likes'));
    // console.log(Object.getOwnPropertyNames(tweet));

    // //____Date
    // tweet.createdAt = Date.now();
    // new Date(tweet.createdAt);
    // console.log(Object.getOwnPropertyNames(tweet));
    // console.log(new Date());
    // console.log(tweet.createdAt);
// let now = new Date();
// console.log(now);
// let Jan01_1970 = new Date(24 * 3600 * 1000);
// console.log( Jan01_1970 );
// let timest = 24 * 3600 * 1000;
// console.log(Jan01_1970.getTime()=== timest);
// let date = new Date("2017-01-26");
// console.log(date.getTime());
// let date = new Date(1976, 3, 26, 0);
// // date.setFullYear(2018, 02, 14)
// date.setHours(date.getHours() + 3);
// console.log(date);

// let start = new Date(); 


// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = new Date();

// console.log( `Цикл отработал за ${end - start} миллисекунд` );
// let date = new Date(2012, 01, 20, 3, 12);

// date.setUTCHours(+3);
// console.log(date);

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// let d = date.getDay();

// console.info(d == 0? "ВС": d == 1? "ПН":d == 2? "ВТ":d == 3? "СР":d == 4? "ЧТ":d == 5? "ПТ":d == 6? "СБ": d = 404); 
 
// 
// let date = new Date();
// let year = date.getFullYear();
// date = date.getTime();
// let time = new Date(date)

// // date = Date.parse("2020-08-25");
// // let year = date.getFullYear();
// console.log(date, year, time);
// function getDateAgo(date, days){
//     date = new Date(date.getTime() - days * 24 * 3600000);
//     return date;
// }
// console.log(getDateAgo(new Date (), 10));
// function getLastDayOfMonth(year, month){
//    date = new Date(year, month + 1);
//    date.setDate(date.getDate() -1);
//    return date.getDate();
    
// }
// function getLastDayOfMonth(year, month){
//     date = new Date(year, month + 1, 0);
//     return date.getDate();
     
//  }
// console.log(getLastDayOfMonth(2019, 1));
// function getSecondsToday(){
//     date = new Date();
//     date.setHours(0, 0, 0);
//     // date.setDate(date.getDate() -1);
//     return 24 * 60 * 60 (new Date () - date) / 1000;
//  }
//  console.log(getSecondsToday());

function formatDate(date){
    let now = new Date();
    date = new Date(date);
    let diff = now - date;
    let zeroD, zeroM, zeroY, zeroH, zeroMi;
    date.getDate()< 9? zeroD = "0": zeroD ="";
    date.getMonth()< 9? zeroM = "0": zeroM ="";
    date.getYear() % 100 < 9? zeroY = "0": zeroY ="";
    date.getHours()< 9? zeroH = "0": zeroH ="";
    date.getMinutes()< 9? zeroMi = "0": zeroMi ="";

    date.get 
    return diff < 0? `It's future`:diff < 1000? "right now": diff < 60000? `${Math.round(diff / 1000)} sec ago`:diff < 3600000? `${Math.round(diff / 60000)} min ago`: `${zeroD}${date.getDate()}.${zeroM}${date.getMonth() + 1}.${zeroY}${date.getFullYear() % 1000} ${zeroH}${date.getHours()}:${zeroMi}${date.getMinutes()}`;
    // console.log(diff);
 }
 console.log(formatDate("2020-09-29 1:50:00"));
 console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));