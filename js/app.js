$(document).ready(function() {


  $("form").on("submit", function (e) {
    
    e.preventDefault();
    var entry = $(".entry").val(); //___captures form data

    if (entry % 1 === 0 && entry >= 1 && entry<= 100) { //__checks if entry is integer and in range
      fizzbuzz(entry); //__run fizzbuzz function
    } 

    else {
      alert("Please enter an integer between 1 and 100"); //__adds alert
      $('.entry').val(""); //___empties text box
    }

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



