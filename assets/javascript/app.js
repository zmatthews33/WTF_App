$(document).ready(function() {

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
					
			var barDiv = $("<div>");
			var p = $("<p>");
			p.text(results[i].name);
			var p = $("<p>").text("Name: " + results[i].name);
			barDiv.append(p); 			
			$("#results").prepend(barDiv);

			}
	
	});

})