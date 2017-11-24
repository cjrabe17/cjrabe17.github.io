var aryAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

if (aryAlpha.indexOf(userKeyPressed) > -1) {
	// is alpha char
}

aryGuess = []
aryGuess.push(userKeyPressed);

if (aryGuess.indexOf(userKeyPressed) > -1) {
	// key already pressed? exit
}

aryWords = ["hangman", "computer", "desktop"];
aryPositions = []

for (var i = 0; i < wordToGuess.length; i++) {
	aryPositions[i] = "_"
}

aryPositions.indexOf("_");

if (wordToGuess.indexOf(userKeyPressed) > -1) {
	for (var i = 0; wordToGuess.length; i++) {
		if (wordToGuess[i] == userKeyPressed) {
			aryPositions[i] = userKeyPressed;
		}
	}
}

var wordToGuess = words[Math.floor(Math.random() * words.length)];