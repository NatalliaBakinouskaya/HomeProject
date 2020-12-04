let i = '';
module.exports = {
    
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (typeof global[event] != 'object'){
            global[event] = [[],[]];
            global[event][0] = [handler.bind(subscriber)];
            
        }
        
        else {
            global[event][0].push(handler.bind(subscriber));
        }
        global[event][1].push(subscriber);

        this[event] = function(){
            global[event][0].forEach(function(action, index) {
                action();
            });
            return this;
        }
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        global[event][1].map(function(elem, index,arr){
            if(elem == subscriber){
                console.log('before', index, new_notification[1][0],new_notification[1][1], new_notification[1][2])
                global[event][1].splice(index, 1);
                global[event][0].splice(index, 1);
                console.log('after', index, new_notification[1][0],new_notification[1][1], new_notification[1][2])
            }
            
        });
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        this[event]();  
        
        return this;  
    }
    
};
var notifications = {
    counter: 0,
    count: function () {
        this.counter++;
    }
};


var logger = {
    logs: []
};

module.exports
    .on('new_notification', notifications, notifications.count)
    .on('new_notification', logger, function () {
        this.logs.push('Произошло новое событие new_notification');
    })
    .on('new_notification', logger, function () {
        // this указывает на logger
        this.logs.push('Добавлена новая нотификация. Количество - ' + notifications.counter);
    })
    // .emit('new_notification');
// notifications - 1
// logger - 2
// console.log('3', new_notification[1][0],new_notification[1][1],new_notification[1][2]);
module.exports
    .off('new_notification', logger)
    // .emit('new_notification')
    // .on('new_notification', logger, function () {
    //     this.logs.push('Новое событие new_notification!');
    // })
    // .emit('new_notification');

// console.log(notifications.counter,logger.logs);
// console.log('1', new_notification[1][0],new_notification[1][1])
