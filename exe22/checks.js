var assert = require('assert');
var parallel = require('./index');

// Пример успешного выполнения операции
parallel(
    [
        // Операция, которая выполняется 500ms
        function (next) {
            setTimeout(function () {
                next(null, '500ms');
            }, 500);
        },

        // Операция, которая выполняется 50ms
        function (next) {
            setTimeout(function () {
                next(null, '50ms');
            }, 50);
        },

        // Операция, которая выполняется 200ms
        function (next) {
            setTimeout(function () {
                next(null, '200ms');
            }, 200);
        }
    ],

    // Обработка результата выполнения операций (результирующий callback)
    function (errors, result) {
        assert.deepStrictEqual(errors, null);
        assert.deepStrictEqual(result, ['500ms', '50ms', '200ms']);

        completeTest();
    }
);

// Пример, когда одна из операций завершается ошибкой
parallel(
    [
        // Операция, которая выполняется 500ms
        function (next) {
            setTimeout(function () {
                next(null, '500ms');
            }, 500);
        },

        // Операция, которая завершается с ошибкой через 10ms
        function (next) {
            setTimeout(function () {
                next('ERROR');
            }, 10);
        },

        // Операция, которая выполняется 200ms
        function (next) {
            setTimeout(function () {
                next(null, '200ms');
            }, 200);
        }
    ],
    function (error, results) {
        assert.deepStrictEqual(error, 'ERROR');
        assert.strictEqual(results, null);

        completeTest();
    }
);

// Вспомогательная функция для тестов
var tests = 2;
function completeTest() {
    tests--;
    if (tests === 0) {
        // console.log(tests)
        console.info('OK!');
    }

    if (tests < 0) {
        // console.log(tests)
        throw new Error('Одна из результирующих callback-функций вызывается больше одного раза');
    }
}
// console.log(tests)