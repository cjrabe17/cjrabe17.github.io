var inquirer = require("inquirer");
var Word = require("./Word");

var wordsArr = ["eleven", "demogorgon", "hawkins", "upsidedown", "eggo", "madmax", "pollywog", "mindflayer", "walkietalkie", "digdug", "eighties"];

var word = "";
var game = {
    start: function() {
        word = new Word();
        word.getWordToDisplay(wordsArr[Math.floor(Math.random() * 10)]);
        this.round();
    },
    round: function() {
        if (word.correct === false && word.remainingGuesses === 0) {
            this.end();
        } else if (word.isFound === true) {
            this.end();
        } else {
            this.promptUser();
        }
    },
    promptUser: function() {
        var that = this;
        inquirer.prompt([
            {
                type: "input",
                message: "Type a letter!",
                name: "userGuess"
            }
        ]).then(function(answers) {
            word.letterGuess(answers.userGuess);
            that.round();
        });
    },
    end: function() {
        var that = this;
        if (word.isFound === true) {
            console.log("You win! The mind flayer isn't going to get you!");
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Would you like to play again?",
                    name: "playAgain",
                    default: false
                }
            ]).then(function(answers){
                if (answers.playAgain === true) {
                    that.gameStart();
                } else {
                    console.log("Lame... Enjoy getting stuck in the Upside Down.");
                }
            });
        } else {
            console.log("You lose. The demogorgons ate you.");
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Would you like to play again?",
                    name: "playAgain",
                    default: false
                }
            ]).then(function(answers){
                if (answers.playAgain === true) {
                    that.gameStart();
                } else {
                    console.log("Lame... Enjoy getting stuck in the Upside Down.");
                }
            });
        }
    }
}

game.start();