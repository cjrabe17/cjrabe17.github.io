// ---------------------------------------
// Global variables
var gators = {
	name: "Florida Gators",
	health: 200,
	counterAttack: 25,
	attack: function() {
		return Math.floor((Math.random() * 50) + 1);
	}
}

var kentucky = {
	name: "Kentucky Wildcats",
	health: 120,
	counterAttack: 15,
	attack: function() {
		return Math.floor((Math.random() * 50) + 1);
	}
}

var noles = {
	name: "Florida State Seminoles",
	health: 90,
	counterAttack: 10,
	attack: function() {
		return Math.floor((Math.random() * 50) + 1);
	}
}

var duke = {
	name: "Duke Blue Devils",
	health: 180,
	counterAttack: 20,
	attack: function() {
		return Math.floor((Math.random() * 50) + 1);
	}
}

var defendersDefeated = 0;
var attackerChosen = false;
var defenderChosen = false;
var userPlayer;
var currentOpponent;
var startingAttackValue;
var currentCounterAttack;
var attackerHealth;
var defenderHealth;
var userImage;
var opponentImage;

$(document).ready(function() {
// ---------------------------------------
// Functions
function checkWin() {
	if (currentOpponent.health <= 0) {
		$(".fight-stats").html("You win!");
		// $(".activeOpponent").hide();
		defendersDefeated++;
	}
}

function checkLoss() {
	if (userPlayer.health <= 0) {
		// alert("You lost!");
	}
}

function checkEndGame() {
	if (defendersDefeated = 3) {
		// alert("You won the war!");
	}
}

function reset(){
	opponentsDefeated = 0;
	attackerChosen = false;
	defenderChosen = false;
	userPlayer;
	currentOpponent;
	startingValue;
	$(".defender").empty();
	$(".attacker").empty();
	$(".fight-stats").empty();
}


// Start of game
$(".thumbnail").on("click", function() {
	if (attackerChosen == false && defenderChosen == false) {
		$(this).appendTo(".attacker").addClass("activePlayer");
		attackerChosen = true;
		$("h3").text("Click a team to attack!");
		if ($(this).hasClass("gators")) {
			userPlayer = gators;
		};
		if ($(this).hasClass("kentucky")) {
			userPlayer = kentucky;
		};
		if ($(this).hasClass("noles")) {
			userPlayer = noles;
		};
		if ($(this).hasClass("duke")) {
			userPlayer = duke;
		};
		startingAttackValue = userPlayer.attack();
	} else if (attackerChosen == true && defenderChosen == false) {
		$("h3").text("Benched Teams");
		$(this).appendTo(".defender").addClass("activeOpponent");
		defenderChosen = true;
		if ($(this).hasClass("gators")) {
			currentOpponent = gators;
		};
		if ($(this).hasClass("kentucky")) {
			currentOpponent = kentucky;
		};
		if ($(this).hasClass("noles")) {
			currentOpponent = noles;
		};
		if ($(this).hasClass("duke")) {
			currentOpponent = duke;
		};
	}
});

$(".attack-button").on("click", function() {
	// When both teams are filled
	if (attackerChosen && defenderChosen) {
		currentCounterAttack = currentOpponent.counterAttack;
		attackerHealth = userPlayer.health - currentCounterAttack;
		$(".activePlayer h5").html(attackerHealth);
		opponentHealth = currentOpponent.health - startingAttackValue;
		$(".activeOpponent h5").html(opponentHealth);
		$(".fight-stats h6").html("You attacked for " + startingAttackValue + " points, and your opponent counter-attacked for " + currentCounterAttack + "!");
		checkLoss();
		checkWin();
		checkEndGame();
	} else {
		alert("Please choose your teams first.");
	}
});

// End of "document ready" code block
});