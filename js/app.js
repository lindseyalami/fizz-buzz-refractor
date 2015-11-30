$(document).ready(function() {


  $("form").on("submit", function (e) {
    
    e.preventDefault();

    var entry = $(".entry").val(); //___captures form data

    entry = parseInt(entry, 10); //___parses string and returns integer

    fizzbuzz(entry); //__run fizzbuzz function

  });

});


function fizzbuzz(max) { //___function to perform fizzbuzz

  for ( var i = 1; i <= max; i++ ) {

    if ( i % 15 == 0 ) {
      $("#result").append("<li>fizz buzz</li>");

    }
    else if ( i % 3 == 0 ) {
      $("#result").append("<li>fizz</li>");

    }
    else if ( i % 5 == 0 ) {
      $("#result").append("<li>buzz</li>");

    } else {
      $("#result").append("<li>" + i + "</li>");

    }

  }

};



