
//on click functon to bring in search when user clicks "search"
$("#search-button").on("click", ".btn", function() {
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
//   .done(function(data) {
//       console.log(data);

//       var results = data

//       for (var i = 0; i < data.length; i++) {
//           var barDiv = $("<div>");
//           var p = $("<p>");
//           p.text(data[i].name);
//           var p = $("<p>").text("Name: " + data[i].name);

//           barDiv.append(p);
//           $("bars-div").prepend(barDiv);
//       }
//   })



})
