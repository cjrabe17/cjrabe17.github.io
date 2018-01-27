require("dotenv").config();
var keys = require("./keys.js");

var Twitter = require('twitter');
var Spotify = require("spotify");
 
var client = new Twitter(keys.twitter);

var nodeArgv = process.argv;
var command = process.argv[2];
var searchTerm = process.argv[3];
 
var params = {screen_name: 'cjrabe17'};
if (command == "my-tweets") {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
} else if (command == "spotify-this-song")


// // var spotify = new Spotify(keys.spotify);