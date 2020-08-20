/**
 * @param {Number} a Первое слагаемое
 * @param {Number} b Второе слагаемое
 * @returns {Number}
 */
module.exports = function (a, b) {
    if(!isNaN(Number(a) + Number(b))){
        return Number(a) + Number(b);
    }
   
   else return NaN
};
