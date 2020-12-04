/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    function createObject() {
        return {
           value: date,
           
           add: function (number, text) {
            let temp = new Date(this.value);
            
            //    try{
                if (text.match('light-year') || number < 0){
                    throw new TypeError('invalid date');
                   }
            //    }
            //    catch(e){

            // }
             
            text.match('year')&& !text.match('light-year')? temp.setFullYear(temp.getFullYear() + number): 
            text.match('month')? temp.setMonth(temp.getMonth() + number):
            text.match('day')? temp.setDate(temp.getDate() + number):
            text.match('hour')? temp.setHours(temp.getHours() + number):
            text.match('minute')? temp.setMinutes(temp.getMinutes() + number): this.value = this.value;
            temp.setMonth(temp.getMonth() + 1);
            temp = ([temp.getFullYear(), '-', ('0' + temp.getMonth()).slice(-2), '-', ('0' + temp.getDate()).slice(-2), ' ', ('0' + temp.getHours()).slice(-2), ':',  ('0' + temp.getMinutes()).slice(-2)]).join('');
            this.value = temp;
            
            return this;
           },

           substract: function (number, text) {
            let temp = new Date(this.value);
            // try{
             if (text.match('light-year') || number < 0){
                 throw new TypeError('invalid date');
                }
        //     }
        //     catch(e){

        //  }
           
            text.match('year')&& !text.match('light-year')?temp.setFullYear(temp.getFullYear() - number): 
            text.match('month')? temp.setMonth(temp.getMonth() - number):
            text.match('day')? temp.setDate(temp.getDate() - number):
            text.match('hour')? temp.setHours(temp.getHours() - number):
            text.match('minute')? temp.setMinutes(temp.getminutes() - number): this.value = this.value;
            temp.setMonth(temp.getMonth() + 1);
            temp = ([temp.getFullYear(), '-', ('0' + temp.getMonth()).slice(-2), '-', ('0' + temp.getDate()).slice(-2), ' ', ('0' + temp.getHours()).slice(-2), ':',  ('0' + temp.getMinutes()).slice(-2)]).join('');
            this.value = temp;
            
            return this;
        },
       }
    }
    
    return createObject();

};
// console.log(module.exports('2017-05-16 13:45'))

// var time = module.exports('2017-05-16 13:45');

//    time.add(24, 'hours')
//     .substract(1, 'month')
//     .add(3, 'days')
//     .add(15, 'minutes');
// console.log(time);
