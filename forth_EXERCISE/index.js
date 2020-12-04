/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
   return  tweet.split(' ').filter(element => element[0] == '#').map(element => element.split('').slice(1).join(''))
    
}        


console.log(module.exports(''));