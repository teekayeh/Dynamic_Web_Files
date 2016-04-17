var main = function() {
	"use strict";

	$getJSON("aceOfSpades.json" , function (card) {
		var $cardParagraph = $("<p>");

		$cardParagraph.text(card.rank + " of " + card.suit);

		$("main").append($cardParagraph);
	});

	$getJSON("aceOfSpades.json" , function (hand) {
		var $cardParagraph = $("<ul>");

		hand.forEach(function(card) {
			var $card = $("<ul>");
			$card.text(card.rank + " of " + card.suit);
			$list.append($card);
		});

		$("main").append($list);
	});
};

$(document).ready(main);