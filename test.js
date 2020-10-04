var tweet = {
    likes: 21,
    getLikes: function() {
    return this.likes; },
    setLikes: function(value) {let likes = parseInt(value); 
        try{ 
            if (isNaN(likes) || likes < 0) {
            likes = 0;
            throw new RangeError('Передано неверное значение');
            } 
        }
            catch (e) {
                    if (e instanceof RangeError) {
                    console.log(e.name);

                    tweet.likes = 0; 
        }
    }
        
        this.likes = likes;  
    },  
    getAuthor: function() {
    return this.user.screenName; },
    user: {screenName: 'Me'}
    };
    // try {
    //     tweet.setLikes(value);
    //     } 
    // catch (e) {
    //     if (e instanceof RangeError) {
    //         logMyErrors(e);
    //     // tweet.likes = 0; 
    // }
        // console.error(e, e.name, e.message,e.stack); 
        // console.log(e.name, e.message,e.stack);
    
        
    tweet.setLikes(-1);
    // tweet.likes = 100;
    console.log(tweet.getLikes());
    // tweet.setLikes(0);
    // tweet.user.age = 39;
    console.log(tweet);