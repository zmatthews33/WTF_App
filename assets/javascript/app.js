// -------------------------------

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
var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=KmtIKgXV9VzRbLsyDRIUc3ntCemOSLIA&startDateTime=" + formattedDate + "&endDateTime=" + endFormattedDate + "&city=Nashville";
var proxyURL = "https://cors-anywhere.herokuapp.com/"
$.ajax({
    url: proxyURL + queryUrl,
    type:"GET"
}).then(function(response) {

    console.log(queryUrl);
    console.log(response);

    // loop through the 5 result object arrays
    for (var i = 0; i < 5; i++) {
        var eventName = response._embedded.events[i].name;
        console.log(eventName);
        var eventDate = response._embedded.events[i].dates.start.localDate;
        console.log(eventDate);

        // create a new card with the event title and event date
        var makeCard = $("<div id='band-div' class='card' style='width: 18rem;'><div class='card-body'>").append("<h5>").text(eventName + ":::  :::" + eventDate)
        
        // manipulate the DOM by adding a the new card
        $("#events-div").append(makeCard);
    }


})

    // Bars Api Search // 
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=bars&location=nashville&limit=6";
    $.ajax({
        url: myurl,
        headers: {
            'Authorization':'Bearer lxCQuPmOMELdb3m7ZmW59X9CTUOg7ylEV_iJhlKpsuAoFdk8jkqVGY-M0YxAJVeLTxbT2my_T_Wp0byJJsvVdhxNo2TFJH1-DE6cZXAI3iPqTf4jdkMd3q38G1KEXHYx',
    },
        method: 'GET',
        dataType: 'json',
        success: function(data){
                console.log(data);
        }
    })
        .done(function(data) {
                
                var results = data.businesses;

                for (var i = 0; i < results.length; i++) {
                    
                    var barName = results[i].name;
                    var barRating = results[i].rating;
                    //var image = results[i].image_url;

                    var barDiv = $("<div id='band-div' class='card' style='width: 18rem;'><div class='card-body'>").append("<h1>").text(barName + " " + barRating);

                    $("#bars-results").prepend(barDiv);

                }
        
        });

});
