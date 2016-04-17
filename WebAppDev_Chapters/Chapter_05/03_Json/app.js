var main = function() {
	"use strict";

	$getJSON("aceOfSpades.json" , function (card) {
		var $cardParagraph = $("<p>");

		$cardParagraph.text(card.rank + " of " + card.suit);

		$("main").append($cardParagraph);
	});
}

$(document).ready(main);