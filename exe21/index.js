module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection(something) {
  this.arr = something || [];
}


// Методы коллекции
Collection.prototype.values = function () {
    return this.arr;
};
// другие методы
Collection.prototype.count = function() {
    return this.arr.length;
};
Collection.prototype.at = function(number) {
    return this.arr[number - 1] == undefined? null: this.arr[number - 1];
};
Collection.prototype.append = function(something) {
    something instanceof Collection? this.arr = this.arr.concat(something.arr): Array.isArray(something)  == true? this.arr = this.arr.concat(something): this.arr.push(something);
    return this;
};
Collection.prototype.removeAt = function(position) {
    if(position > 0 && position <= this.arr.length){
          this.arr.splice(position -1, 1);
          return true;
    } 
    else
          return false;
};
Collection.prototype.constructor = Collection;

/**
 * Создание коллекции из массива значений
 */
// Collection.from = function (arr) {
//    return new Collection(arr);

// };
Collection.from = function (arr) {
    return Object.create(Collection.prototype, {
        arr: {value: arr, writable: true, enumerable: true, }
    })
 
 };