//Place Search
//Find Place requests
//link https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters
//key = api key = AIzaSyBRfIy9kF3qLTHzNFZIykbRJz3CwKJYk84


var bar = "";

var queryURL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJPZDrEzLsZIgRoNrpodC5P30&key=AIzaSyBRfIy9kF3qLTHzNFZIykbRJz3CwKJYk84&query=Bars&radius=8000&limit=5";

var proxyURL = "https://cors-anywhere.herokuapp.com/"

    //Ajax request
    $.ajax({
        url: proxyURL + queryURL,
        method: "GET"
    })

    .done(function(response) {
        console.log(response);

        //var results = response.data
        
        //for (var i = 0; i < results.length; i++) {

        
    })