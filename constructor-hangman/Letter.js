var Letter = function(letterInWord) {
    this.letterInWord = letterInWord,
    this.guessed = false,
    this.displayLetter = function() {
        if (this.guessed === true) {
            return this.letterInWord;
            console.log(this.letterInWord);
        } else {
            return "_ ";
            // console.log("_ ");
        }
    }
    this.checkGuess = function (letterGuessed) {
        if (letterGuessed == letterInWord) {
            this.guessed = true;
        }
        this.displayLetter();
    }
}

module.exports = Letter;