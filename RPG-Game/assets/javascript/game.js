$(document).ready(function() {
// Global variables
var gator = {
	name: Florida Gators,
	health: 150,
	counterAttack: 25,
	attack: function() {
		Math.floor((Math.random() * 50) + 1);
	}
}

var noles = {
	name: Florida State Seminoles,
	health: 80,
	counterAttack: 10,
	attack: function() {
		Math.floor((Math.random() * 50) + 1);
	}
}

var duke = {
	name: Duke Blue Devils,
	health: 120,
	counterAttack: 20,
	attack: function() {
		Math.floor((Math.random() * 50) + 1);
	}
}

var kentucky = {
	name: Kentucky Wildcats,
	health: 100,
	counterAttack: 15,
	attack: function() {
		Math.floor((Math.random() * 50) + 1);
	}
}


	$(".attack-button").on("click", function() {
		// if attacker and defender have been chosen
			// attackerHP-defenderAttack
	});
}