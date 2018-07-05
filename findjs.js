window.onload = function(){
	document.getElementById("first").innerHTML = "cambiat first";

	var seconds = document.getElementsByClassName("second");
	for (var i = 0; i < seconds.length; i++) {
		seconds[i].innerHTML = "cambiat second";
	}

	var divs = document.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++) {
		console.log(divs[i].innerText);
		if (divs[i].innerText == "TERCER"){
			divs[i].innerText = "cambiat tercer";
		}
	}
}