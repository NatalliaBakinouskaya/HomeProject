var tweet = {
    likes: 21,
    getLikes: function() {
    return this.likes; },
    setLikes: function(value) {this.likes = parseInt(value) || 0; return this;
    },
    getAuthor: function() {
    return this.user.screenName; }
    };
    tweet.setLikes(3);
    console.log(tweet.getLikes());
    // console.log(tweet.likes);