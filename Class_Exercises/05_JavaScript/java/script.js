// window.onload = function() {

// 	var happy = ":)";
// 	var nervous = ":I";
// 	var nihilist = ";)" ;
// 	var mood = document.getElementById("mood");

// 	document.getElementById("happy").onclick = function () {
// 		mood.innerHTML = happy;
// 		mood.style.color ="orange";
// 	}; 

// 	document.getElementById("nervous").onclick = function () {
// 		mood.innerHTML = nervous;
// 		mood.style.color ="red";
// 	}; 

// 	document.getElementById("nihilist").onclick = function () {
// 		mood.innerHTML = nihilist ;
// 		mood.style.color ="blue";
// 	}; 


// }

window.onload = function() {

	document.getElementById("calculate").onclick = calculatePledge;

function calculatePledge() {
	var num1 = document.getElementById("value1").value;
	var num2 = document.getElementById("value2").value;
	var result = num1 * num2 ;
	var text;

	if (result > 1000){
		text = "Hey big spender";

	} else if (result > 100){
		text = " Thank you ";

	}else {
		text = "Thanks man";

	}


	document.getElementById("calculation").innerHTML = "$" + result + "(" + text + ")";
	}
}