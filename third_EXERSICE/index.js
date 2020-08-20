/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
   hours = Math.floor((hours + (minutes + interval) / 60)% 24);
   hours < 10? hours = '0' + hours: '' + hours;
   minutes = ((minutes + interval) % 60);
   minutes < 10? minutes = ':0' + minutes: minutes = ':' + minutes;

   return hours + minutes 

};
console.log(module.exports(23, 59, 31));