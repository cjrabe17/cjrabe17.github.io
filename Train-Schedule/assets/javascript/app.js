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

// Listen for button click to add train
	$("#addTrain").on("click", function(event) {
		event.preventDefault();

		// Get values from form to send to Firebase
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
		var newRow = $("<tr>");
		newRow.append("<td>" + snapshot.val().name + "</td>");
		newRow.append("<td>" + snapshot.val().destination + "</td>");
		newRow.append("<td>" + snapshot.val().frequency + "</td>");

		console.log(snapshot.val().time);
		var startTimeConverted = moment(snapshot.val().time, "HH:mm");
		console.log("First time is " + startTimeConverted);

		var now = moment();

		var diffTime = moment().diff(moment(startTimeConverted), "minutes");
		var tRemainder = diffTime % frequency;
		console.log(tRemainder);
		var tMinutesTillTrain = frequency - tRemainder;
		console.log(tMinutesTillTrain);

		var nextTrain = moment().add(tMinutesTillTrain, "minutes");
		var catchTrain = moment(nextTrain).format("HH:mm");
		newRow.append("<td>" + catchTrain + "</td>");
		newRow.append("<td>" + tMinutesTillTrain + "</td>");

		$(".table").append(newRow);
		// Logs errors if applicable
    }, function(errorObject) {
		console.log("Errors handled: " + errorObject.code);
    });
});