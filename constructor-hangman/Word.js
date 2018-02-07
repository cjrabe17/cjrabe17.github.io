var Letter = require("./Letter");

var Word = function () {
    this.lettersArr = [];
    this.isFound = false;
    this.wordGuess = "";
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
    this.letterGuess = function (userGuess) {
        this.wordGuess = "";
        for (var i = 0; i < lettersArr.length; i++) {
            this.lettersArr[i].checkGuess(userGuess);
        }
        for (i = 0; i < this.lettersArr.length; i++) {
            this.wordGuess += this.lettersArr[i].displayLetter();
        }
        console.log(this.wordGuess);
    }
}

module.exports = Word;