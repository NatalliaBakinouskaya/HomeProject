/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

function query() {
    let filtered = [].slice.call(arguments[0]);
    let operations = [].slice.call(arguments);
    operations.shift();
    operations.sort();
    
    for(let i = 0; i < operations.length; i++){
        filtered = operations[i](filtered);
    }
    return filtered;
}

/**
 * @params {String[]}
 */
function select() {
    let tempArr = [].slice.call(arguments);
    return function select(collection){
        let filtered = [];
        filtered = collection.map(function(element){
            element = Object.entries(element);
            element = element.filter(function([key,value]){
                if(tempArr.includes(key)){
                    return [key,value];
                }
            });
            return element = Object.fromEntries(element);
        });
    return filtered;
    }
}    

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
    
function filterIn(property, values) {
    return function filterIn (collection) {
        let filtered = [];
        return filtered = collection.filter(function(element){
            for(i = 0; i < values.length; i++){
                if (element[property] == values[i]){
                    return element;
                }
            }
        });
    }
}     
this.query = query;
this.select = select;
this.filterIn = filterIn;
// module.exports = {
//     query: query,
//     select: select,
//     filterIn: filterIn
// };


// console.log(module.exports.query(friends, module.exports.select('name', 'gender', 'email'), module.exports.filterIn('favoriteFruit', ['Яблоко', '!Картофель', '!Банан'])));
