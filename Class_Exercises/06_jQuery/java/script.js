$(document).ready(function() {

	// $("div").text("HOI THERE!");
	$("div").html("<h1>Heyy you</h1>");

	var text = "new string who dis";
	$("div").prepend(text);
	$("div").before(text);

	$("button").on("click", function() {
	$("div").toggleClass("highlight");
});
});
