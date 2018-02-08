var Letter = require('./Letter');

function Word() {
    this.letterArray = [];

    this.wordGuess = '';

    this.guesses = 10;

    this.correct = '';

    this.win = false;

    this.create = function(randomWord) {
        var word = randomWord.split('');
        this.wordGuess = '';
        
        for (i = 0; i < word.length; i++) {
            var wordLetter = new Letter(word[i]);
            this.letterArray.push(wordLetter);
        };

        for (i = 0; i < this.letterArray.length; i++) {
            this.wordGuess += this.letterArray[i].secret + " ";
        };

        console.log("\n" + this.wordGuess + "\n");
    };

    this.letterGuess = function(guessLetter) {
        this.wordGuess = '';

        this.correct = false;

        var numberCorrect = 0;

        for (i = 0; i < this.letterArray.length; i++) {
            if (this.letterArray[i].guessed != true) {
                this.letterArray[i].guess(guessLetter);
            
                if (this.letterArray[i].guessed === true) {
                    this.correct = true;
                }
            }

            if (this.letterArray[i].guessed === true) {
                numberCorrect++
                
                if (numberCorrect === this.letterArray.length) {
                    this.win = true;
                }
            }
            
        }

        for (i = 0; i < this.letterArray.length; i++) {
            this.wordGuess += this.letterArray[i].secret + " ";
        };

        if (this.correct === true) {
            console.log("\nCORRECT!!!\n\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
            this.correct = true;
        }
        else {
            this.guesses--;
            console.log("\nWRONG!!!\n\n" + this.guesses + " Guesses Remaining!\n\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
            this.correct = false;
        }

        console.log("\n" + this.wordGuess + "\n");
    }
};

module.exports = Word;