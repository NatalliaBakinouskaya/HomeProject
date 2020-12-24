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
        
        global[event][1] = global[event][1].map(function(elem, index){
            if(elem == subscriber){
                elem = 'deleted';
                global[event][0][index]= 'deleted';
            }
            return elem;
        });
        global[event][0] = global[event][0].filter(function(elem){
            if(elem != 'deleted'){
                return elem;
            }
        });
        global[event][1] = global[event][1].filter(function(elem){
            if(elem != 'deleted'){
                return elem;
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
