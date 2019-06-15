"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      // simulateDelay(() => {
      //   db.tweets.push(newTweet);
      //   callback(null, true);
      // });
      db.collection("tweets")
        .insertOne(newTweet)
        .then(() =>   callback(null, newTweet))
        .catch(error => callback(error))
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      

      db.collection("tweets")

        .find()
        .toArray()
        
        .then(tweets => callback(null, tweets))
        .catch(error => callback(error))
      
      
      // grab tweets and send it to callback-> im in tweets in my mongo..
      
    } 
  };
}
