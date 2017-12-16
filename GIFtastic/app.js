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

// When show buttons are clicked, retrieve Giphy API info based on button's data-name
$("button").on("click", function() {
      var title = $(this).attr("data-name");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        title + "&api_key=IG5uA9qxRpugcORxcT1hkrbVyNHHTy0D&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        	}).done(function(response) {
            console.log(response);
        });
});