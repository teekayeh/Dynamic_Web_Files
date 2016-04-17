 
$(document).ready(function() {
	console.log("ready?");

function Image(title, url, tags, starred) {

	this.title = title;
	this.url =  url;
	this.tags = tags;
	this.starred = starred;
	this.starToggle = function() {
	 		$("#" + this.title+ " .star").toggleClass("starOn");
	 		this.starred = !this.starred
		};
}

var img1 = new Image("Bouquet","images/bouquet.jpg", ["flower","rose","pink"], false);
var img2 = new Image("Tree","images/tree.jpg", ["tree","landscape","forest"], false);

	var images = [img1, img2]; 

	function createImages() {

		$("#gallery").empty();

	images.forEach(function(img){


		var $fig = $("<figure>");
		$fig.attr("id", img.title);

		var $img = $("<img>");
		$img.attr("src",img.url);

		var $imgInfo =$("<figcaption>");
		$imgInfo.text("TAGS: " + img.tags[0] + "," + img.tags[1] + ", " + img.tags[2]);

		var $star =$("<span>");
		$star.addClass("star");

		$imgInfo.append($star);


		$fig.append($img);
		$fig.append($imgInfo);

		$("#gallery").append($fig);

		if(img.starred == true){
			img.starToggle();
		}

		$(".star").on("click", function() {
			var obj = $(this).parent().parent().get(0);

			if(obj.id == img.title){
				img.starToggle();
			}
		});

	});
}

createImages();

	$("#filterFlower").on("click", function() {
		filter("flower");
	});
	$("#filterTree").on("click", function() {
		filter("tree");
	});
	$("#filterFav").on("click", function() {
		filter(true);
	});



function filter(tag) {
images.forEach(function(img) {

			if($.inArray(tag, img.tags) >= 0){
				$("#" + img.title).fadeIn();
			} else if (img.starred == tag){
				$("#" + img.title).fadeIn();
			} else {
				$("#" + img.title).fadeOut();
			}
		});
	}

	var name = $("input[name=title]");
	var tags = $("input[name=tags]");
	var file = $("input[type=file]");

	$("#submit").on("click", function() {

		var newImg = new Image(name.val(), window.URL.createObjectURL(file.get(0).files[0]), tags.val().split(" "), false);
		images.push(newImg);

		createImages();
	});

});