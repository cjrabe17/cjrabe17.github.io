// Global variables
var player1Name = "";
var player2Name = "";
var player1Wins = 0;
var player1Losses = 0;
var player2Wins = 0;
var player2Losses = 0;
var playersTies = 0;
var player1Chosen = false;
var player2Chosen = false;

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
function player1Turn() {
	$("playerOneButtons").addClass("active");
}

function showButtons() {
	$(".playerOneButtons").html("<button type='button' class='btn btn-success btn-block' value='r'>Rock</button><button type='button' class='btn btn-warning btn-block' value='p'>Paper</button><button type='button' class='btn btn-danger btn-block' value='s'>Scissors</button>");
}

// Start of game
$(document).ready(function() {
	if (player1Chosen == false && player2Chosen == false) {
		$(".submitName").on("click", function(event) {
			event.preventDefault();
			console.log("clicked");
			player1Name = $(".playerName").val().trim();

			database.ref().push({
				player1Name: player1Name;
			});

			alert("Player 1 successfully added!");
		});

		database.ref().on("child_added", function(snapshot) {
			console.log(snapshot.val().player1Name);
		})


	} else if (player1Chosen == true && player2Chosen == false) {
		// Wait for player two input


	} else if (player1Chosen == true && player2Chosen == true) {
		$(".nameInput").hide();
		player1Turn();
	}
});