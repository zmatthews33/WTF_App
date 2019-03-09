// -------------------------------

// placeholder for events api


$("#click-button").on("click", function() {

var dateChosen = $("#datepicker").val();
var convertedDate = 
console.log(dateChosen);
var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=KmtIKgXV9VzRbLsyDRIUc3ntCemOSLIA&city=Nashville&startDateTime=" + dateChosen;
var proxyURL = "https://cors-anywhere.herokuapp.com/"
$.ajax({
    url: proxyURL + queryUrl,
    type:"GET"
}).then(function(response) {

    console.log(queryUrl);
    console.log(response);

    var eventName = response._embedded.events[0].name;
    console.log(eventName);

    $("#events-div").append(eventName);

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