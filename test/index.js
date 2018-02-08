var Word = require('./Word');
var inquirer = require('inquirer');

var dc = [
    "SUPERMAN",
    "BATMAN",
    "JOKER",
    "ZOD",
    "AQUAMAN",
    "FLASH",
    "DEATHSTROKE",
    "STARFIRE",
    "ROBIN",
    "DEADSHOT",
    "BANE"
]

var word = '';

var hangman = {

    gameStart: function() {
        word = new Word();

        word.create(dc[Math.floor(Math.random() *11)]);

        //console.log("\n" + word.guesses + " Guesses Remaining!\n");

        this.gameRound();
    },

    gameRound: function() {
        if (word.correct === false && word.guesses === 0) {
            this.gameEnd();
        }
        else if (word.win === true) {
            this.gameEnd();
        }
        else {
            this.userPrompt();
        }
        
    },

    userPrompt: function() {
        var that = this;

        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "promptGuess"
            }
        ]).then(function(inquirerResponse){
            word.letterGuess(inquirerResponse.promptGuess.toUpperCase());
            //console.log("\n" + word.guesses + " Guesses Remaining!\n");
            that.gameRound();
        });

    },

    gameEnd: function() {
        var that = this;

        if (word.win === true) {
            console.log("\nYOU WIN!!!\n");

            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Would you like to play again?",
                    name: "playAgain",
                    default: false
                }
            ]).then(function(inquirerResponse){
                if (inquirerResponse.playAgain === true) {
                    that.gameStart();
                }
                else {
                    console.log("\nCome again!");
                }
            });
        }

        else {
            console.log("\nYOU LOSE!!!\n");

            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Would you like to play again?",
                    name: "playAgain",
                    default: false
                }
            ]).then(function(inquirerResponse){
                if (inquirerResponse.playAgain === true) {
                    that.gameStart();
                }
                else {
                    console.log("\nCome again!");
                }
            });
        }
    }
}

hangman.gameStart();