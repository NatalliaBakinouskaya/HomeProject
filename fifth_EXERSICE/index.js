/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    let Obj = []
    hashtags.map(function(element){
       Obj[element.toLowerCase()] = true;
    })
    return Object.keys(Obj).join(', ');

};
// console.log(module.exports(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']))