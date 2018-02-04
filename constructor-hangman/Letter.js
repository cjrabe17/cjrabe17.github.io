var Letter = function(characterInWord, guessedYet) {
    this.characterInWord = characterInWord,
    this.guessedYet = false,
    this.displayLetter = function() {
        if (this.guessedYet === true) {
            return this.characterInWord;
        } else {
            return " _ ";
        }
    }
    this.checkGuess = function (letterGuessed) {
        if (letterGuessed == characterInWord) {
            guessedYet = true;
        }
    }
}

module.exports = Letter;