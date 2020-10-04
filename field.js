var tweet = {
    likes: 16,
    getLikes: function() {
    return this.likes; },
    setLikes: function(value) { this.likes = parseInt(value) || 0; return this;
    },
    getAuthor: function() {
    return this.user.screenName; }
    };

    console.log(tweet.getLikes());