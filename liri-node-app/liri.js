require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];


if (command == "my-tweets") {
    client.get("statuses/user_timeline", params, function(error, tweets, response) {
        if (error) {
            console.log(error);
        } else {
            console.log(tweets);
        }
    });
} else if (command == "spotify-this-song") {
    // do something
} else if (command == "movie-this") {
    // do something
} else if (command == "do-what-it-says") {
    // do something
} else {
    console.log("Please type a command in the correct format.");
}