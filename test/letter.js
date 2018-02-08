function Letter(letter) {
    this.letter = letter;

    this.secret = "_";

    this.guessed = false;

    this.show = function() {
        if (this.guessed === true) {
            this.secret = this.letter;
        }
    };

    this.guess = function(guessLetter) {
        if (this.letter === guessLetter) {
            this.guessed = true;
        }
        
        this.show();
    };
};

module.exports = Letter;