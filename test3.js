// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(30000..toLocaleString('de-DE'));
// console.log((parseInt('vfgf 38 попугаев') + parseInt(10)));
// console.info(Number.isNaN(Number('hello world')));
// console.info(isNaN(Number(' f1')));
// console.info(isNaN(parseInt('1hello world')));
function UserException(message) {
    this.message = message;
    this.name = "Исключение, определенное пользователем";
 }
 function getMonthName(mo) {
    mo = mo-1; // Нужно скорректировать номер месяца согласно индексам массива (1=Jan, 12=Dec)
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
       "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (months[mo] !== undefined) {
       return months[mo];
    } else {
       throw new UserException("Неверно указан номер месяца");
    }
 }
 
 try {
    // statements to try
    // var myMonth = 15; // 15 находится вне границ массива, что приведет к исключению
    // var monthName = getMonthName(myMonth);
 } catch (e) {
    monthName = "неизвестен";
    // logMyErrors(e.message, e.name); // передаем исключение в обработчик ошибок
 }
 console.log(getMonthName(8));