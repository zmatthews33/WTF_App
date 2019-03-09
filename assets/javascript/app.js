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
        $("#events-div").append(eventName);
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