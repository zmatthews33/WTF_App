$(document).ready(function () {

var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?&limit=10&location=36.1626638,-86.7816016&radius=1500&type=restaurant&key=AIzaSyBRfIy9kF3qLTHzNFZIykbRJz3CwKJYk84";

var proxyURL = "https://cors-anywhere.herokuapp.com/"


      $.ajax({
        url: proxyURL + queryURL,
        method: "GET",
        headers: {
          "x-requested-with": "http://WTFApp.com"
        }
      })
        // After data comes back from the request
        .then(function(response) {
          //console.log(queryURL);
          //console.log(response);  
    
        var results = response.results;
          console.log(results);

          for (var  j = 0; j < results.length; j++) {

          var currentSpot = results[j];

        
          var cardDiv = $("<div>")

          var restName = $("<h3>").text(currentSpot.name);  
          console.log(restName);
          

          cardDiv.append(restName);


          $("#restaurant-cards").prepend(cardDiv);

        


          }


  })
});




// -------------------------------

// placeholder for events api


/*$("#click-button").on("click", function() {

var dateChosen = $("#datepicker").val();
JSON.stringify(dateChosen);
var dateFormat = "MM/DD/YYYY";
var convertedDate = moment(dateChosen, dateFormat);
var formattedDate = convertedDate.format("YYYY-MM-DDTHH:mm:ssZ");
console.log(formattedDate);
var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=KmtIKgXV9VzRbLsyDRIUc3ntCemOSLIA&startDateTime=" + formattedDate + "&city=Nashville";
var proxyURL = "https://cors-anywhere.herokuapp.com/"
$.ajax({
    url: proxyURL + queryUrl,
    type:"GET"
}).then(function(response) {

    console.log(queryUrl);
    console.log(response);

    for (var i = 0; i < 5; i++) {
        var eventName = response._embedded.events[i].name;
        console.log(eventName);

        var makeCard = $("<div class='card' style='width: 18rem;'><img src='...' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>Card title</h5><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href='#' class='btn btn-primary'>Go somewhere</a></div></div>")
        $("#events.div").append(makeCard);


        // $("#events-div").append(eventName);
    }




})
    // async:true,
    // dataType: "json",
    // success: function(json) {
    //     console.log(json);
    //     console.log(queryUrl);

    //     console.log(json.name);
        


    //          },
    // error: function(xhr, status, err) {
    //             // This time, we do not end up here!
    //          }
});

// -------------------------------*/