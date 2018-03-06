

$(document).ready(function(){


$(".btn").on("click", function() {
    event.preventDefault();
    var person = $("#search-input")
      .val()
      .trim();
    var returnCount = $("#selector-input").val();
    var chron = $("#chron-input").val();
    console.log(chron);
  
    var queryURL =
      "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      person +
      "&sort=" +
      chron +
      "&api-key=4d8aee4e9eca456ea5a1eb758c8db827";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      $("")
    });
    
  });

});