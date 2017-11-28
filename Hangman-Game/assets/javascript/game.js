
words = ["zork", "mario", "portal", "pacman", "halflife", "minecraft", "borderlands"];
aryGuess = [];
aryPositions = [];

function showWins() {
	winCounter = 0;
	document.getElementById("wins").innerHTML = winCounter;
}

function showRemainingGuesses() {
	remainingGuesses = 8;
	document.getElementById("guesses").innerHTML = remainingGuesses;
}

// Resets everything but the win counter
function newGame () {
	aryPositions = [];
	aryGuess = [];
	document.getElementById("wrong").innerHTML = aryGuess;
	randomWord();
	displayUnderscores();
	showRemainingGuesses();
}

// Picks a random word from those available in the array
function randomWord() {
	wordToGuess = words[Math.floor(Math.random() * words.length)];
}

// Displays underscores for the # of letters of the chosen word
function displayUnderscores() {
	underscores.innerHTML = underscores;
	for (var i = 0; i < wordToGuess.length; i++) {
		aryPositions[i] = "_";
		underscores.innerHTML = aryPositions.join(" ");
	}
}

function checkWin() {
	// Once all letters are filled in, trigger "win" scenario
	if (aryPositions.indexOf("_") == -1) {
		winCounter++;
		wins.innerHTML = winCounter;
		title.innerHTML = wordToGuess;
		var image = document.getElementById("image");
		if (wordToGuess == "mario") {
			image.src = "assets/images/mario.png";
		} else if (wordToGuess == "portal") {
			image.src = "assets/images/portal.png";
		} else if (wordToGuess == "zork") {
			image.src = "assets/images/zork.jpg";
		} else if (wordToGuess == "pacman") {
			image.src = "assets/images/pacman.jpg";
		} else if (wordToGuess == "halflife") {
			image.src = "assets/images/halflife.png";
		} else if (wordToGuess == "minecraft") {
			image.src = "assets/images/minecraft.png";
		} else if (wordToGuess == "borderlands") {
			image.src = "assets/images/borderlands.png";
		}
		setTimeout(newGame, 2000);
		// newGame();
	}
}

function checkLoss() {
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



// Start of game
randomWord();
displayUnderscores();
showWins();
showRemainingGuesses();

// Listens for the user's key press and converts it to lowercase
document.onkeypress = function(event) {
	var userKeyPressed = String.fromCharCode(event.keyCode).toLowerCase();

// If the letter is in the word
if (wordToGuess.indexOf(userKeyPressed) > -1) {
	for (var i = 0; i < wordToGuess.length; i++) {
		if (wordToGuess[i] == userKeyPressed) {
			aryPositions[i] = userKeyPressed;
			underscores.innerHTML = aryPositions.join(" ");
		}
	}
} else if (aryGuess.includes(userKeyPressed)) {
	// If the wrong key has been pressed before, nothing will happen
} else {
	// If the letter isn't in the word
	remainingGuesses--;
	guesses.innerHTML = remainingGuesses;
	aryGuess.push(userKeyPressed);
	wrong.innerHTML = aryGuess.join(" ");
}
checkLoss();
checkWin();
}