
words = ["zork", "mario", "portal", "pacman", "halflife", "minecraft", "borderlands"];
aryGuess = [];
winCounter = 0;
// document.getElementById("wins").innerHTML = winCounter;
remainingGuesses = 13;
// document.getElementById("guesses").innerHTML = remainingGuesses;

// Picks a random word from those available in the array
var wordToGuess = words[Math.floor(Math.random() * words.length)];
	console.log(wordToGuess);
	console.log(wordToGuess.length);

// Displays underscores for the # of letters of the chosen word
aryPositions = [];
for (var i = 0; i < wordToGuess.length; i++) {
	aryPositions[i] = "_";
	underscores.innerHTML = aryPositions.join(" ");
}

// Listens for the user's key press and converts it to lowercase
document.onkeypress = function(event) {
	var userKeyPressed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userKeyPressed);
	console.log(wordToGuess.indexOf(userKeyPressed));

// If the letter is in the word
if (wordToGuess.indexOf(userKeyPressed) > -1) {
	for (var i = 0; i < wordToGuess.length; i++) {
		if (wordToGuess[i] == userKeyPressed) {
			aryPositions[i] = userKeyPressed;
			console.log(aryPositions);
			underscores.innerHTML = aryPositions.join(" ");
		}
	}
// If the letter isn't in the word
} else {
	remainingGuesses--;
	guesses.innerHTML = remainingGuesses;
	console.log(aryGuess);
	aryGuess.push(userKeyPressed);
	console.log(aryGuess);
	wrong.innerHTML = aryGuess.join(" ");
		// When remaining guesses run out
		if (remainingGuesses == 0) {
			document.getElementById("wrong").innerHTML = "You lose.";
			console.log("You made it.")
			// reset();
		}
	}
}

// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// winCounter++;