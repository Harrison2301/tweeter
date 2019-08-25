"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to database
    saveTweet: function (newTweet, callback) {
      db.collection("tweets")
        .insertOne(newTweet)
        .then(() => callback(null, newTweet))
        .catch(error => callback(error));
    },

    // Get all tweets in sends to callback
    getTweets: function (callback) {
      db.collection("tweets")

        .find()
        .toArray()

        .then(tweets => callback(null, tweets))
        .catch(error => callback(error))
    }
  };
};
