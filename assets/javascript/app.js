//Initialize Firebase
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

var userClicks = 0;

//------------------------------

$(document).ready(function() {
  $(".results-div").hide();
});

$("#search-button").on("click", function() {
  $(".results-div").show();
  $(".card").remove();

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
  var queryUrl =
    "https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=KmtIKgXV9VzRbLsyDRIUc3ntCemOSLIA&startDateTime=" +
    formattedDate +
    "&endDateTime=" +
    endFormattedDate +
    "&city=Nashville";
  var proxyURL = "https://cors-anywhere.herokuapp.com/";
  $.ajax({
    url: proxyURL + queryUrl,
    type: "GET"
  }).then(function(response) {
    console.log(queryUrl);
    console.log(response);
    // loop through the 5 result object arrays
    for (var i = 0; i < 5; i++) {
      var eventTitle = response._embedded.events[i].name;
      var dateText = response._embedded.events[i].dates.start.localDate;
      var image = response._embedded.events[i].images[0].url;
      var link = response._embedded.events[i].url;
      var newCards = $("<div>");
      //assigning class to new card
      newCards.addClass("card");
      //creating image div
      var newImage = $("<img>");
      //assigning class to new image card
      newImage.attr({ class: "card-img-top", src: image });
      $(".card-img-top").wrap("<a href= " + link + " >");
      //creating card body
      var cardBody = $("<div>");
      //creating class to body div
      cardBody.addClass("card-body");
      //creating card title
      var cardTitle = $("<h5>");
      cardTitle.addClass("event-name");
      cardTitle.text(eventTitle);
      //creating location text
      var cardLocation = $("<p>");
      cardLocation.addClass("date-text");
      cardLocation.text(dateText);

      var createLink = $("<a>");
      createLink.attr("href", link);
      createLink.attr("target", "_blank");
      createLink.text("More Info");
      //button click
      var newBtn = $("<button>");
      newBtn.addClass("link-button");
      newBtn.append(createLink);

      //Append body content into content div
      $(cardBody).append(newImage, cardTitle, cardLocation, newBtn);
      $(newCards).append(cardBody);
      $("#event-dump").append(newCards);
    }
  });
  //restaraunt api call to yelp
  var myurl =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=nashville&limit=5";
  $.ajax({
    url: myurl,
    headers: {
      Authorization:
        "Bearer lxCQuPmOMELdb3m7ZmW59X9CTUOg7ylEV_iJhlKpsuAoFdk8jkqVGY-M0YxAJVeLTxbT2my_T_Wp0byJJsvVdhxNo2TFJH1-DE6cZXAI3iPqTf4jdkMd3q38G1KEXHYx"
    },
    method: "GET",
    dataType: "json"
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
        var link = currentSpot.url;

        //creating card div
        var newCards = $("<div>");
        //assigning class to new card
        newCards.addClass("card");
        //creating image div
        var newImage = $("<img>");
        //assigning class to new image card
        newImage.attr({ class: "card-img-top", src: image });
        $(".card-img-top").wrap("<a href= " + link + " >");
        //creating card body
        var cardBody = $("<div>");
        //creating class to body div
        cardBody.addClass("card-body");
        //creating card title
        var cardTitle = $("<h5>");
        cardTitle.addClass("rest-name name");
        cardTitle.text(restTitle);
        //creating location text
        var cardLocation = $("<p>");
        cardLocation.addClass("rest-location");
        cardLocation.text(location);
        //creating phone number text
        var cardPhone = $("<p>");
        cardPhone.addClass("rest-phone");
        cardPhone.text(phone);
        var createLink = $("<a>");
        createLink.attr("href", link);
        createLink.attr("target", "_blank");
        createLink.text("More Info");
        //button click
        var newBtn = $("<button>");
        newBtn.addClass("link-button");
        newBtn.append(createLink);
        //Append body content into content div
        $(cardBody).append(
          newImage,
          cardTitle,
          cardLocation,
          cardPhone,
          newBtn
        );
        $(newCards).append(cardBody);
        $("#rest-dump").append(newCards);
      }
    });

  //bar api call to yelp
  var myurl =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=bars&location=nashville&limit=5";
  $.ajax({
    url: myurl,
    headers: {
      Authorization:
        "Bearer lxCQuPmOMELdb3m7ZmW59X9CTUOg7ylEV_iJhlKpsuAoFdk8jkqVGY-M0YxAJVeLTxbT2my_T_Wp0byJJsvVdhxNo2TFJH1-DE6cZXAI3iPqTf4jdkMd3q38G1KEXHYx"
    },
    method: "GET",
    dataType: "json"
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
        var link = currentSpot.url;
        //creating card div
        var newCards = $("<div>");
        //assigning class to new card
        newCards.addClass("card");
        //creating image div
        var newImage = $("<img>");
        //assigning class to new image card
        newImage.attr({ class: "card-img-top", src: image });
        $(".card-img-top").wrap("<a href= " + link + " >");
        //creating card body
        var cardBody = $("<div>");
        //creating class to body div
        cardBody.addClass("card-body");
        //creating card title
        var cardTitle = $("<h5>");
        cardTitle.addClass("rest-name name");
        cardTitle.text(restTitle);
        //creating location text
        var cardLocation = $("<p>");
        cardLocation.addClass("rest-location");
        cardLocation.text(location);
        //creating phone number text
        var cardPhone = $("<p>");
        cardPhone.addClass("rest-phone");
        cardPhone.text(phone);
        var createLink = $("<a>");
        createLink.attr("href", link);
        createLink.attr("target", "_blank");
        createLink.text("More Info");
        //button click
        var newBtn = $("<button>");
        newBtn.addClass("link-button");
        newBtn.append(createLink);
        //Append body content into content div
        $(cardBody).append(
          newImage,
          cardTitle,
          cardLocation,
          cardPhone,
          newBtn
        );
        $(newCards).append(cardBody);
        $("#bar-dump").append(newCards);
      }
    });
});

$(document).on("click", ".link-button", function() {
  userClicks++;
  var theName = $(this)
    .siblings(".name")
    .text();

  database.ref().push({
    userClicks
  });
});
