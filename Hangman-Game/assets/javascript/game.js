
words = ["zork", "mario", "portal", "pacman", "halflife", "minecraft", "borderlands"];
aryGuess = [];
aryPositions = [];
winCounter = 0;
document.getElementById("wins").innerHTML = winCounter;
remainingGuesses = 13;
document.getElementById("guesses").innerHTML = remainingGuesses;

// Picks a random word from those available in the array
var wordToGuess = words[Math.floor(Math.random() * words.length)];
	console.log(wordToGuess);
	console.log(wordToGuess.length);

// Displays underscores for the # of letters of the chosen word
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
			var image = document.getElementById("image");
			image.src = "assets/images/sadclaptrap.jpg";
			var audio = new Audio("assets/audio/lose.mp3");
			audio.play();
			// newGame();???
		}
	}
// Once all letters are filled in, trigger "win" scenario
	if (aryPositions.indexOf("_") == -1) {
		winCounter++;
		wins.innerHTML = winCounter;
		console.log("winner");
		// Play song to accompany correctly guess word
		if (wordToGuess == "mario") {
			title.innerHTML = wordToGuess;
			var audio = new Audio("assets/audio/supermariobros.mp3");
			audio.play();
		} else if (wordToGuess == "portal") {
			var audio = new Audio("assets/audio/stillalive.mp3");
			audio.play();
		} else if (wordToGuess == "zork") {
			var audio = new Audio("assets/audio/zork.mp3");
			audio.play();
		} else if (wordToGuess == "pacman") {
			var audio = new Audio("assets/audio/pacman.mp3");
			audio.play();
		} else if (wordToGuess == "halflife") {
			var audio = new Audio("assets/audio/halflife.mp3");
			audio.play();
		} else if (wordToGuess == "minecraft") {
			var audio = new Audio("assets/audio/minecraft.mp3");
			audio.play();
		} else if (wordToGuess == "borderlands") {
			var audio = new Audio("assets/audio/borderlands.mp3");
			audio.play();
		}
	}
}