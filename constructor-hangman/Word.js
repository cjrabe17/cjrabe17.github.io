var Letter = require("./Letter");

var Word = function () {
    this.lettersArr = [];
    this.isFound = false;
    this.wordGuess = "";
    this.remainingGuesses = 17;
    this.getWordToDisplay = function(word) {
        this.wordGuess = "";
        for (var i = 0; i < word.length; i++) {
            var newLetter = new Letter(word[i]);
            this.lettersArr.push(newLetter);
        }
        for (i = 0; i < this.lettersArr.length; i++) {
            this.wordGuess += this.lettersArr[i].displayLetter();
        }
        console.log(this.wordGuess);
    }
    this.letterGuess = function(userGuess) {
        this.wordGuess = "";
        this.correct = false;
        var numCorrect = 0;
        for (var i = 0; i < this.lettersArr.length; i++) {
            if (this.letterArr[i].guessed === false) {
                this.lettersArr[i].checkGuess(userGuess);

                if (this.letterArr[i].guessed === true) {
                    this.correct = true;
                }
            }

            if (this.lettersArr[i].guessed === true) {
                numCorrect++;
                if (numCorrect === this.lettersArr.length) {
                    this.isFound = true;
                }
            }
        }
        for (i = 0; i < this.lettersArr.length; i++) {
            this.wordGuess += this.lettersArr[i].displayLetter();
        }

        if (this.correct === true) {
            console.log("Correct!");
            this.correct = true;
        } else {
            this.remainingGuesses--;
            console.log("Nope! You only have " + this.remainingGuesses + " left.");
            this.correct = false;
        }
        console.log(this.wordGuess);
    }
}

module.exports = Word;