var searchTerms = "";
var records = "";
var startYear = "";
var endYear = "";

$(document ).ready(function() {
  function displayArticles() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "57411789ddd6424dbcdc691727ac9344",
      'q': "nixon",
      'begin_date': "19700101",
      'end_date': "19710101"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });
    };
  displayArticles();
  var headline = response.docs.headline;
  $("#dump").append(headline);
  });