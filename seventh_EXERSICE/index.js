/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    
    function createObject() {
        return {
            value: date,
            calculate: function (number, text, operator) {
                let temp = new Date(this.value);
          
                if (text.match('light-year') || number < 0){
                    throw new TypeError('invalid date');
                }
                text.match('year')&& !text.match('light-year')? temp.setFullYear(temp.getFullYear() + number * operator): 
                text.match('month')? temp.setMonth(temp.getMonth() + operator * number ):
                text.match('day')? temp.setDate(temp.getDate() + number * operator):
                text.match('hour')? temp.setHours(temp.getHours() + number * operator):
                text.match('minute')? temp.setMinutes(temp.getMinutes() + number * operator): this.value = this.value;
                temp.setMonth(temp.getMonth() + 1);
           
                temp = ([temp.getFullYear(), '-', ('0' + temp.getMonth()).slice(-2), '-', ('0' + temp.getDate()).slice(-2), ' ', ('0' + temp.getHours()).slice(-2), ':',  ('0' + temp.getMinutes()).slice(-2)]).join('');
                this.value = temp;
            
                return this;
            },
            add: function (number, text) {
               let operator = 1;
               return this.calculate(number, text, operator);
            },
            substract: function (number, text) {
               let operator = - 1;
               return this.calculate(number, text, operator);
            }
        }
    }
    return createObject();
};
// console.log(module.exports('2017-05-16 13:45'))

// var time = module.exports('2017-05-16 13:45');

//    time
//     .add(24, 'hours')
//     .substract(1, 'month')
//     .add(3, 'days')
//     .add(15, 'minutes');
// console.log(time);
