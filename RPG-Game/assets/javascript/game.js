// Global variables
// Counter-attck points (when character is defending) are static but attack functionality creates random number
var gators = {
	name: "Florida Gators",
	health: 200,
	counterAttack: 25,
	attack: function() {
		return Math.floor((Math.random() * 20) + 1);
	}
}

var kentucky = {
	name: "Kentucky Wildcats",
	health: 120,
	counterAttack: 15,
	attack: function() {
		return Math.floor((Math.random() * 20) + 1);
	}
}

var noles = {
	name: "Florida State Seminoles",
	health: 90,
	counterAttack: 12,
	attack: function() {
		return Math.floor((Math.random() * 20) + 1);
	}
}

var duke = {
	name: "Duke Blue Devils",
	health: 180,
	counterAttack: 20,
	attack: function() {
		return Math.floor((Math.random() * 20) + 1);
	}
}

var defendersDefeated = 0;
var attackerChosen = false;
var defenderChosen = false;
var userPlayer;
var currentOpponent;
var currentCounterAttack;
var currentAttackValue;
var attackerHealth;
var defenderHealth;
var numOfAttacks = 0;

// Functions
function attack() {
	currentAttackValue = (baseAttack * (numOfAttacks + 1));
	$(".fight-stats h6").html("You attacked for " + currentAttackValue + " points, and your opponent counter-attacked for " + currentCounterAttack + "!");
	defenderHealth -= currentAttackValue;
	attackerHealth -= currentCounterAttack;
	$(".activePlayer h5").html(attackerHealth);
	$(".activeOpponent h5").html(defenderHealth);
	numOfAttacks++;
}

function checkWinLoss() {
	// Loss
	if (attackerHealth <= 0) {
		$(".activeAttacker").hide();
		$(".fight-stats h6").html("You lose! Click Reset to try again.");
		$(".reset-button").show();
		$("h3").hide();
		$(".teams").hide();
	// Win
	} else if (defenderHealth <= 0) {
		defendersDefeated++;
		$(".activeOpponent").hide();
		defenderChosen = false;
		$(".fight-stats h6").html("You win this match! Click another opponent!");
	}
}

function checkEndGame() {
	if (defendersDefeated == 3) {
		$(".attack-button").unbind("click");
		$(".defender").remove();
		$(".attacker").removeClass("col-md-offset-4");
		$(".attacker").addClass("col-md-offset-5");
		$(".fight-stats h6").html("The " + userPlayer.name + " win the national championship!");
		$(".fight-stats").prepend("<img src='assets/images/trophy.png'>");
		$("h3").hide();
	}
}

// Start of game
$(document).ready(function() {
$(".reset-button").hide();
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
		baseAttack = userPlayer.attack();
		attackerHealth = userPlayer.health;
	} else if (attackerChosen == true && defenderChosen == false) {
		$("h3").text("Benched Teams");
		$(this).appendTo(".defender").removeClass("bench").addClass("activeOpponent");
		defenderChosen = true;
		if ($(this).hasClass("gators")) {
			currentOpponent = gators;
			$(".teams").find(".thumbnail").addClass("bench");
		};
		if ($(this).hasClass("kentucky")) {
			currentOpponent = kentucky;
			$(".teams").find(".thumbnail").addClass("bench");
		};
		if ($(this).hasClass("noles")) {
			currentOpponent = noles;
			$(".teams").find(".thumbnail").addClass("bench");
		};
		if ($(this).hasClass("duke")) {
			currentOpponent = duke;
			$(".teams").find(".thumbnail").addClass("bench");
		};
		defenderHealth = currentOpponent.health;
		currentCounterAttack = currentOpponent.counterAttack;
	}
});

$(".attack-button").on("click", function() {
	if (attackerChosen && defenderChosen) {
		attack();
		checkWinLoss();
		// checkLoss();
		// checkWin();
		checkEndGame();
	} else {
		alert("Please choose your teams first.");
	}
});

$(".reset-button").on("click", function() {
	location.reload(true);
});

// End of "document ready" code block
});