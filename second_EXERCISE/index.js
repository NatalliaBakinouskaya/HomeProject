/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    return hours >= 0 && hours < 23 && minutes >= 0 && minutes < 61? true: false;

};
// console.log(module.exports(2,10));