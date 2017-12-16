// Global variables
var topics = ["parks and rec", "friends", "community", "archer", "stranger things", "game of thrones", "big bang theory", "buffy", "lost", "top gear"];


// function createButton() {
// 	$("#tvShowButtons").empty();
// }

// Loop to create initial topic buttons
for (var i = 0; i < topics.length; i++) {
	var a = $("<button>");
	a.addClass("show");
	a.attr("data-name", topics[i]);
	a.text(topics[i]);
	$("#tvShowButtons").append(a);
}

// When the submit button is clicked to add a show
$("#addShow").on("click", function(event) {
	event.preventDefaul();
	console.log("clicked");
});

// When show a button is clicked, retrieves Giphy API info based on button's data-name
$("button").on("click", function() {
    var title = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    title + "&api_key=IG5uA9qxRpugcORxcT1hkrbVyNHHTy0D&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  	}).done(function(response) {
        var results = response.data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            if (results[i].rating == "pg" || results[i].rating == "g") {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);

                var showImage = $("<img>");
                showImage.attr("src", results[i].images.fixed_height_still.url);

                gifDiv.append(p);
                gifDiv.append(showImage);

                $("#tvShowGifs").prepend(gifDiv);
          }
        }
    });
});