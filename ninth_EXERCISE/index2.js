let i = '';
module.exports = {
    
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        console.log('string' + handler.bind(subscriber));
        // console.log('notifications == subscriber', subscriber == notifications);
        // console.log('logger == subscriber', subscriber == logger);
        if (typeof global[event] != 'object'){
            // console.log('test',subscriber);
            global[event] = {};
        }
        // console.log('identity check',event[subscriber], global[event].hasOwnProperty(subscriber));
        global[event][subscriber] = handler.bind(subscriber);
        // console.log('test 2',subscriber, global[event]);
        // console.log('object entries length', Object.entries(new_notification).length);

        this[event] = function(){
            for(const [key, value] of Object.entries(global[event])){
                value();
            }
            // global[event].forEach(action => action());
         
            return this;
        }
    return this;
    },


    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        let n = {subscriber};
        
        let m = Object.keys(n);
        // m.join('');
        // console.log(m)
        global[event][n] = 'meo'
        // global[event][m] = 'meo'
        console.log(global[event][subscriber].name);
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
.emit('new_notification')
.emit('new_notification')
// .off('new_notification', notifications)
// console.log('notifications ' + new_notification[notifications], 'logger ' + new_notification[logger]);
// console.log(new_notification);
// console.log(notifications.counter, logger.logs)
console.log(Object.entries(new_notification).length);


