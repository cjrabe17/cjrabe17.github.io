var inquirer = require("inquirer");
var Word = require("./Word");

var wordsArr = ["eleven", "demogorgon", "hawkins", "upsidedown", "eggo", "madmax", "pollywog"];

var word = "";
var game = {
    begin: function() {
        word = new Word();
    }
}
Math.floor(Math.random() * 10);