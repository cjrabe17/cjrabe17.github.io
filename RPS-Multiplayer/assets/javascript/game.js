// Global variables
var playerOneName = "";
var playerTwoName = "";
var playerOneWins = 0;
var playerOneLosses = 0;
var playerTwoWins = 0;
var playerTwoLosses = 0;
var userChoice = "";

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBdWXVlZK52xtmKy4TtNmnOSusluGP-JOI",
	authDomain: "rps-multiplayer-68070.firebaseapp.com",
	databaseURL: "https://rps-multiplayer-68070.firebaseio.com",
	projectId: "rps-multiplayer-68070",
	storageBucket: "",
	messagingSenderId: "696442035419"
};

firebase.initializeApp(config);

var database = firebase.database();

// Functions
function showButtons() {
	$().html("<button type='button' class='btn btn-success btn-block' value='r'>Rock</button><button type='button' class='btn btn-warning btn-block' value='p'>Paper</button><button type='button' class='btn btn-danger btn-block' value='s'>Scissors</button>");
}



// Start of game
$(document).ready(function() {

});