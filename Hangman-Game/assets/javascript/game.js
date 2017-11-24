
words = ["mario", "computer", "hangman", "test", "antidisestablishmentarianism"];

winCounter = 0;
document.getElementById("winCounter").innerHTML = winCounter;

remainingGuesses = 13;
document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

// Picks a random word from those available in the array
var wordToGuess = words[Math.floor(Math.random() * words.length)];
	console.log(wordToGuess);
	console.log(wordToGuess.length);

// Displays underscores for the # of letters of the chosen word
var answerArray = [];
for (var i = 0; i < wordToGuess.length; i++) {
	answerArray[i] = "_";
	underscores.innerHTML = answerArray.join(" ");
}

// Listens for the user's key press and converts it to lowercase
document.onkeypress = function(event) {
	var userKeyPressed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userKeyPressed);
	console.log(wordToGuess.indexOf(userKeyPressed));

aryPositions = [];
aryGuess = [];

// If the letter is in the word
if (wordToGuess.indexOf(userKeyPressed) > -1) {
	for (var i = 0; i < wordToGuess.length; i++) {
		if (wordToGuess[i] == userKeyPressed) {
			// aryPositions[i] == userKeyPressed;
		} else {
			remainingGuesses--;
			aryGuess.push(userKeyPressed);
			console.log(aryGuess);
		}
	}
}

}

// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// winCounter++;