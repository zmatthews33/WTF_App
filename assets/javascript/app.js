$(document).ready(function () {

  //restaraunt api call to yelp
  var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=nashville&limit=5";

  $.ajax({
     url: myurl,
     headers: {
      'Authorization':'Bearer lxCQuPmOMELdb3m7ZmW59X9CTUOg7ylEV_iJhlKpsuAoFdk8jkqVGY-M0YxAJVeLTxbT2my_T_Wp0byJJsvVdhxNo2TFJH1-DE6cZXAI3iPqTf4jdkMd3q38G1KEXHYx',
  },
     method: 'GET',
     dataType: 'json',
    
  })
        //After data comes back from the request
        .then(function(data) {
           
        
        //Setting the data to repsonse variable 
        var results = data.businesses;
          console.log(results);

          for (var j = 0; j < results.length; j++) {

          currentSpot = results[j];
          

          //creating variables that containg specific responses 
          var restTitle = currentSpot.name;
          var location = currentSpot.location.display_address;
          var phone = currentSpot.display_phone;
          var image = currentSpot.image_url;
          

          //creating card div
          var newCards = $("<div>");
          //assigning class to new card 
          newCards.addClass("card");

          //creating image div
          var newImage = $("<img>");
          //assigning class to new image card
          newImage.attr({"class": "card-img-top", "src" : image});


          //creating card body 
          var cardBody = $("<div>");
          //creating class to body div
          cardBody.addClass("card-body");

          //creating card title 
          var cardTitle = $("<h5>");
          cardTitle.addClass("rest-name");
          cardTitle.text(restTitle);

          //creating location text
          var cardLocation = $("<p>");
          cardLocation.addClass("rest-location");
          cardLocation.text(location);

          //creating phone number text
          var cardPhone = $("<p>");
          cardPhone.addClass("rest-phone");
          cardPhone.text(phone);

          //Append body content into content div
          $(cardBody).append(newImage,cardTitle, cardLocation, cardPhone);

          $(newCards).append(cardBody);
          $("#rest-dump").append(newCards);


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