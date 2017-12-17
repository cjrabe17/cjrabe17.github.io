var topics = ["parks and rec", "friends", "community", "archer", "stranger things", "game of thrones", "big bang theory", "buffy", "top gear", "prison break", "agents of shield", "dexter"];

function makeButtons() {
	// Empties the button divs for future over-writing
	$("#tvShowButtons").empty();
	// Loop to create initial topic buttons
	for (var i = 0; i < topics.length; i++) {
		// Creates a button element in memory
		var a = $("<button>");
		// Adds an attribute to each button with the name of the show attached to it
		a.attr("data-name", topics[i]);
		// Adds an attribute to each 
		a.attr("data-state", "still");
		// Writes the name of the show to the button
		a.text(topics[i]);
		// Adds each button to the end of the ID
		$("#tvShowButtons").append(a);
	}
}
makeButtons();

// When the submit button is clicked to add a show
$("#addShow").on("click", function(event) {
	event.preventDefault();
	// Stores the user's input as a variable
	var show = $("#show-input").val().trim();
	// Adds the user input to the topics array
	topics.push(show);
	// Re-creates the div of buttons
	makeButtons();
});

// When show a button is clicked, retrieves Giphy API info based on button's data-name
$("button").on("click", function() {
    var title = $(this).attr("data-name");
    // URL to access the API based on the show name + limit of 10 gifs
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    title + "&api_key=IG5uA9qxRpugcORxcT1hkrbVyNHHTy0D&limit=10";

    // Calls the Giphy API
	$.ajax({
    	url: queryURL,
    	method: "GET"
  	}).done(function(response) {
        var results = response.data;
        // Loops through the 10 gif results
        for (var i = 0; i < results.length; i++) {
        	// Limits gifs to PG and G ratings
            if (results[i].rating == "pg" || results[i].rating == "g") {
            	// Stores the ratings of API results in a variable
                var rating = results[i].rating;
                // Creates a div in memory
                var gifDiv = $("<div>");
                // Creates a paragraph with the rating in memory
                var p = $("<p>").text("Rating: " + rating);
                // Creates an image element in memory
                var showImage = $("<img>");
                // Gives the image element a link to a still image from the gif
                showImage.attr("src", results[i].images.fixed_height_still.url);
                // Adds the paragraph and image elements to the end of the div
                gifDiv.append(p);
                gifDiv.append(showImage);
                // Takes the in-memory div and adds it to the page
                $("#tvShowGifs").prepend(gifDiv);
			}
		}
	});
});