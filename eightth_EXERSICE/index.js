/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

var collection = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];
let filtered = [];
function query(collection) {
    
}

/**
 * @params {String[]}
 */
function select() {
   let tempArr = [].slice.call(arguments);
//    console.log('TEMP', tempArr, filtered);
   filtered = filtered.map(function(element,arr){
       element = Object.entries(element);
       element = element.filter(function([key,value], ar){
           if(tempArr.includes(key)){
           
               return [key,value];
           }
       });
       return element = Object.fromEntries(element);
    
   });
   
   return filtered;
}    

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return filtered = collection.filter(function(element){
        for(i = 0; i < values.length; i++){
            if (element[property] == values[i]){
                return element;
            }
        }
    });
}      
lib = {
    query: query,
    select: select,
    filterIn: filterIn
};
// module.exports = {
//     query: query,
//     select: select,
//     filterIn: filterIn
// };
// console.log(filtered);
filterIn('favoriteFruit', ['Яблоко', 'wКартофель', '!5Банан']);

// console.log(filtered[0],filtered[1]);
select('name', 'gender', 'email')
// console.log(select('name', 'gender', 'email'));