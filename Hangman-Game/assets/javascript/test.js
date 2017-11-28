words = ["zork", "mario", "portal", "pacman", "halflife", "minecraft", "borderlands"];
aryGuess = [];
aryPositions = [];
winCounter = 0;
remainingGuesses = 8;

function randomWord() {
	wordToGuess = words[Math.floor(Math.random() * words.length)];
	console.log(wordToGuess);
	console.log(wordToGuess.length);
}

function displayUnderscores() {
	for (var i = 0; i < wordToGuess.length; i++) {
		aryPositions[i] = "_";
		underscores.innerHTML = aryPositions.join(" ");
	}
}

function showWins() {
winCounter = 0;
document.getElementById("wins").innerHTML = winCounter;
}

function showRemainingGuesses() {
remainingGuesses = 8;
document.getElementById("guesses").innerHTML = remainingGuesses;
}

function newGame() {
	randomWord();
	showWins();
	displayUnderscores();
	showRemainingGuesses();
	aryGuess = [];
	aryPositions = [];

}

newGame();
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
			var image = document.getElementById("image");
			image.src = "assets/images/sadclaptrap.jpg";
			var audio = new Audio("assets/audio/lose.mp3");
			audio.play();
			newGame();
		}
	}
}