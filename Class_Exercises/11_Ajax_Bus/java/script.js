$(document).ready(function(){

	var xhr = new XMLHttpRequest();

	xhr.onload = function() {

		var jsonResponce = JSON.parse(xhr.responseText); 

		console.log (jsonResponce);

		var output;

		for ( var i = 0; i < jsonResponce.events.length; i++){

			console.log(jsonResponce.events[i].location);

			output = "<img src='" + jsonResponce.events[i].map + "'>";

			output += "<div class='fig'><b><p>" + jsonResponce.events[i].location + "</b><p> " ;

			output += "<p> " + jsonResponce.events[i].date + "</p></div> ";

			$("#content").append(output);

		}
	}

	xhr.open("GET","data/data.json", true);
	xhr.send(null);


});