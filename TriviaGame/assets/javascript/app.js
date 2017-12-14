// Global variables
var userChoice;
var rightAnswers = 0;
var wrongAnswers = 0;
var unansweredCounter = 0;
var number = 10;
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
		gif: "https://media.giphy.com/media/xT1R9HgPldnxXsolu8/giphy.gif"
	},
	{ // Seventh question
		q: "Which character had an annoying little sister named Dee Dee?",
		c: ["Tommy Pickes", "Dexter", "Beavis", "Johnny Bravo"],
		answer: 1,
		gif: "https://media.giphy.com/media/7Fvac4YAVsjew/giphy.gif"
	},
	{ // Eighth question
		q: "Which two mice had grand plans to take over the world?",
		c: ["Wakko and Yakko", "Tom and Jerry", "Pinky and the Brain", "Beavis and Butt-head"],
		answer: 2,
		gif: "https://media.giphy.com/media/LZFgI1B26kzG8/giphy.gif"
	},
	{ // Ninth question
		q: "Which cartoon is set in \"The city of Townsville...\"?",
		c: ["\"Rugrats\"", "\"SpongeBob SquarePants\"", "\"The Powerpuff Girls\"", "\"Hey Arnold!\""],
		answer: 2,
		gif: "https://media.giphy.com/media/KpDnCsHaiO7o4/giphy.gif"
	},
	{ // Tenth question
		q: "Which celeb was the inspiration for Johnny Bravo's hair?",
		c: ["Brad Pitt", "Elvis", "Keanu Reeves", "Johnny Depp"],
		answer: 0,
		gif: "https://media.giphy.com/media/ft80DuxKwT3K8/giphy.gif"
	},
];
var feedback = ["Yes, that's right!", "Sorry, that's not correct!", "Time's up!"];

// -------------------------------------

// Functions
function runTimer() {
  	intervalId = setInterval(decrementTimer, 1000);
}

function decrementTimer() {
	$(".show-number").html("<h2>Time Remaining: " + number + "</h2>");
	number--;
	if (number === 0) {
		stopTimer();
		unansweredCounter++;
		$(".questions-section").html("<h3>" + feedback[2] + "<br> The correct answer was: " + questions[currentQuestionIndex].c[questions[currentQuestionIndex].answer] + "</h3>");
	    $(".answer-section").html("<img src='" + questions[currentQuestionIndex].gif + "'>");
	    currentQuestionIndex++;	    
  }
}

function stopTimer() {
	clearInterval(intervalId);
	number = 10;
	intervalId;
}

function postQuestion() {
	runTimer();
	$(".questions-section").html("<h3>" + questions[currentQuestionIndex].q + "</h3>");
	$(".buttonA").text(questions[currentQuestionIndex].c[0]).show();
	$(".buttonB").text(questions[currentQuestionIndex].c[1]).show();
	$(".buttonC").text(questions[currentQuestionIndex].c[2]).show();
	$(".buttonD").text(questions[currentQuestionIndex].c[3]).show();
}

function checkAnswer() {
	if (userChoice === questions[currentQuestionIndex].answer) {
		rightAnswers++;
		$(".questions-section").html("<h3>" + feedback[0] + "</h3>");
		$(".answer-section").html("<img src='" + questions[currentQuestionIndex].gif + "'>");
		currentQuestionIndex++;
	} else if (userChoice != questions[currentQuestionIndex].answer) {
		wrongAnswers++;
		$(".questions-section").html("<h3>" + feedback[1] + "<br> The correct answer was: " + questions[currentQuestionIndex].c[questions[currentQuestionIndex].answer] + "</h3>");
		$(".answer-section").html("<img src='" + questions[currentQuestionIndex].gif + "'>");
		currentQuestionIndex++;
	}
}

function checkEnd() {
	if (currentQuestionIndex == questions.length) {
		$(".container").html("<h2>All done! Here's how you did!<br><h3>Right answers: " + rightAnswers + "<br>Wrong answers: " + wrongAnswers + "<br>Unanswered: " + unansweredCounter + "</h3>");
		$(".container").append("<button class='btn btn-warning btn-lg reset-button'>Start Over?</button>");
	}
}

// -------------------------------------

// Beginning of game
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
	});

	$(".answer-section").find("button").on("click", function() {
		userChoice = $(this).attr("value");
		userChoice = parseInt(userChoice);
		stopTimer();
		checkAnswer();
		checkEnd();

		setTimeout(postQuestion, 5000);

	});


}); // End of document ready code block