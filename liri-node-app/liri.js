require('dotenv').config();
var keys = require('./keys.js');
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var params = {screen_name: 'cjrabe17'};

var nodeArgv = process.argv;
var command = process.argv[2];
var searchTerm = process.argv[3];
for (i = 4; i < nodeArgv.length; i++) {
    searchTerm += '+' + nodeArgv[i];
}

// Limit tweets to 20
if (command == 'my-tweets') {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (i = 0; i < tweets.length; i++) {
                var date = tweets[i].created_at;
                console.log(date.substring(0, 10) + ':\n' + tweets[i].text + '\n-----------------------');
            }
        } else {
            console.log(error);
        }
    });
} else if (command == 'spotify-this-song') {
    if (searchTerm !== undefined) {
        spotify.search({type: 'track', query: searchTerm, limit: 1}, function(err, data) {
            if (!err) {
                console.log('Artist: ' + data.tracks.items[0].artists[0].name + '\nSong Title: ' + data.tracks.items[0].name + '\nAlbum Name: ' + data.tracks.items[0].album.name + '\nPreview Link: ' + data.tracks.items[0].album.external_urls.spotify);
            } else {
                console.log(err);
            }
        });
    } else {
        spotify.search({type: 'track', query: 'the sign', limit: 1}, function(err, data) {
            if (!err) {
                console.log('Artist: ' + data.tracks.items[0].artists[0].name + '\nSong Title: ' + data.tracks.items[0].name + '\nAlbum Name: ' + data.tracks.items[0].album.name + '\nPreview Link: ' + data.tracks.items[0].album.external_urls.spotify);
            } else {
                console.log(err);
            }
        });
    }
} else if (command == 'movie-this') {
    if (searchTerm !== undefined) {
        request('http://www.omdbapi.com/?t=' + searchTerm + '&plot=short&apikey=trilogy', function(error, response, body) {
            if (!error && response.statusCode === 200) {
                var parsedMovieData = JSON.parse(body);
                console.log('Title: ' + parsedMovieData.Title + '\nRelease Year: ' + parsedMovieData.Year + '\nIMDb Rating: ' + parsedMovieData.imdbRating + '\nRotten Tomatoes Rating: ' + parsedMovieData.Ratings[1].Value + '\nCountry of Production: ' + parsedMovieData.Country + '\nLanguage: ' + parsedMovieData.Language + '\nPlot: ' + parsedMovieData.Plot + '\nActors: ' + parsedMovieData.Actors);
            }
        });
    } else {
        request('http://www.omdbapi.com/?t=mr+nobody&plot=short&apikey=trilogy', function(error, response, body) {
            if (!error && response.statusCode === 200) {
                var parsedMovieData = JSON.parse(body);
                console.log('Title: ' + parsedMovieData.Title + '\nRelease Year: ' + parsedMovieData.Year + '\nIMDb Rating: ' + parsedMovieData.imdbRating + '\nRotten Tomatoes Rating: ' + parsedMovieData.Ratings[1].Value + '\nCountry of Production: ' + parsedMovieData.Country + '\nLanguage: ' + parsedMovieData.Language + '\nPlot: ' + parsedMovieData.Plot + '\nActors: ' + parsedMovieData.Actors);
            }
        });
    }
} else if (command == 'do-what-it-says') {

} else {
    console.log('Please type an approved command.');
}