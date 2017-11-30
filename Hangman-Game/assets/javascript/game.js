
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var words = ["zork", "mario", "portal", "pacman", "halflife", "minecraft", "borderlands"];
var aryGuess = [];
var aryPositions = [];
var audio = document.createElement("audio");
var songs = {
	mario: "assets/audio/supermariobros.mp3",
	portal:"assets/audio/stillalive.mp3",
	zork: "assets/audio/zork.mp3",
	pacman: "assets/audio/pacman.mp3",
	halflife: "assets/audio/halflife.mp3",
	minecraft: "assets/audio/minecraft.mp3",
	borderlands: "assets/audio/borderlands.mp3",
	lose: "assets/audio/lose.mp3",
}

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
			audio.src = songs.mario;
			audio.play();
		} else if (wordToGuess == "portal") {
			image.src = "assets/images/portal.png";
			audio.src = songs.portal;
			audio.play();
		} else if (wordToGuess == "zork") {
			image.src = "assets/images/zork.jpg";
			audio.src = songs.zork;
			audio.play();
		} else if (wordToGuess == "pacman") {
			image.src = "assets/images/pacman.jpg";
			audio.src = songs.pacman;
			audio.play();
		} else if (wordToGuess == "halflife") {
			image.src = "assets/images/halflife.png";
			audio.src = songs.halflife;
			audio.play();
		} else if (wordToGuess == "minecraft") {
			image.src = "assets/images/minecraft.png";
			audio.src = songs.minecraft;
			audio.play();
		} else {
			// (wordToGuess == "borderlands")
			image.src = "assets/images/borderlands.png";
			audio.src = songs.borderlands;
			audio.play();
		}
		setTimeout(newGame, 1500);
	}
}

function checkLoss() {
	// When remaining guesses run out
	if (remainingGuesses == 0) {
		document.getElementById("wrong").innerHTML = "You lose.";
		title.innerHTML = "";
		var image = document.getElementById("image");
		image.src = "assets/images/sadclaptrap.jpg";
		audio.src = songs.lose;
		audio.play();
		setTimeout(newGame, 1500);
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


// Checks if user key pressed is an actual letter
if (alpha.indexOf(userKeyPressed) > -1) {
	// If the letter is in the word
	if (wordToGuess.indexOf(userKeyPressed) > -1) {
		for (var i = 0; i < wordToGuess.length; i++) {
			if (wordToGuess[i] == userKeyPressed) {
				aryPositions[i] = userKeyPressed;
				underscores.innerHTML = aryPositions.join(" ");
			}
		}
	} else if (aryGuess.includes(userKeyPressed)) {
		// If the key has been pressed before, nothing will happen
	} else {
		// If the letter isn't in the word
		remainingGuesses--;
		guesses.innerHTML = remainingGuesses;
		aryGuess.push(userKeyPressed);
		wrong.innerHTML = aryGuess.join(" ");
	}
	checkLoss();
	checkWin();
} else {
	// Do nothing because the directions explicitly say to press a letter!
}


}