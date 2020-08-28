// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    // function Phone(command){
    let phone_book = [];
    let command_name = command.split(' ')[0];
    
    


    function Show(){
        console.log(phone_book);
    }

    function Add(){
        command = command.split(' ');
        command.shift();
        let check = 0;
        name = command[0];
        command.shift();
        phone = command.join('').split(',');
        
        phone_book = phone_book.map(function(elem){
            
            if (elem.startsWith(name)){
                check = 1;
                
                for(number of phone){
                    
                    if(!elem.includes(number)){
                        
                        elem += ', ' + number;
                        
                    }
                }
                return elem; 
            }
            
        });
        if(check == 0){
            phone_book.push(name + ': ' + phone.join(', '));
        }
    
    return phone_book;
    }
    function REMOVE_PHONE(){
        command = command.join('').split(',');
        let res = false;
        phone_book = phone_book.map(function(element){
            if(element.includes(command)){
                res = true;
            }
            return element.replace(command + ', ', '') || (command, '');
        })
        return res;

    }
switch(command_name){
    case 'ADD':
        return Add();
    case 'SHOW':
        return Show();
    case 'REMOVE_PHONE':
        return REMOVE_PHONE();
}

}

// let pb = module.exports()();


// console.log(module.exports('REMOVE_PHONE 555-10-02'));
// // console.log(module.exports('SHOW'));
console.log(module.exports('ADD Adam 555-10-03'));
// console.log(module.exports('SHOW'));
// console.log(module.exports('ADD Ivan 555-10-01,555-10-03'));
// console.log(module.exports('SHOW'));
// console.log(module.exports('REMOVE_PHONE 555-20-01'));
// console.log(module.exports('SHOW'));

// console.log(pb('REMOVE_PHONE 555-10-02'));
// console.log(pb('SHOW'));
// console.log(pb('ADD Adam 555-10-03'));
// console.log(pb('ADD Adam 555-10-05'));
// console.log(pb('SHOW'));
// console.log(pb('ADD Ivan 555-10-01,555-10-03'));
// console.log(pb('SHOW'));
// console.log(pb('REMOVE_PHONE 555-20-01'));
// console.log(pb('SHOW'));


