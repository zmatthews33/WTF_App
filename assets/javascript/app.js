// -------------------------------

// placeholder for events api


$("#click-button").on("click", function() {

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

// -------------------------------