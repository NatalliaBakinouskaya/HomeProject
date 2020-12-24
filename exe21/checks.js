var assert = require('assert');

var Collection = require('./index');

// Создаем коллекцию чисел
var numbers = new Collection();
numbers.append(10);
numbers.append(20);

assert.strictEqual(numbers.count(), 2);
assert.deepStrictEqual(numbers.values(), [10, 20]);

// Создаем коллекцию букв
var letters = Collection.from(['a', 'b', 'c']);
letters.append('d');

assert.strictEqual(letters.count(), 4);
assert.deepStrictEqual(letters.values(), ['a', 'b', 'c', 'd']);

// Смешиваем обе коллекции
var items = new Collection();
items.append(numbers);
items.append(letters);

assert.strictEqual(items.count(), 6);
assert.deepStrictEqual(items.values(), [10, 20, 'a', 'b', 'c', 'd']);

// Проверяем получение элемента
assert.strictEqual(items.at(0), null);
assert.strictEqual(items.at(1), 10);
assert.strictEqual(items.at(3), 'a');
assert.strictEqual(items.at(6), 'd');

// Проверяем удаление
assert.strictEqual(items.removeAt(0), false);
assert.strictEqual(items.removeAt(2), true);
assert.strictEqual(items.removeAt(5), true);

assert.deepStrictEqual(items.values(), [10, 'a', 'b', 'c']);

console.info('OK!');
