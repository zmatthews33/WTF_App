// -------------------------------
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCJJBRwGrYTTcXaPFjKnK5Ige7EAHD8D0g",
    authDomain: "wtfapp-b1616.firebaseapp.com",
    databaseURL: "https://wtfapp-b1616.firebaseio.com",
    projectId: "wtfapp-b1616",
    storageBucket: "wtfapp-b1616.appspot.com",
    messagingSenderId: "1031435679322"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();




// placeholder for events api


$("#search-button").on("click", function() {

    // clear cards from previous searches
    for (var i = 0; i < 5; i++) {
        $("#band-div").remove();
    }

// select text of the chose date input field
var dateChosen = $(".date-text").text();

// convert the date format to a readable format for the ticketmaster API
console.log(dateChosen);
JSON.stringify(dateChosen);
var dateFormat = "ddd, MMM DD";
var convertedDate = moment(dateChosen, dateFormat);

// set the start date time
var formattedDate = convertedDate.format("YYYY-MM-DDTHH:mm:ssZ");
console.log(formattedDate);

// set the end date time
var m = moment(formattedDate, "YYYY-MM-DDTHH:mm:ssZ");
var endFormattedDate = m.add(23, "hours").format("YYYY-MM-DDTHH:mm:ssZ");
console.log(endFormattedDate);

// set our query url with the required date search parameters
var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=6&apikey=KmtIKgXV9VzRbLsyDRIUc3ntCemOSLIA&startDateTime=" + formattedDate + "&endDateTime=" + endFormattedDate + "&city=Nashville";
var proxyURL = "https://cors-anywhere.herokuapp.com/"
$.ajax({
    url: proxyURL + queryUrl,
    type:"GET"
}).then(function(response) {

    console.log(queryUrl);
    console.log(response);

    // loop through the 5 result object arrays
    for (var i = 0; i < 6; i++) {
        var eventName = response._embedded.events[i].name;
        console.log(eventName);
        var eventDate = response._embedded.events[i].dates.start.localDate;
        console.log(eventDate);
        var eventImage = response._embedded.events[i].images[0].url;


        // create a new card with the event title and event date

        //creating card div
        var newCards = $("<div>");
        // assigning class to new card 
        newCards.addClass("card").attr("style", "width: 18rem; height:375px").attr("id", "band-div");
        //creating image div
        var newImage = $("<img>");
        //assigning class to new image card
        newImage.attr({"class": "card-img-top", "src" : eventImage});
        //creating card body 
        var cardBody = $("<div>");
        //creating class to body div
        cardBody.addClass("card-body");
        //creating card title 
        var cardTitle = $("<h5>");
        cardTitle.addClass("event-name");
        cardTitle.text(eventName);
        //creating location text
        var cardLocation = $("<p>");
        cardLocation.addClass("event-date");
        cardLocation.text(eventDate);

        
          //Append body content into content div
          $(cardBody).append(newImage,cardTitle, cardLocation);
          $(newCards).append(cardBody);

        // manipulate the DOM by adding a the new card
        $("#events-div").append(newCards);
    }

})

//restaraunt api call to yelp
var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=nashville&limit=6";
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
        newCards.addClass("card").attr("style", "width: 18rem; height:375px");
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


// bars ares

//api key and address to Yelp Fusion
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=bars&location=nashville&limit=6";

    //ajax request
    $.ajax({
    url: myurl,
    headers: {
        'Authorization':'Bearer lxCQuPmOMELdb3m7ZmW59X9CTUOg7ylEV_iJhlKpsuAoFdk8jkqVGY-M0YxAJVeLTxbT2my_T_Wp0byJJsvVdhxNo2TFJH1-DE6cZXAI3iPqTf4jdkMd3q38G1KEXHYx',
    },
    method: 'GET',
    dataType: 'json',
    
    }).then(function(data) {
        //Setting the data to repsonse variable 
        var results = data.businesses;
            console.log(results);

            //for loop to iterate though the results array
            for (var j = 0; j < results.length; j++) {
            currentBar = results[j];
            
            //creating variables that containg specific responses 
            var barName = currentBar.name;
            var location = currentBar.location.display_address;
            var phone = currentBar.display_phone;
            var image = currentBar.image_url;
            
            //creating card div
            var newCards = $("<div>");

            //assigning class to new card 
            newCards.addClass("card").attr("style", "width: 18rem; height:375px");

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
            cardTitle.text(barName);

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
            $("#barArea").append(newCards);
            }
            
    })
  //create a functon to log when users click on an image
  //set a variable for userClicks
  var userClicks = 0;

  //on click function to record data 
  $(".card-img-top").on("click", function() {
      userClicks ++;
      console.log(userClicks);

      database.ref().push(userClicks);
  });
  
});

// -------------------------------