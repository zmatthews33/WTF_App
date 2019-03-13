// -------------------------------

// placeholder for events api


$("#search-button").on("click", function() {

var dateChosen = $(".date-text").text();
console.log(dateChosen);
JSON.stringify(dateChosen);
var dateFormat = "ddd, MMM DD";
var convertedDate = moment(dateChosen, dateFormat);
var formattedDate = convertedDate.format("YYYY-MM-DDTHH:mm:ssZ");
console.log(formattedDate);
var m = moment(formattedDate, "YYYY-MM-DDTHH:mm:ssZ");
var endFormattedDate = m.add(23, "hours").format("YYYY-MM-DDTHH:mm:ssZ");
console.log(endFormattedDate);


var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=KmtIKgXV9VzRbLsyDRIUc3ntCemOSLIA&startDateTime=" + formattedDate + "&endDateTime=" + endFormattedDate + "&city=Nashville";
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
        var eventDate = response._embedded.events[i].dates.start.localDate;
        console.log(eventDate);

        var makeCard = $("<div class='card' style='width: 18rem;'><div class='card-body'>").append("<h5>").text(eventName + ":::  :::" + eventDate)
        
        
        
        

        $("#events-div").append(makeCard);
    }


    

})
});

// -------------------------------