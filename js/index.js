function randomQuote() {
    $.ajax ({
    url:"https://api.forismatic.com/api/1.0/?",
    dataType:"jsonp",
    data:" method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response) {
      $("#runquote").html( "<p id = 'runquote' class='lead text-center'>" + response.quoteText + "</p>" + "<p id ='author' class='lead text-center' >&dash;" + response.quoteAuthor + "&dash;</p>");

  //for twitter
      $("#tweet").attr( "href", "https://twitter.com/home/?status=" + response.quoteText + " - " + response.quoteAuthor 
      );
    }
  })
}

//Calling the function
$(document).ready(function() {
 $(function(){
   randomQuote();
 });
//button function
$("#new-quote").click(function(){
  randomQuote();
});
});