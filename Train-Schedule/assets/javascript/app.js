$(document).ready(function(){
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyDW5647-Pk-C1hMKJ8N0gOaB5cv9MN-Prw",
		authDomain: "train-schedule-c0996.firebaseapp.com",
		databaseURL: "https://train-schedule-c0996.firebaseio.com",
		projectId: "train-schedule-c0996",
		storageBucket: "",
		messagingSenderId: "264377008086"
	};
    
	firebase.initializeApp(config);

	var database = firebase.database();

	// Listen for button click to add train to schedule
	$("#addTrain").on("click", function(event) {
		// Prevents form from being submitted too early
		event.preventDefault();

		// Get values from HTML form to send to Firebase
		name = $("#trainName").val().trim();
		destination = $("#destination").val().trim();
		frequency = $("#frequency").val().trim();
		time = $("#firstTime").val().trim();

		database.ref().push({
			name: name,
			destination: destination,
			frequency: frequency,
			time: time
		});

		alert("Train successfully added!");

	});
    
    // Grab info from Firebase to display on page
	database.ref().on("child_added", function(snapshot) {
		// Creates table row in memory
		var newRow = $("<tr>");
		// Adds cells to the in memory table row
		newRow.append("<td>" + snapshot.val().name + "</td>");
		newRow.append("<td>" + snapshot.val().destination + "</td>");
		newRow.append("<td>" + snapshot.val().frequency + "</td>");

		// Puts the first train time in the right format and ensures it hasn't occurred already
		var convertedFirstTrain = moment(snapshot.val().time, "HH:mm").subtract(1, "years");

		// Grabs the current time in the right format
		var now = moment().format("HH:mm");

		// Calculates the difference between now and the first train
		var timeDifference = moment().diff(moment(convertedFirstTrain), "minutes");

		// Calculates the time apart
		var remainder = timeDifference % snapshot.val().frequency;

		// Calculates the minutes until the next train's arrival
		var minutesTillTrain = snapshot.val().frequency - remainder;

		// Adds the minutes until the next train to the current time to get arrival time
		var nextTrain = moment().add(minutesTillTrain, "minutes");

		// Adds calculated info to table cell in memory
		newRow.append("<td>" + moment(nextTrain).format("HH:mm") + "</td>");
		newRow.append("<td>" + minutesTillTrain + "</td>");

		// Adds "in memory" row to the table on the page
		$(".table").append(newRow);
		// Logs errors if applicable
    }, function(errorObject) {
		console.log("Errors handled: " + errorObject.code);
    });
});