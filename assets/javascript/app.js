//Need to figure out how to pull ratings (rating), address (vicinity), and pricing (price_level)
//can you do multiple <p> tags or assign multiple <p> tags for each response data 


//on click functon to bring in search when user clicks "search"
$("#search-button").on("click", ".btn", function() {
    
    //query url to request data on bars within 1500 (1 mile) meter radius of nashville
    var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=36.1626638,-86.7816016&radius=1500&type=bar&key=AIzaSyBRfIy9kF3qLTHzNFZIykbRJz3CwKJYk84";

    //Ajax request
    $.ajax({
    url: queryURL,
    method: "GET"
    })

    .done(function(response) {
        console.log(response);

 /*       var results = response.data;

        for (var i = 0; i < results.length; i++) {

            //create a div to hold the response data
            var barDiv = $("<div>");
            //create a new <p> tag to add the name
            var p = $("<p>");
            p.text(results[i].name);
            var p = $("<p>").text("Bar Name: " + results[i].name);

            barDiv.append(p);

            $("#bars-div").prepend(barDiv);
        } */
    })

})
