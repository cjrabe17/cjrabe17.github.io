// Global variables
var rightAnswers = 0;
var wrongAnswers = 0;
var unansweredCounter = 0;
var number = 30;
var intervalId;
var currentQuestionIndex = 0;
var questions = [
	{ // First question
		q: "Where does Plankton from \"SpongeBob SquarePants\" work?",
		c: ["The Chum Bucket", "The Bait Shop", "The Salty Spitoon", "The Weenie Hut"],
		answer: 0,
		gif: "https://media.giphy.com/media/3o6wNMBgB9iDS1DK1O/giphy.gif"
	},
	{ // Second question
		q: "Which show had a character often called Football Head?",
		c: ["SpongeBob SquarePants", "Hey Arnold!", "Fairly Odd Parents", "Animaniacs"],
		answer: 1,
		gif: "https://media.giphy.com/media/3ohjV1vqZH9TnocmSk/giphy.gif"
	},
	{ // Third question
		q: "In which state does \"Rocket Power\" take place?",
		c: ["Florida", "Hawaii", "California", "Arizona"],
		answer: 2,
		gif: "https://media.giphy.com/media/xT1R9Zb4kQj243sWKA/giphy.gif"
	},
	{ // Fourth question
		q: "What religion do the Pickles practice?",
		c: ["Judaism", "Taoism", "Buddhism", "Christianity"],
		answer: 0,
		gif: "https://media.giphy.com/media/l3vR70U5vSA509vTq/giphy.gif"
	},
	{ // Fifth question
		q: "What kind of animal is Rocko from \"Rocko's Mondern Life?\"",
		c: ["Kangaroo", "Wallaby", "Meerkat", "Jack Rabbit"],
		answer: 1,
		gif: "https://media.giphy.com/media/OQsa4Yca9BJFS/giphy.gif"
	},
	{ // Sixth question
		q: "Who was Doug Funnie's crush?",
		c: ["Cleopatra", "Valentine", "Theda", "Patti"],
		answer: 3,
		gif: ""
	},
	{ // Seventh question
		q: "Which character had an annoying little sister named Dee Dee?",
		c: ["Tommy Pickes", "Dexter", "Beavis", "Johnny Bravo"],
		answer: 1,
		gif: ""
	},
	{ // Eighth question
		q: "Which two mice had grand plans to take over the world?",
		c: ["Wakko and Yakko", "Tom and Jerry", "Pinky and the Brain", "Beavis and Butt-head"],
		answer: 2,
		gif: ""
	},
	{ // Ninth question
		q: "Which cartoon is set in \"The city of Townsville...\"?",
		c: ["Cleopatra", "Valentine", "Theda", "Patti"],
		answer: 3,
		gif: ""
	},
	{ // Tenth question
		q: "What celeb was the inspiration for Johnny Bravo's hair?",
		c: ["Brad Pitt", "Elvis", "Keanu Reeves", "Johnny Depp"],
		answer: 0,
		gif: ""
	},
];
var messages = {
	correct: "Yes, that's right!",
	incorrect: "Sorry, that's not correct!"
};

// -------------------------------------

// Functions
function runTimer() {
  intervalId = setInterval(decrementTimer, 1000);
}

function decrementTimer() {
  number--;
  $(".show-number").html("<h2>Time Remaining: " + number + "</h2>");
  if (number === 0) {
    stopTimer();
    $(".show-number").append("<h2>Time's up!</h2>");
  }
}

function stopTimer() {
  clearInterval(intervalId);
}

function postQuestion() {
	console.log("currentQuestionIndex: " + currentQuestionIndex);
	if (currentQuestionIndex <= questions.length) {
		$(".questions-section").html("<h3>" + questions[currentQuestionIndex].q + "</h3>");
		$(".buttonA").text(questions[currentQuestionIndex].c[0]).show();
		$(".buttonB").text(questions[currentQuestionIndex].c[1]).show();
		$(".buttonC").text(questions[currentQuestionIndex].c[2]).show();
		$(".buttonD").text(questions[currentQuestionIndex].c[3]).show();
	} else {
		$(".container").html("<h2>All done! Here's how you did!<br><h3>Right answers: " + rightAnswers + "<br>Wrong answers: " + wrongAnswers + "<br>Unanswered: " + unansweredCounter + "</h3>");
		$(".container").append("<button class='btn btn-warning btn-lg reset-button'>Start Over?</button>");
	}
}

// -------------------------------------

// Begining of game
$(document).ready(function() {
	$(".start-button").show();
	$(".show-number").hide();
	$(".questions-section").hide();
	$(".answer-section").hide();

	$(".start-button").on("click", function() {
	    $(".start-button").hide();
	    $(".show-number").show();
	    $(".questions-section").show();
	    $(".answer-section").show();

	    postQuestion();
	    runTimer();

	    $(".answer-section").find("button").on("click", function() {
	    	var userChoice = $(this).attr("value"); // stored as a string not a number
	    	userChoice = parseInt(userChoice);
	    	if (userChoice == questions[currentQuestionIndex].answer) {
	    		rightAnswers++;
	    		currentQuestionIndex++;
	    		console.log("Right answers: " + rightAnswers);
	    		console.log("Wrong answers: " + wrongAnswers);
	    		$(".questions-section").html(messages[0]);
	    	} else {
	    		wrongAnswers++;
	    		currentQuestionIndex++;
	    		console.log("Right answers: " + rightAnswers);
	    		console.log("Wrong answers: " + wrongAnswers);
	    		$(".questions-section").html(messages[1]);
	    	}
	    	postQuestion(currentQuestionIndex);
	    })
	})


}); // End of document ready code block