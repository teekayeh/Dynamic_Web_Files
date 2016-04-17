$(document).ready(function() {

	$("input[name=num]").on("focus", function() {
		alert("not 7");
	});

	$("input[name=url]").on("blur", function() {
		var check = $(this)[0].checkValidity();

		$(this)[0].setCustomValidity("Use url http . com ");

		if (check == false){
			$(this).after($(this)[0].validationMessage)
		}
	});

	$("#submit").on("click", function () {

		var name =$("input[name=name]").val();
		$("#submit").after(name);

	});

	$("inpit[name=other]").on("keydown", function(event) {

		if(event.which == 13){
		$("#submit").click();
	});

});